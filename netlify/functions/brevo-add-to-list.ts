/// <reference types="node" />

export const handler = async () => {
    try{

        const lists = await getAllLists().then(data => data.lists || []);
        const ids = await getAllSubscribers().then(data =>{
            return data.contacts.map((contacts: any)=> contacts.id);
        })

        console.log("Fetched lists from Brevo:", lists);
        console.log("Fetched contacts from Brevo:", ids);

        let listId = "";

        if(lists.length > 0){
            listId = lists[0].id;
        }

        if (!ids.length) return { statusCode: 400, body: "No contact IDs to add" };

        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
          // Don’t expose the key; just say misconfigured
          return { statusCode: 500, body: "Server misconfig: BREVO_API_KEY is missing" };
        }

        const response = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": apiKey
            },
            body: JSON.stringify({ids})
        });

        const text = await response.text();
        return { statusCode: response.status, body: text };

    }catch (e: any) {
        return { statusCode: 500, body: e?.message ?? "Server error" };
    }
}
        

    async function getAllLists() : Promise<any> {
        try{

            const apiKey = process.env.BREVO_API_KEY;
            if (!apiKey) {
              return { statusCode: 500, body: "Server misconfig: BREVO_API_KEY is missing" };
            }

            const response = await fetch("https://api.brevo.com/v3/contacts/lists?limit=10&offset=0&sort=desc", {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "content-Type": "application/json",
                    "api-key": apiKey
                },
            });

            return response.json();

        }catch(error){
            console.error("Error in getAllLists:", error);
            throw error;
        }
    }


    async function getAllSubscribers() : Promise<any> {
        try{

            const apiKey = process.env.BREVO_API_KEY;
            if (!apiKey) {
              return { statusCode: 500, body: "Server misconfig: BREVO_API_KEY is missing" };
            }

            const response = await fetch("https://api.brevo.com/v3/contacts?limit=50&offset=0&sort=desc",{
                method: "GET",
                headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": apiKey
                },
            });

            return response.json();

        }catch(error){
            console.error("Error in getAllSubscribers:", error);
            throw error;
        }
    }
