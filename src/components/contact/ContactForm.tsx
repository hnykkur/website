"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { projectTypes } from "@/lib/contact";
import { site } from "@/lib/site";

const initialState: ContactState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Project type{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
        >
          <option value="">Select a type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
          placeholder="What are you building?"
        />
      </div>

      {state.status !== "idle" && (
        <p
          role="status"
          className={
            state.status === "success"
              ? "text-sm text-accent"
              : "text-sm text-red-700"
          }
        >
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </Button>
        <p className="text-sm text-muted">
          Or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-foreground underline-offset-4 hover:text-accent hover:underline"
          >
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}
