// import { createClient } from "smtpexpress";



// export class SmtpAPI {

//     async sendEmail(emailData: { name: string, email: string, phone: string, message: string }) : Promise<any> {

//         try{

//             const smtpClient = createClient({
//                 projectId: "sm0pid-8UynBgfjmGLpctgVOXmylveGI",
//                 projectSecret: "f2c284bda7db77a0c99cb12c11f0c6680d8dd1e1a052249d69",
//             });

//             await smtpClient.sendApi.sendMail({
//                 subject: `New contact form submission from ${emailData.name}`,
//                 message: `<p><strong>Email:</strong> ${emailData.email}</p>
//                           <p><strong>Content:</strong> ${emailData.message}</p>`,
//                 sender:{
//                     name: "Recoveride Contact Form",
//                     email: "recoveride--8e105b@ensend.me"
//                 },
//                 recipients: {
//                     email: "recoveridenl@gmail.com"
//                 }
//             });


//             // const response = await fetch("/.netlify/functions/brevo-create-contact", {
//             //     method: "POST",
//             //     headers: {
//             //         "accept": "application/json",
//             //         "content-Type": "application/json",
//             //     },
//             //     body: JSON.stringify({ email: emailData.email, name: emailData.name })
//             // });

//             // if (!response.ok) throw new Error(`Failed sending email via SMTP: ${response.status} ${response.statusText}`);

//         }catch(error){
//             console.error("Error in sendEmail:", error);
//             throw error;
//         }
//     }

// }