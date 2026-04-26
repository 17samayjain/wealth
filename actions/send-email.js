"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
  console.log('sendEmail', { to, subject, react }, process.env.RESEND_API_KEY)
  const resend = new Resend(process.env.RESEND_API_KEY || "");

  try {
    const data = await resend.emails.send({
      from: "Finance App <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    console.log('Success', data)

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
