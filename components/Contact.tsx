"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message:", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  const mailtoLink = `mailto:your@email.com`;
  const whatsappLink = `https://wa.me/237YOURNUMBER`;

  return (
    <section className="pb-24 pt-4">
      <div className="grid md:grid-cols-12 gap-12">
        {/* LEFT - Contact Methods */}
        <div className="md:col-span-4 space-y-6">
          <p className="text-muted-foreground">
            Prefer reaching out directly? You can contact me via email or
            WhatsApp.
          </p>

          {/* Email Card */}
          <a
            href={mailtoLink}
            className="block p-6 bg-white/5 backdrop-blur border border-white/10 rounded-md hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">your@email.com</p>
              </div>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href={whatsappLink}
            target="_blank"
            className="block p-6 bg-white/5 backdrop-blur border border-white/10 rounded-md hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-muted-foreground">
                  +237 XXX XXX XXX
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* RIGHT - Contact Form */}
        <div className="md:col-span-8">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-md p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-md focus:bg-white/10 focus:transition-all border border-white/20 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-md focus:bg-white/10 border focus:transition-all border-white/20 focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 rounded-md focus:bg-white/10 focus:transition-all border border-white/20 focus:outline-none resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#contact">
                  <button className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                      <span className="absolute inset-0 rounded-xl [radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                      <span>Lets get in touch</span>
                    </div>
                    <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
