import type { newsletterSignupRequest } from "../types/newsletterSignupRequest";

export class BrevoAPI {

    apiKey: string = process.env.NEXT_PUBLIC_BREVO_API_KEY || "";

    async sendSubscriberToBrevo(subscriber: newsletterSignupRequest) : Promise<any> {

        try{

            const response = await fetch("https://api.brevo.com/v3/contacts", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "api-key": this.apiKey,
                },
                body: JSON.stringify({email: subscriber.email, name: subscriber.name }),
            });

            const text = await response.text();
            if (!response.ok) throw new Error(`Add subscriber failed: ${response.status} ${response.statusText} – ${text}`);
            try { return JSON.parse(text); } catch { return text; }

        }catch(error){
            console.error("Error in sendSubscriberToBrevo:", error);
            throw error;
        }

        
    }

    async putAllSubscribersInList() : Promise<any> {

        try{

            const lists = await this.getAllLists().then(data => data.lists || []);
            const ids = await this.getAllSubscribers().then(data =>{
                return (data.contacts || []).map((contact: any) => contact.id);
            });

            console.log("Fetched lists from Brevo:", lists);
            console.log("Fetched contacts from Brevo:", ids);

            let listId = "";

            if(lists.length > 0){
                listId = lists[0].id;
            }

            if (!ids.length) return { statusCode: 400, body: "No contact IDs to add" };

            const response = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "api-key": this.apiKey,
                },
                body: JSON.stringify({ ids }),
            });

            const text = await response.text();
            if (!response.ok) throw new Error(`Add to list failed: ${response.status} ${response.statusText} – ${text}`);
            try { return JSON.parse(text); } catch { return text; }

        }catch(error){
            console.error("Error in putAllSubscribersInList:", error); 
            throw error;
        }
    }

    async getAllLists() : Promise<any> {
        try{

            const apiKey = this.apiKey;
            if (!apiKey) {
              return { statusCode: 500, body: "Server misconfig: BREVO_API_KEY is missing" };
            }

            const response = await fetch("https://api.brevo.com/v3/contacts/lists?limit=10&offset=0&sort=desc", {
                method: "GET",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                    "api-key": apiKey
                },
            });

            return response.json();

        }catch(error){
            console.error("Error in getAllLists:", error);
            throw error;
        }
    }


    async getAllSubscribers() : Promise<any> {
        try{

            const apiKey = this.apiKey;
            if (!apiKey) {
              return { statusCode: 500, body: "Server misconfig: BREVO_API_KEY is missing" };
            }

            const response = await fetch("https://api.brevo.com/v3/contacts?limit=50&offset=0&sort=desc",{
                method: "GET",
                headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "api-key": apiKey
                },
            });

            return response.json();

        }catch(error){
            console.error("Error in getAllSubscribers:", error);
            throw error;
        }
    }
}