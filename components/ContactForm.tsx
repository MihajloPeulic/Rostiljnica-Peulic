"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";


export default function ContactForm() {

  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);


  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);

    setStatus(result);
  }


  return (
    <form action={handleSubmit} className="mt-8 space-y-6">


      <div className="grid md:grid-cols-2 gap-6">


        <input
          placeholder="Ime"
          name="name"
          required
          className="
            rounded-2xl
            bg-black/40
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-amber-400
          "
        />


        <input
          placeholder="Email"
          name="email"
          type="email"
          required
          className="
            rounded-2xl
            bg-black/40
            border
            border-white/10
            px-5
            py-4
            outline-none
            focus:border-amber-400
          "
        />


      </div>




      <textarea
        rows={5}
        placeholder="Vaša poruka..."
        name="message"
        required
        className="
          w-full
          rounded-2xl
          bg-black/40
          border
          border-white/10
          px-5
          py-4
          outline-none
          focus:border-amber-400
        "
      />




      <button
        type="submit"
        className="
          w-full
          bg-amber-500
          text-black
          py-4
          rounded-full
          font-semibold
          hover:scale-[1.02]
          transition
        "
      >
        Pošalji poruku
      </button>




      {status && (
        <p
          className={`
            text-center
            mt-4
            ${status.success 
              ? "text-green-400" 
              : "text-red-400"
            }
          `}
        >
          {status.message}
        </p>
      )}


    </form>
  );
}