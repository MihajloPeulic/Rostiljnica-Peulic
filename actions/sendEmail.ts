"use server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export async function sendEmail(formData: FormData) {
  const isEnglish = formData.get("locale") === "en";
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 5000) {
    return { success: false, message: isEnglish ? "Please check the information you entered." : "Molimo provjerite unesene podatke." };
  }
  if (!process.env.RESEND_API_KEY) return { success: false, message: isEnglish ? "Messaging is currently unavailable. Please call us." : "Slanje poruka trenutno nije dostupno. Pozovite nas telefonom." };
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Roštiljnica Peulić <kontakt@rostiljnicapeulic.com>",
      to: site.email,
      replyTo: email,
      subject: `Poruka sa sajta: ${name.replace(/[\r\n]/g, " ")}`,
      text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
    });
    if (error) throw error;
    return { success: true, message: isEnglish ? "Your message has been sent!" : "Poruka je uspješno poslana!" };
  } catch { return { success: false, message: isEnglish ? "The message could not be sent. Please try again or call us." : "Poruka nije poslana. Pokušajte ponovo ili nas pozovite." }; }
}
