"use client";

import { useState, type FormEvent } from "react";

const INTERESTS = ["Solar Power", "Water Pumping", "Consultancy", "Energy Audit"];

export default function ContactForm({ initialInterest }: { initialInterest?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState(
    initialInterest && INTERESTS.includes(initialInterest) ? initialInterest : INTERESTS[0]
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-fade-in-up rounded-xl border border-ae-orange/30 bg-ae-orange/5 p-8 text-center">
        <h3 className="font-heading text-lg font-semibold text-ae-charcoal">Thanks, message received</h3>
        <p className="mt-2 text-sm text-ae-warmgrey">
          A member of the Absolute Energy team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ae-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm text-ae-charcoal focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ae-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm text-ae-charcoal focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ae-charcoal">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm text-ae-charcoal focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-ae-charcoal">
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="mt-1 w-full rounded-lg border border-ae-lightgrey bg-white px-4 py-2.5 text-sm text-ae-charcoal focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
        >
          {INTERESTS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ae-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-ae-lightgrey px-4 py-2.5 text-sm text-ae-charcoal focus:border-ae-orange focus:outline-none focus:ring-1 focus:ring-ae-orange"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ae-orange px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ae-orange/90 sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
