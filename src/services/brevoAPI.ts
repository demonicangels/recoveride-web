import type { newsletterSignupRequest } from "../types/newsletterSignupRequest";

export class BrevoAPI {

    async sendSubscriberToBrevo(subscriber: newsletterSignupRequest) : Promise<any> {

        try{

            const response = await fetch("/.netlify/functions/brevo-create-contact", {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "content-Type": "application/json",
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

            const response = await fetch(`/.netlify/functions/brevo-add-to-list`, {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "content-Type": "application/json",
                },
            });

            const text = await response.text();
            if (!response.ok) throw new Error(`Add to list failed: ${response.status} ${response.statusText} – ${text}`);
            try { return JSON.parse(text); } catch { return text; }

        }catch(error){
            console.error("Error in putAllSubscribersInList:", error); 
            throw error;
        }
    }
}