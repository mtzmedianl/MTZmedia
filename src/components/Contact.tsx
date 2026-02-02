import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamisch Calendly script laden
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Wanneer script is geladen, init inline widget
    script.onload = () => {
      if (window.Calendly && calendlyRef.current) {
        // @ts-ignore
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/mateusz-mtzmedia/30min?background_color=0a0a0a&text_color=ffffff&primary_color=0072e8",
          parentElement: calendlyRef.current,
          // hoogte van de widget beperken om scroll te voorkomen
          // inline widget past zich automatisch aan, maar kan via CSS max-height worden afgedwongen
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="bg-transparent relative pt-32 pb-16 overflow-hidden">
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
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light">
            Laten we samen iets buitengewoons creëren.
          </p>
        </motion.div>

        {/* Calendly inline widget */}
        <div
          ref={calendlyRef}
          className="w-full max-w-3xl mx-auto h-[600px]" // hoogte aanpassen naar wens
        ></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 md:gap-0"
        >
          {/* Bedrijfsgegevens */}
          <div className="flex flex-col text-left">
            <div className="text-2xl font-display font-bold text-white mb-2">
              MTZ MEDIA<span className="text-dodger-blue">.</span>
            </div>
            <div className="text-xs text-gray-500 space-y-1 uppercase tracking-wider font-light">
              <p>Adres: Albert Cuypstraat 9, 8932 EC Leeuwarden</p>
              <p>KVK Nummer: 96400188</p>
              <p>BTW Nummer: NL005208001B16</p>
              <p>Rechtsvorm: Eenmanszaak</p>
            </div>
          </div>

          {/* Contact + Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-8">
              <a
                href="https://www.instagram.com/mtzmedia.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-dodger-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mateusz-michalczyszyn-4172a1377/?originalSubdomain=nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-dodger-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@mtzmedia.nl" className="text-gray-500 hover:text-dodger-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+31616341719" className="text-gray-500 hover:text-dodger-blue transition-colors">
                <Phone size={20} />
              </a>
            </div>

            <div className="text-xs text-gray-600 uppercase tracking-widest">
              © 2025 MTZ Media. Alle rechten voorbehouden.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
