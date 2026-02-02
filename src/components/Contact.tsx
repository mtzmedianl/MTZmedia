import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Twitter, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-transparent relative pt-32 pb-16 overflow-hidden">
      {/* Vertical Guide Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-dodger-blue/30 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-dodger-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight">
                KLAAR VOOR DE <br /><span className="text-dodger-blue">VOLGENDE STAP?</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 font-light">
                We nemen een beperkt aantal nieuwe klanten aan voor Q4. <br />
                Laten we samen iets buitengewoons creëren.
            </p>

            {/* Premium CTA Button */}
            <a 
                href="mailto:info@mtzmedia.nl" 
                className="inline-block group relative px-12 py-5 bg-dodger-blue text-white font-bold uppercase tracking-[0.2em] text-sm overflow-hidden rounded-sm shadow-[0_0_20px_rgba(18,116,229,0.4)] hover:shadow-[0_0_40px_rgba(18,116,229,0.6)] transition-all duration-300"
            >
                {/* Diagonal Light Sweep */}
                <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-sm ring-2 ring-white/20 group-hover:ring-white/40 group-hover:animate-pulse transition-all"></div>
                
                <span className="relative z-10">Start jouw Project</span>
            </a>
        </motion.div>
        
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
            <a href="https://www.instagram.com/mtzmedia.nl/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-dodger-blue transition-colors">
                <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/mateusz-michalczyszyn-4172a1377/?originalSubdomain=nl" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-dodger-blue transition-colors">
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
