import emailjs from '@emailjs/browser';


export class SmtpAPI {

    private serviceId : string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    private contactTemplateId : string = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || '';
    private publicKey : string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
    private autoReplyTemplateId : string = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';


    async sendEmail(formData: { name: string; email: string; phone: string; message: string; }) {
        console.log("Sending email with data:", formData);

        const data = {
            'name': formData.name,
            'message': formData.message,    
            'email': formData.email,
            'phone': formData.phone,
        }

        const response = await emailjs.send(
            this.serviceId,
            this.contactTemplateId,
            data,
            this.publicKey,
        );

        console.log("EmailJS response:", response);
        return response;        
    }

    async sendAutoReply(to: { name: string; email: string; }) {
        console.log("Sending auto-reply to:", to.name, "Email:", to.email);

        const data = {
            'to_name': to.name,
            'to_email': to.email,    
        }

        const response = await emailjs.send(
            this.serviceId,
            this.autoReplyTemplateId,
            data,
            this.publicKey,
        );

        console.log("Auto-reply EmailJS response:", response);
        return response;
    }
}