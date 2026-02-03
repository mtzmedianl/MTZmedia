import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // Honeypot
    if (formData.get('company')) {
      setLoading(false);
      return;
    }

    // ⬇️ hier later backend / email / Formspree
    await new Promise((r) => setTimeout(r, 1200));

    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contact" className="bg-transparent relative pt-32 pb-16 overflow-hidden">
      {/* Vertical Guide Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-dodger-blue/30 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-dodger-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight">
            KLAAR VOOR DE <br />
            <span className="text-dodger-blue">VOLGENDE STAP?</span>
          </h2>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16 font-light">
            We nemen een beperkt aantal nieuwe klanten aan voor Q4.
            <br />
            Laten we samen iets buitengewoons creëren.
          </p>

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
            >
              {/* Honeypot */}
              <input type="text" name="company" className="hidden" />

              <input required name="name" placeholder="Naam *" className="contact-input" />
              <input required type="email" name="email" placeholder="E-mail *" className="contact-input" />
              <input name="phone" placeholder="Telefoonnummer" className="contact-input" />
              <input name="business" placeholder="Bedrijfsnaam" className="contact-input" />

              <textarea
                required
                name="message"
                placeholder="Waarmee kunnen we je helpen?"
                className="contact-input md:col-span-2 h-40 resize-none"
              />

              <div className="md:col-span-2 flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="relative px-12 py-5 bg-dodger-blue text-white font-bold uppercase tracking-[0.2em] text-sm rounded-sm shadow-[0_0_30px_rgba(0,114,232,0.5)] hover:shadow-[0_0_50px_rgba(0,114,232,0.7)] transition-all"
                >
                  {loading ? 'Verzenden…' : 'Start jouw Project'}
                </button>
              </div>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white">
              <h3 className="text-3xl font-bold mb-4">Thanks 🚀</h3>
              <p className="text-gray-400">
                We nemen zo snel mogelijk contact met je op.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer */}
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
              <a href="https://www.instagram.com/mtzmedia.nl/" target="_blank" className="social">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="social">
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
