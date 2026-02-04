import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Phone } from 'lucide-react';

const CALENDLY_URL =
  'https://calendly.com/mateusz-mtzmedia/30min?background_color=0c0c0c&text_color=ffffff&primary_color=1e90ff';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // Honeypot (anti-spam)
    if (formData.get('company')) {
      setLoading(false);
      return;
    }

    /**
     * HIER:
     * later → mail / backend / Formspree / Resend
     * nu → UX flow testen
     */
    await new Promise((r) => setTimeout(r, 800));

    // Redirect naar Calendly
    window.location.href = CALENDLY_URL;
  };

  return (
    <section
      id="contact"
      className="bg-transparent relative pt-32 pb-16 overflow-hidden"
    >
      {/* Vertical guide line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-dodger-blue/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-dodger-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight">
            KLAAR VOOR DE <br />
            <span className="text-dodger-blue">VOLGENDE STAP?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16 font-light">
            Vertel ons waar je naartoe wilt.
            <br />
            Wij vertalen dat naar video die blijft hangen.
          </p>

          {/* FORM */}
          <form
  onSubmit={handleSubmit}
  className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
>
  {/* Honeypot */}
  <input type="text" name="company" className="hidden" />

  {/* Rij 1 */}
  <input
    required
    name="name"
    placeholder="Naam *"
    className="contact-input"
  />
  <input
    required
    type="email"
    name="email"
    placeholder="E-mail *"
    className="contact-input"
  />

  {/* Rij 2 */}
  <input
    name="business"
    placeholder="Bedrijfsnaam"
    className="contact-input"
  />
  <input
    name="link"
    placeholder="Website of social link"
    className="contact-input"
  />

  {/* Rij 3 – Dropdown */}
  <select
    required
    name="service"
    defaultValue=""
    className="contact-input md:col-span-2"
  >
    <option value="" disabled>
      Waar kunnen we je mee helpen? *
    </option>
    <option value="short-form">Short-form content (Reels / TikTok)</option>
    <option value="social-video">Social media video</option>
    <option value="ads">Advertentie video’s</option>
    <option value="brand-film">Brand / bedrijfsfilm</option>
    <option value="other">Anders</option>
  </select>

  {/* Rij 4 – Textarea */}
  <textarea
    required
    name="message"
    placeholder="Wat wil je laten zien of bereiken met video?"
    className="contact-input md:col-span-2 h-40 resize-none"
  />

  {/* CTA */}
  <div className="md:col-span-2 flex flex-col items-center mt-10 gap-4">
    <button
      type="submit"
      disabled={loading}
      className="relative px-14 py-5 bg-dodger-blue text-white font-bold uppercase tracking-[0.25em] text-sm rounded-sm shadow-[0_0_30px_rgba(30,144,255,0.45)] hover:shadow-[0_0_50px_rgba(30,144,255,0.7)] transition-all"
    >
      {loading ? 'Even laden…' : 'Plan een kennismaking'}
    </button>

    <span className="text-xs text-gray-500 uppercase tracking-widest">
      Vrijblijvend • Persoonlijk • Geen verplichtingen
    </span>
  </div>
</form>

        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end md:items-center gap-6"
        >
          <div className="flex flex-col text-left">
            <div className="text-2xl font-display font-bold text-white mb-2">
              MTZ MEDIA<span className="text-dodger-blue">.</span>
            </div>
            <div className="text-xs text-gray-500 space-y-1 uppercase tracking-wider">
              <p>Albert Cuypstraat 9, 8932 EC Leeuwarden</p>
              <p>KVK 96400188</p>
              <p>BTW NL005208001B16</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-8">
              <a
                href="https://www.instagram.com/mtzmedia.nl/"
                target="_blank"
                className="social"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="social"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@mtzmedia.com" className="social">
                <Mail size={20} />
              </a>
              <a href="tel:+31616341719" className="social">
                <Phone size={20} />
              </a>
            </div>

            <div className="text-xs text-gray-600 uppercase tracking-widest">
              © {new Date().getFullYear()} MTZ Media
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
