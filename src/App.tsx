/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Music, 
  Utensils, 
  GraduationCap, 
  Martini, 
  MessageCircle,
  Ticket,
  ChevronRight,
  ChevronLeft,
  X,
  ExternalLink,
  Play,
  Home
} from "lucide-react";

const GRADUATION_ORANGE = "#FF6321";
const DARK_NAVY = "#0F172A";

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const [selectedSingleImage, setSelectedSingleImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  const galleryImages = [
    { url: "http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/00b60425-9de6-4f38-b6ff-2d52215e541a/3456x2304.jpg", title: "Salón Candiles 1" },
    { url: "http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/c8113264-b122-40a1-9e33-22086da0a2d9/3456x2304.jpg", title: "Salón Candiles 2" },
    { url: "http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/fa1efc5c-fb13-4a9f-acf2-e782c4858ee8/5184x3456.jpg", title: "Salón Candiles 3" },
    { url: "http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/c7866dc8-6c2e-4e20-bb47-3dd02cd686c5/3456x2304.jpg", title: "Salón Candiles 4" },
    { url: "http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/0961f2ef-965b-4b7d-9851-4098bbbaa42d/3456x2304.jpg", title: "Salón Candiles 5" },
    { url: "http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/4d9a3932-8ea1-4b9d-8ea2-f0edd0b92dbb/5184x3456.jpg", title: "Salón Candiles 6" }
  ];

  const nextGallery = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevGallery = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-orange-500/30">
      {/* Hero Section with Parallax - Focused on the Image */}
      <section ref={containerRef} className="relative h-[110vh] flex items-end justify-center pb-40 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/b3e12d7b-e1aa-4ece-9537-647ff042f44c/1280x1050.png"
            alt="Graduados Universidad Uk"
            className="w-full h-full object-cover opacity-90 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
              Graduación <span className="text-orange-500">Uk</span> | 2026
              <br />
              <span className="text-3xl md:text-5xl font-light mt-4 block">Evento de Gala</span>
            </h1>
            <div className="mt-8 inline-flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full text-sm font-medium tracking-[0.2em] uppercase">
              1 de Agosto / 04:30 HRS
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Message Section with Video Background */}
      <section className="relative z-10 py-32 bg-slate-950 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://fileuk.netlify.app/uk%20video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950/80" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">Querido/a graduado/a,</h2>
              <div className="space-y-6 text-xl md:text-2xl text-white font-light leading-relaxed drop-shadow-md">
                <p>
                  Tu esfuerzo, tus desvelos y cada paso que diste te trajeron hasta aquí. 
                  Has superado retos y hoy estás a punto de cruzar una meta que merece ser celebrada por todo lo alto.
                </p>
                <p className="text-orange-500 font-medium italic">
                  Y ahora... es momento de celebrarlo como se debe. 🎉
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery/Visual Section */}
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-6">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-4 h-[800px]">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedGalleryIndex(0)}
              className="md:col-span-8 rounded-3xl overflow-hidden relative group cursor-zoom-in"
            >
              <img 
                src={galleryImages[0].url} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={galleryImages[0].title}
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="md:col-span-4 grid grid-rows-3 gap-4">
              {galleryImages.slice(1, 4).map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedGalleryIndex(i + 1)}
                  className="rounded-3xl overflow-hidden group cursor-zoom-in"
                >
                  <img 
                    src={img.url} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={img.title}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Additional Desktop Grid for more images if needed, or just use a grid for all */}
          <div className="hidden md:grid grid-cols-2 gap-4 mt-4 h-[400px]">
            {galleryImages.slice(4).map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.01 }}
                onClick={() => setSelectedGalleryIndex(i + 4)}
                className="rounded-3xl overflow-hidden group cursor-zoom-in"
              >
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={img.title}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative aspect-[4/5] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentGalleryIndex}
                src={galleryImages[currentGalleryIndex].url}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedGalleryIndex(currentGalleryIndex)}
                className="w-full h-full object-cover cursor-zoom-in"
                alt={galleryImages[currentGalleryIndex].title}
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button 
                onClick={prevGallery}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextGallery}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === currentGalleryIndex ? 'bg-orange-500 w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Graduación Gala 2026</h2>
          </div>
          
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              onClick={() => setIsVideoModalOpen(true)}
              className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl shadow-orange-500/20 cursor-pointer group"
            >
              <img 
                src="http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/929f88d5-3abe-4444-9b92-c3e517e13756/1116x622.png" 
                alt="Video Thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center shadow-xl shadow-orange-500/40 group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-current ml-1" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Ubicación */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Av. Ejército Nacional Mexicano 613, Mezzanine, Granada, Miguel Hidalgo, CDMX</p>
              </div>
            </div>

            {/* Salón */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Home className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Salón</h3>
                <p className="text-slate-400">Candiles Polanco</p>
              </div>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Horario</h3>
                <p className="text-slate-400">04:30 p.m. a 11:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Relocated between Details and Tickets */}
      <section className="py-12 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden h-[450px] shadow-2xl border border-white/10 relative group">
              <iframe
                src="https://maps.google.com/maps?q=Av.%20Ejército%20Nacional%20Mexicano%20613,%20Granada,%20Miguel%20Hidalgo,%20CDMX&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Av.+Ejército+Nacional+Mexicano+613,+Granada,+Miguel+Hidalgo,+CDMX"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-slate-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Ver en Google Maps
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">Boletos Uk</h2>
            <p className="text-xl text-white mb-4 font-medium">
              ¡No lo dejes para después! Asegura los boletos para tu Graduación 2026 con descuento por pronto pago.
            </p>
            <p className="text-slate-400">
              Entre más pronto compres, más ahorras en tus boletos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Ticket 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-orange-500/20 rounded-[2.5rem] p-10 text-center relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">Graduado + 1 invitado</h3>
                <div className="space-y-2">
                  <div className="text-2xl text-slate-500 line-through decoration-red-500 decoration-2">$2,990 MXN</div>
                  <div className="text-5xl font-black text-orange-500">$2,691 <span className="text-xl font-normal">MXN</span></div>
                </div>
              </div>
            </motion.div>

            {/* Ticket 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 text-center relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">Invitado Adicional</h3>
                <div className="space-y-2">
                  <div className="text-2xl text-slate-500 line-through decoration-red-500 decoration-2">$1,490 MXN</div>
                  <div className="text-5xl font-black text-white">$1,341 <span className="text-xl font-normal">MXN</span></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center space-y-10">
            <p className="text-lg text-orange-400 font-medium flex items-center justify-center gap-2">
              🔥 10% de descuento hasta el 31 de marzo
            </p>
            
            <motion.a
              href="https://api.whatsapp.com/send?phone=15512927900&text=Hola!Quiero%20reservar%20mi%20entrada%20para%20la%20gala%202026"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-orange-600/20 hover:bg-orange-700 transition-all"
            >
              <Ticket className="w-6 h-6" />
              Comprar Ahora
            </motion.a>
          </div>
        </div>
      </section>

      {/* Program & Dress Code */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Program */}
            <div className="bg-slate-900/50 p-12 rounded-[2.5rem] border border-white/5">
              <h2 className="text-3xl font-bold mb-10">¿Qué vivirás esa noche?</h2>
              <div className="space-y-8">
                {[
                  { icon: Martini, title: "Cóctel de bienvenida", desc: "Iniciamos la noche con estilo." },
                  { icon: GraduationCap, title: "Ceremonia formal", desc: "Entrega de diplomas y reconocimientos." },
                  { icon: Utensils, title: "Cena de tres tiempos", desc: "Una experiencia gastronómica de gala." },
                  { icon: Music, title: "Música y baile", desc: "Celebración total hasta la medianoche." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedSingleImage("http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/1f7da649-c57e-4053-91e3-6941e147d436/572x1024.jpg")}
                  className="relative group rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800 cursor-zoom-in"
                >
                  <img 
                    src="http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/1f7da649-c57e-4053-91e3-6941e147d436/572x1024.jpg" 
                    alt="Mujer Gala"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-center">Mujer</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedSingleImage("http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/3d1e5516-2e16-4253-b168-34588c6c7066/572x1024.jpg")}
                  className="relative group rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800 cursor-zoom-in"
                >
                  <img 
                    src="http://cdn.mcauto-images-production.sendgrid.net/a2b54e4e104dc43e/3d1e5516-2e16-4253-b168-34588c6c7066/572x1024.jpg" 
                    alt="Hombre Gala"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-center">Hombre</p>
                  </div>
                </motion.div>
              </div>
              <h2 className="text-3xl font-bold mb-6">Código de vestimenta</h2>
              <div className="space-y-6 text-slate-400 text-lg font-light">
                <p className="text-white font-medium">Gala formal.</p>
                <p>
                  Las damas podrán lucir vestido de noche, mientras que los caballeros deberán asistir con traje formal y corbata.
                </p>
                <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                  <p className="text-sm text-orange-400 italic">
                    La Uk te proporcionará birrete y cinta institucional como parte de la ceremonia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Expansion Modal */}
      <AnimatePresence>
        {(selectedGalleryIndex !== null || selectedSingleImage !== null) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-sm"
            onClick={() => { setSelectedGalleryIndex(null); setSelectedSingleImage(null); }}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
              onClick={() => { setSelectedGalleryIndex(null); setSelectedSingleImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>

            {selectedGalleryIndex !== null && (
              <>
                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
                  onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length); }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
                  onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex((prev) => (prev! + 1) % galleryImages.length); }}
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <motion.img
              key={selectedGalleryIndex !== null ? galleryImages[selectedGalleryIndex].url : selectedSingleImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedGalleryIndex !== null ? galleryImages[selectedGalleryIndex].url : selectedSingleImage!}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-slate-950/90 backdrop-blur-xl"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src="https://www.youtube.com/embed/S0M957xc6WE?autoplay=1"
                title="Graduación Universidad Uk"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer / Contact */}
      <footer className="py-24 bg-slate-950 text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-medium mb-8 text-slate-300">Habla con tu Coach Académico o escríbenos:</h2>
          <motion.a
            href="https://wa.me/yournumber"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl shadow-green-500/20 hover:bg-[#20ba5a] transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </motion.a>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-slate-600 text-sm">
            <p>© 2026 Universidad Uk. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
