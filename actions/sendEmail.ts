"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Molimo popunite sva polja."
    };
  }

  try {
    await resend.emails.send({
      from: "Restoran <onboarding@resend.dev>",
      to: "mihajlopeulic7@gmail.com",
      replyTo: email.toString(),
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova kontakt poruka</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      success: true,
      message: "Poruka je uspješno poslana!"
    };

  } catch (error) {
    return {
      success: false,
      message: "Greška prilikom slanja poruke."
    };
  }
}