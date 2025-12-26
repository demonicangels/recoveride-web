# Recoveride web

**Recoveride Web** is the official website for **Recoveride**, a startup focused on providing bike protection and recovery services. This website, built with **Next.js** and **TypeScript**, allows users to sign up with their email for early access and contact the support team directly. The website integrates with **Brevo API** for email campaign signups and **EmailJS** for handling emails from the contact form of the website.

## Features

- **Email Campaign Signup**: Users can sign up for the early acess email campaign via the integrated Brevo API.
- **Contact Form**: A dynamic contact form powered by **EmailJS**, allowing users to send messages directly to the support team of Recoveride.
- **Report your bike as stolen**: A dynamic form allowing users to notify the recovery team upon their bike being stolen. 
- **Responsive Design**: Fully responsive layout, optimized for both mobile and desktop devices.

## Tech Stack

- **Next.js**: Framework for building the website.
- **TypeScript**: For type safety and enhanced development.
- **Brevo API**: For handling the email campaigns, subscriptions for early access, and managing user email data.
- **EmailJS**: For submitting the contact form data directly to the email inbox without the need for a separate backend.


## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn (for package management)

### Steps

1. Clone the repository:

   ```
   $ git clone https://github.com/your-username/recoveride-web.git
   $ cd recoveride-web
   ```

2. Install dependencies:
  
    With npm:

    ``` 
    $ npm install
    ```
  
    Or with yarn:

    ```
    $ yarn install
    ```
3. Create a **`.env`** file at the root of the project and add the following environment variables from **`env.example`**:
    ```
    NEXT_PUBLIC_BREVO_API_KEY=your_brevo_api_key_here
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
    NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_emailjs_contact_template_id_here
    NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_emailjs_autoreply_template_id_here
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
    ```
    Replace the placeholder values with your actual API keys from Brevo and EmailJS.

4. Run the development server 

    With npm:

    ``` 
    $ npm run dev
    ```
  
    Or with yarn:

    ```
    $ yarn dev
    ```

    Visit http://localhost:3000 in your browser to see the website in action.

## Temporary Access

The website can be temporarily accessed from its production deployment at [https://recoveride.nl](https://recoveride.nl).
