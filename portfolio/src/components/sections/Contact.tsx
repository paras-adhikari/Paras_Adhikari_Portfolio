import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiSend, FiUser, FiMail, FiTag, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/data/social";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Not configured yet — see .env.example for setup instructions.
      console.warn("EmailJS is not configured. Add your keys to a .env file.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const fields = [
    { name: "name", label: "Name", type: "text", icon: FiUser, placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", icon: FiMail, placeholder: "you@example.com" },
    { name: "subject", label: "Subject", type: "text", icon: FiTag, placeholder: "What's this about?" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, project or just want to say hi? My inbox is open."
        />

        <div className="max-w-2xl mx-auto">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass gradient-border rounded-3xl p-8 sm:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.slice(0, 2).map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                    {field.label}
                  </label>
                  <div className="relative">
                    <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-cyan/50 focus:ring-2 focus:ring-aurora-cyan/20 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                Subject
              </label>
              <div className="relative">
                <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-cyan/50 focus:ring-2 focus:ring-aurora-cyan/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                Message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-white/30" size={16} />
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-aurora-cyan/50 focus:ring-2 focus:ring-aurora-cyan/20 transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <FiSend size={17} />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400 justify-center">
                <FiCheckCircle /> Message sent — I'll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-rose-400 justify-center">
                <FiAlertCircle /> Something went wrong. Please configure EmailJS or try again later.
              </p>
            )}
          </motion.form>

          <div className="flex items-center justify-center gap-4 mt-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 grid place-items-center rounded-full glass hover:text-aurora-cyan hover:border-aurora-cyan/40 transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
