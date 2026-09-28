"use client";

import { useEffect, useState } from "react";

const playHref = "/hanzitree/play/";

/** Set on the first open of the web app. shared_preferences prefixes keys with flutter. */
const visitKey = "flutter.progress_visit_day_count_v1";

export function PlayLaunch() {
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(visitKey);
      const count = raw == null ? 0 : Number(raw);
      setPlayed(Number.isFinite(count) && count > 0);
    } catch {
      setPlayed(false);
    }
  }, []);

  return (
    <a
      href={playHref}
      className="mt-10 inline-flex min-h-20 w-full max-w-xl items-center justify-center rounded-md bg-foreground px-10 py-6 text-2xl font-semibold tracking-tight text-background transition-colors hover:bg-foreground/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:w-auto sm:min-w-80 sm:text-3xl"
    >
      {played ? "Continue" : "Play in the browser"}
    </a>
  );
}
