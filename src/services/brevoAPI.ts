import type { newsletterSignupRequest } from "../types/newsletterSignupRequest";

export class BrevoAPI {

    private apiKey(): string {
        return import.meta.env.VITE_BREVO_API_KEY || "";
    }

    async sendSubscriberToBrevo(subscriber: newsletterSignupRequest) : Promise<any> {

        console.log("Sending subscriber to Brevo:", subscriber, "using API key:", this.apiKey());

        const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": this.apiKey()
            },
            body: JSON.stringify({
                email: subscriber.email,
                attributes: {
                    FIRSTNAME: subscriber.name,
                }}),
        });

        if (!response.ok) {
            throw new Error(`Error adding subscriber: ${response.statusText}`); 
        }

        return response.json();
    }

    async putAllSubscribersInList() : Promise<any> {
        const lists = await this.getAllLists().then(data => data.lists || []);
        const ids = await this.getAllSubscribers().then(data =>{
            return data.contacts.map((contacts: any)=> contacts.id);
        })

        console.log("Fetched lists from Brevo:", lists);
        console.log("Fetched contacts from Brevo:", ids);

        let listId = "";

        if(lists.length > 0){
            listId = lists[0].id;
        }

        const response = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}/contacts/add`, {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": this.apiKey()
            },
            body: JSON.stringify({ids})
        });

        if (!response.ok) {
            throw new Error(`Error adding subscribers to list: ${response.statusText}`); 
        }

        return response.json(); 
    }

    private async getAllLists() : Promise<any> {
        const response = await fetch("https://api.brevo.com/v3/contacts/lists?limit=10&offset=0&sort=desc", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": this.apiKey()
            },
        });

        return response.json();
    }

    private async getAllSubscribers() : Promise<any> {
        const response = await fetch("https://api.brevo.com/v3/contacts?limit=50&offset=0&sort=desc",{
            method: "GET",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": this.apiKey()
            },
        });

        return response.json();
    }
}