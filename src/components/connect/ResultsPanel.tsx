"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { renderResultCard } from "@/lib/resultCard";

export interface ResultItem {
  label: string;
  value: string;
  sub?: string;
}

export default function ResultsPanel({
  heading,
  items,
  note,
  caveat,
  onReset,
  quotationHref,
  consultationHref,
}: {
  heading: string;
  items: ResultItem[];
  note?: string;
  caveat?: string;
  onReset: () => void;
  quotationHref: string;
  consultationHref?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [busy, setBusy] = useState<"download" | "share" | null>(null);

  useEffect(() => {
    // Feature-detect after mount to avoid an SSR/client markup mismatch (navigator is undefined on the server).
    const id = window.setTimeout(() => setCanShare("share" in navigator), 0);
    return () => window.clearTimeout(id);
  }, []);

  const summaryText = `Absolute Energy: AE Connect result\n\n${items
    .map((item) => `${item.label}: ${item.value}`)
    .join("\n")}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access unavailable, silently ignore: copy button is a convenience only.
    }
  }

  async function handleShare() {
    setBusy("share");
    try {
      const blob = await renderResultCard({ heading, items, caveat, note });
      const file = new File([blob], "absolute-energy-ae-connect-result.png", { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: "Absolute Energy: AE Connect result", files: [file] });
      } else {
        await navigator.share({ title: "Absolute Energy: AE Connect result", text: summaryText });
      }
    } catch {
      // Share cancelled, rendering failed, or unavailable, silently ignore: share is a convenience only.
    } finally {
      setBusy(null);
    }
  }

  async function handleDownload() {
    setBusy("download");
    try {
      const blob = await renderResultCard({ heading, items, caveat, note });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "absolute-energy-ae-connect-result.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch {
      // Rendering failed (e.g. logo asset unreachable) — fall back to a plain-text download.
      const blob = new Blob([summaryText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "absolute-energy-ae-connect-result.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="animate-fade-in-up rounded-2xl border border-ae-orange/30 bg-ae-orange/5 p-6 sm:p-8">
      <h2 className="font-heading text-xl font-semibold text-ae-charcoal">Your Result</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-in-up rounded-xl bg-white p-5 text-center shadow-sm"
            style={{ animationDelay: `${100 + i * 90}ms` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-ae-warmgrey">{item.label}</p>
            <p className="mt-2 font-heading text-2xl font-bold text-ae-orange">{item.value}</p>
            {item.sub && <p className="mt-1 text-xs text-ae-warmgrey">{item.sub}</p>}
          </div>
        ))}
      </div>

      {caveat && (
        <p className="mt-6 rounded-lg bg-white px-4 py-3 text-xs text-ae-warmgrey">{caveat}</p>
      )}
      {note && <p className="mt-4 text-xs text-ae-warmgrey">{note}</p>}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={quotationHref}
          className="rounded-full bg-ae-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90"
        >
          Proceed to Quotation
        </Link>
        {consultationHref && (
          <Link
            href={consultationHref}
            className="rounded-full border border-ae-charcoal px-6 py-2.5 text-sm font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
          >
            Talk to an Engineer
          </Link>
        )}
        <button
          type="button"
          onClick={handleDownload}
          disabled={busy === "download"}
          className="rounded-full border border-ae-lightgrey px-6 py-2.5 text-sm font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange disabled:pointer-events-none disabled:opacity-60"
        >
          {busy === "download" ? "Preparing…" : "Download"}
        </button>
        {canShare ? (
          <button
            type="button"
            onClick={handleShare}
            disabled={busy === "share"}
            className="rounded-full border border-ae-lightgrey px-6 py-2.5 text-sm font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange disabled:pointer-events-none disabled:opacity-60"
          >
            {busy === "share" ? "Preparing…" : "Share"}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full border border-ae-lightgrey px-6 py-2.5 text-sm font-semibold text-ae-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:border-ae-orange hover:text-ae-orange"
          >
            {copied ? "Copied!" : "Copy Summary"}
          </button>
        )}
        <button
          type="button"
          onClick={onReset}
          className="rounded-full px-6 py-2.5 text-sm font-semibold text-ae-warmgrey hover:text-ae-orange"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
