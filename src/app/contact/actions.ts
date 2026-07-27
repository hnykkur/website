"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and message.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  if (message.length > 5000) {
    return {
      status: "error",
      message: "Message is too long. Please keep it under 5000 characters.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? site.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      status: "error",
      message:
        "The contact form is not configured yet. Please email directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Hnykkur <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Contact from ${name}${projectType ? ` · ${projectType}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Message sent. I’ll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
