import React, { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xwkgrzge", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="py-16 px-6 bg-purple-50">
      <h2 className="text-2xl font-semibold mb-4">Vill du hjälpa till?</h2>
      {submitted ? (
        <p className="text-green-600">Tack för ditt meddelande! 💜</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            name="name"
            type="text"
            placeholder="Ditt namn"
            required
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Din e-postadress"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Ditt meddelande"
            rows={5}
            required
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
          >
            Skicka
          </button>
        </form>
      )}
    </section>
  );
}
