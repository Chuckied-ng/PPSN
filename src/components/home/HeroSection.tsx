import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFECD2]/40 to-[#F0F4FF]">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#D4AF37]/10 to-[#F0C674]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-[#4A6FA5]/10 to-[#87CEEB]/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-full px-5 py-2.5 shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F0C674] border-2 border-white flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A6FA5] to-[#5B80B6] border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">40+</span>
                </div>
              </div>
              <span className="text-[#2C3E50] text-sm font-body font-medium">
                Trusted by leading operators across Namibia
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto mb-8"
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] text-[#0A1628] leading-[1.05] tracking-tight">
              Powering Namibia's
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
                Energy Future
              </span> with
              <br />
              Excellence.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg lg:text-xl text-[#4A6FA5] text-center max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            End-to-end petroleum services with global engineering capability, 
            backed by Petrolog Group's 40+ years of energy leadership. 100% Namibian backing.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <Link to="/contact">
              <button className="px-8 py-4 bg-[#0A1628] text-white rounded-full font-heading font-bold text-base hover:bg-[#1C2833] hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center gap-3 group">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Hero Visual Card - Featured Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-mono text-gray-400 ml-3">PPSN Operations Dashboard</span>
              </div>
              
              {/* Card Grid Content */}
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      image: '/images/drilling-operations.png',
                      label: 'Drilling Operations',
                      desc: 'Offshore & onshore well services with full lifecycle support',
                    },
                    {
                      image: '/images/marine-subsea.png',
                      label: 'Marine & Subsea',
                      desc: 'ROV operations, pipeline integrity and subsea intervention',
                    },
                    {
                      image: '/images/production-support.png',
                      label: 'Production Support',
                      desc: 'Facilities maintenance and production optimization',
                    },
                    {
                      image: '/images/technical-services.png',
                      label: 'Technical Services',
                      desc: 'Engineering design, procurement and commissioning',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 hover:shadow-lg transition-all duration-500 cursor-pointer hover:-translate-y-1">
                      <div className="h-32 lg:h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.label}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-heading font-bold text-sm text-[#0A1628] mb-1">{item.label}</h4>
                        <p className="text-xs text-[#4A6FA5] font-body leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
