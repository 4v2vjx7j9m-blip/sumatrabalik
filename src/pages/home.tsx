import React from 'react';
import { motion } from 'framer-motion';
import { RippleButton } from '@/components/RippleButton';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import heroBg from '@/assets/hero-bg.png';

const menuData = [
  {
    category: "Balık Ürünleri",
    items: [
      { name: "Balık Dürüm (Uskumru)", price: "290₺" },
      { name: "Balık Ekmek (Uskumru)", price: "200₺" },
      { name: "Balık Porsiyon (Uskumru)", price: "400₺" },
      { name: "Mezgit Dürüm", price: "300₺" },
      { name: "Mezgit Ekmek", price: "230₺" },
      { name: "Mezgit Porsiyon", price: "400₺" }
    ]
  },
  {
    category: "Köfte",
    items: [
      { name: "Köfte Ekmek", price: "200₺" },
      { name: "Köfte Porsiyon", price: "400₺" }
    ]
  },
  {
    category: "Midye & Kalamar",
    items: [
      { name: "Midye Dolma (10 adet)", price: "170₺" },
      { name: "Midye Tava", price: "380₺" },
      { name: "Kalamar Ekmek", price: "250₺" },
      { name: "Kalamar Porsiyon", price: "450₺" }
    ]
  },
  {
    category: "Diğer",
    items: [
      { name: "Patates Kızartma", price: "170₺" },
      { name: "Hamburger Menü", price: "390₺" },
      { name: "Mevsim Salata", price: "150₺" },
      { name: "Balık Salata", price: "280₺" }
    ]
  },
  {
    category: "İçecekler",
    items: [
      { name: "Kola", price: "50₺" },
      { name: "Fanta", price: "50₺" },
      { name: "Sprite", price: "50₺" },
      { name: "Fuse Tea", price: "50₺" },
      { name: "Şalgam", price: "50₺" },
      { name: "Turşu Suyu", price: "50₺" },
      { name: "Ayran", price: "40₺" },
      { name: "Soda", price: "30₺" },
      { name: "Su", price: "10₺" }
    ]
  },
  {
    category: "Tatlılar",
    items: [
      { name: "Süt Helvası", price: "130₺" },
      { name: "Sütlaç", price: "130₺" },
      { name: "Tahin Helvası", price: "140₺" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Deep sea water" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center gap-6 animate-wave"
        >
          <div className="w-16 h-1 bg-secondary mb-4 rounded-full"></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg uppercase">
            Sumatra<br/><span className="text-secondary">Cafe</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-foreground/90 tracking-widest max-w-sm uppercase">
            Balık Ekmek & Balık Dürüm
          </p>
          <p className="text-sm font-medium text-primary tracking-widest mt-2 border border-primary/30 rounded-full px-4 py-1.5 bg-background/50 backdrop-blur-sm">
            MUDANYA, GÜZELYALI
          </p>
        </motion.div>
      </section>

      {/* Quick Actions */}
      <section className="relative z-20 px-6 -mt-16 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <RippleButton 
            className="flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl shadow-black/50 text-white hover:bg-card hover:border-primary/50 transition-colors group"
            onClick={() => window.open("https://wa.me/905309120408", "_blank")}
          >
            <div className="p-3 bg-[#25D366]/20 rounded-full text-[#25D366] group-hover:scale-110 transition-transform">
              <FaWhatsapp size={24} />
            </div>
            <span className="text-sm font-medium tracking-wide">WhatsApp</span>
          </RippleButton>

          <RippleButton 
            className="flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl shadow-black/50 text-white hover:bg-card hover:border-primary/50 transition-colors group"
            onClick={() => window.open("tel:+905309120408", "_self")}
          >
            <div className="p-3 bg-secondary/20 rounded-full text-secondary group-hover:scale-110 transition-transform">
              <FaPhoneAlt size={24} />
            </div>
            <span className="text-sm font-medium tracking-wide">Ara</span>
          </RippleButton>

          <RippleButton 
            className="flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl shadow-black/50 text-white hover:bg-card hover:border-primary/50 transition-colors group"
            onClick={() => window.open("https://maps.google.com/?q=Güzelyalı+Yalı+Mahallesi+37.+Sokak+No:2+16950+Mudanya+Bursa", "_blank")}
          >
            <div className="p-3 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
              <FaMapMarkerAlt size={24} />
            </div>
            <span className="text-sm font-medium tracking-wide">Yol Tarifi</span>
          </RippleButton>

          <RippleButton 
            className="flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl shadow-black/50 text-white hover:bg-card hover:border-primary/50 transition-colors group"
            onClick={() => window.open("https://www.instagram.com/sumatra_mudanya", "_blank")}
          >
            <div className="p-3 bg-[#E1306C]/20 rounded-full text-[#E1306C] group-hover:scale-110 transition-transform">
              <FaInstagram size={24} />
            </div>
            <span className="text-sm font-medium tracking-wide">Instagram</span>
          </RippleButton>
        </div>
      </section>

      {/* Menu Section */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Menü</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {menuData.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-secondary mb-6 flex items-center gap-4">
                {category.category}
                <div className="h-px bg-white/10 flex-1"></div>
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-baseline group">
                    <div className="font-medium text-white/90 text-lg group-hover:text-primary transition-colors">
                      {item.name}
                    </div>
                    <div className="flex-1 border-b border-dashed border-white/20 mx-4 relative top-[-6px]"></div>
                    <div className="font-bold text-secondary text-lg">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="bg-card border-t border-white/5 py-16 px-6">
        <div className="max-w-md mx-auto text-center space-y-8">
          <div className="inline-block p-4 bg-background rounded-full border border-white/5 mb-2">
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8 opacity-80" />
          </div>
          
          <div>
            <h4 className="text-white font-serif text-xl font-bold mb-3">Çalışma Saatleri</h4>
            <p className="text-muted-foreground">Her gün 13:00 – 00:00</p>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl font-bold mb-3">İletişim</h4>
            <p className="text-muted-foreground mb-1">0 530 912 04 08</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Güzelyalı Yalı Mahallesi, 37. Sokak No:2<br/>
              16950 Mudanya / Bursa
            </p>
          </div>

          <div className="pt-8 text-xs text-muted-foreground/50 tracking-widest uppercase">
            © {new Date().getFullYear()} Sumatra Cafe.
          </div>
        </div>
      </section>

    </div>
  );
}
