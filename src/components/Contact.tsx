import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Phone, Play } from 'lucide-react';

// Vervang dit met jouw Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    // Honeypot (anti-spam)
    if (formData.get('company')) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Er is iets misgegaan. Probeer het opnieuw.');
      }
    } catch (err) {
      setError('Er is iets misgegaan. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black relative pt-32 pb-16 overflow-hidden"
    >
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
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            Klaar om jouw <br />
            <span className="text-dodger-blue">verhaal tot leven te brengen?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Laat ons weten wat jij wilt bereiken. <br />
            Wij zetten het om in een video die écht blijft hangen.
          </p>

          {/* Success & Error Toast */}
          {submitted && (
            <div className="mb-6 inline-block px-6 py-3 bg-dodger-blue/20 text-white rounded-md font-medium">
              Bedankt! Ik neem binnenkort contact met je op. 💌
              <br />
              (Je kunt ondertussen ook direct een afspraak plannen: <a href="https://calendly.com/mateusz-mtzmedia/30min?background_color=0c0c0c&text_color=ffffff&primary_color=1e90ff" className="text-dodger-blue underline">Plan hier</a>)
            </div>
          )}
          {error && (
            <div className="mb-6 inline-block px-6 py-3 bg-red-600 text-white rounded-md font-medium">
              {error}
            </div>
          )}

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" />

            {/* Rij 1 */}
            <div className="flex flex-col">
              <input
                required
                name="name"
                placeholder="Bijv. Jan de Vries"
                className="contact-input placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dodger-blue rounded-md px-4 py-3 bg-gray-900 text-white"
              />
              <small className="text-gray-500 mt-1">Vul je volledige naam in.</small>
            </div>
            <div className="flex flex-col">
              <input
                required
                type="email"
                name="email"
                placeholder="Bijv. jan@email.com"
                className="contact-input placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dodger-blue rounded-md px-4 py-3 bg-gray-900 text-white"
              />
              <small className="text-gray-500 mt-1">Hier ontvang je mijn reactie.</small>
            </div>

            {/* Rij 2 */}
            <div className="flex flex-col">
              <input
                name="business"
                placeholder="Bedrijfsnaam (optioneel)"
                className="contact-input placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dodger-blue rounded-md px-4 py-3 bg-gray-900 text-white"
              />
            </div>
            <div className="flex flex-col">
              <input
                name="link"
                placeholder="Website, Instagram of LinkedIn"
                className="contact-input placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dodger-blue rounded-md px-4 py-3 bg-gray-900 text-white"
              />
            </div>

            {/* Rij 3 – Dropdown */}
            <div className="md:col-span-2 flex flex-col">
              <select
                required
                name="service"
                defaultValue=""
                className="contact-input placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dodger-blue rounded-md px-4 py-3 bg-gray-900 text-gray-300"
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
            </div>

            {/* Rij 4 – Textarea */}
            <div className="md:col-span-2 flex flex-col">
              <textarea
                required
                name="message"
                placeholder="Wat wil je laten zien of bereiken met video?"
                className="contact-input resize-none h-48 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-dodger-blue rounded-md px-4 py-3 bg-gray-900 text-white"
              />
              <small className="text-gray-500 mt-1">
                Vertel zo duidelijk mogelijk wat je wilt bereiken.
              </small>
            </div>

            {/* CTA */}
            <div className="md:col-span-2 flex flex-col items-center mt-10 gap-4">
              <button
                type="submit"
                disabled={loading}
                className="relative flex items-center gap-2 justify-center px-16 py-5 bg-dodger-blue text-white font-bold uppercase tracking-[0.25em] text-sm rounded-md shadow-[0_0_30px_rgba(30,144,255,0.45)] hover:shadow-[0_0_50px_rgba(30,144,255,0.7)] transition-all"
              >
                <Play size={16} />
                {loading ? 'Even laden…' : 'Stuur jouw project'}
              </button>

              <span className="text-xs text-gray-500 uppercase tracking-widest flex gap-4">
                <span>🎯 Vrijblijvend</span>
                <span>🤝 Persoonlijk</span>
                <span>🚀 Geen verplichtingen</span>
              </span>

              <p className="text-gray-600 text-xs mt-2">
                Je gegevens worden nooit gedeeld en alleen gebruikt om je project te bespreken.
              </p>
            </div>
          </form>
        </motion.div>

        {/* FOOTER blijft gelijk */}
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
