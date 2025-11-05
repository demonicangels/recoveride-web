/// <reference types="node" />


export const handler = async (event: any) => { 

    const { email, name } = JSON.parse(event.body || "{}");

    if (!email) {
      return { statusCode: 400, body: "Missing email" };
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      // Don’t expose the key; just say misconfigured
      return { statusCode: 500, body: "Server misconfig: BREVO_API_KEY is missing" };
    }

    try{

        const response = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-Type": "application/json",
                "api-key": apiKey
            },
            body: JSON.stringify({
                email,
                attributes: { FIRSTNAME: name ?? "" },
            }),
        });

        const text = await response.text();
        return { statusCode: response.status, body: text };

    } catch (e: any) {
        return { statusCode: 500, body: e?.message ?? "Server error" };
    }


}