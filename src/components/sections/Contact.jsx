import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send the message, please try again"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 lg:px-0"
    >
      <RevealOnScroll>
        {/* 
          Desktop: Keeps original width (w-[600px]) 
          Mobile: Full width with padding
        */}
        <div className="w-full sm:w-[600px]">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm sm:text-base transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm sm:text-base transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white text-sm sm:text-base transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
