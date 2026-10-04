"use client";
import { useRef, useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { useLocale } from "next-intl";
export default function ContactForm({ button, name, your_message }: { button: string; name: string; your_message: string }) {
  const locale = useLocale();
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  async function submit(formData: FormData) {
    setPending(true); setStatus(null);
    try { const result = await sendEmail(formData); setStatus(result); if (result.success) formRef.current?.reset(); }
    catch { setStatus({ success: false, message: locale === "en" ? "The message could not be sent. Please try again." : "Poruka nije poslana. Pokušajte ponovo." }); }
    finally { setPending(false); }
  }
  return <form ref={formRef} action={submit} className="contact-form"><input type="hidden" name="locale" value={locale} />
    <div className="form-row"><label htmlFor="contact-name">{name}<input id="contact-name" name="name" autoComplete="name" required maxLength={120} /></label><label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} /></label></div>
    <label htmlFor="contact-message">{your_message}<textarea id="contact-message" name="message" rows={6} required maxLength={5000} /></label>
    <button type="submit" disabled={pending}>{pending ? "..." : button} <span aria-hidden="true">↗</span></button>
    {status && <p className={status.success ? "form-success" : "form-error"} role="status">{status.message}</p>}
  </form>;
}
