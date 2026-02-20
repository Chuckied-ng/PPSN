import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Globe, Users, Heart } from 'lucide-react';

const capabilities = [
  {
    icon: Settings,
    title: 'Natively integrates with your operational framework',
    description: null,
    highlight: false,
  },
  {
    icon: Heart,
    title: 'Seamlessly collaborates with your team and local workforce',
    description: 'Functions as an extension of your operations, integrating naturally with your existing staff and processes.',
    highlight: true,
  },
  {
    icon: Globe,
    title: 'Flexibly adapts to regulatory and environmental requirements',
    description: null,
    highlight: false,
  },
  {
    icon: Users,
    title: 'Delivers the full spectrum of petroleum services',
    description: null,
    highlight: false,
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full font-mono text-xs text-[#4A6FA5] uppercase tracking-wider">
            About PPSN
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1628] text-center mb-6 leading-tight"
        >
          Where Global Capability
          <br />
          Meets Local Leadership
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-lg text-[#4A6FA5] text-center max-w-3xl mx-auto mb-20 leading-relaxed"
        >
          PPSN is the indigenous energy services arm of Petrolog Group, delivering comprehensive 
          petroleum solutions backed by 40+ years of operational excellence.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Capability List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 ${
                  cap.highlight
                    ? 'bg-[#FFF8F0] border border-[#D4AF37]/20 shadow-sm'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                  cap.highlight ? 'bg-[#D4AF37]/10' : 'bg-gray-100'
                }`}>
                  <cap.icon className={`w-5 h-5 ${cap.highlight ? 'text-[#D4AF37]' : 'text-[#4A6FA5]'}`} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#0A1628] leading-snug">
                    {cap.title}
                  </h4>
                  {cap.description && (
                    <p className="font-body text-sm text-[#4A6FA5] mt-2 leading-relaxed">
                      {cap.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/60 border border-gray-100">
              <img
                src="/images/ppsn-operations.png"
                alt="PPSN Operations"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: '40+', label: 'Years Legacy' },
                    { value: '100%', label: 'Namibian Owned' },
                    { value: '24/7', label: 'Operations' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center bg-white/10 backdrop-blur-md rounded-xl py-4 border border-white/20">
                      <div className="font-display font-extrabold text-2xl text-[#D4AF37]">{stat.value}</div>
                      <div className="font-body text-xs text-white/80 mt-1">{stat.label}</div>
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
