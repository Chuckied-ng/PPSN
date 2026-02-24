import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Shield, Zap, Check } from 'lucide-react';

const differentiators = [
  {
    icon: Award,
    title: 'Industry Leadership',
    description: '40+ years of proven energy sector expertise. Our established partnerships bring world-class technical capability to every project we undertake.',
    highlights: ['Established 1984', 'Southern Africa Leaders', 'Global Partnerships'],
  },
  {
    icon: Users,
    title: 'Local Content Champions',
    description: '100% Namibian backing with comprehensive skills transfer programs and indigenous workforce development. We believe in building capacity, not just infrastructure.',
    highlights: ['100% Namibian Backing', 'Skills Transfer', 'Workforce Development'],
  },
  {
    icon: Shield,
    title: 'Compliance & Safety Excellence',
    description: 'Full HSE certification, environmental compliance, and adherence to international standards including ISO 9001, ISO 14001, and API specifications across all operations.',
    highlights: ['ISO Certified', 'Zero Incident Culture', 'API Compliant'],
  },
  {
    icon: Zap,
    title: 'Rapid Mobilization Capability',
    description: 'Pre-positioned equipment and spares, established local supply chains, and deep logistical expertise enable us to deploy faster than any competitor in the region.',
    highlights: ['Pre-positioned Assets', 'Local Supply Chain', '48-Hour Deploy'],
  },
];

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full font-mono text-xs text-[#4A6FA5] uppercase tracking-wider">
            Why Choose PPSN
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1628] text-center mb-6 leading-tight"
        >
          Your Strategic
          <br />
          Energy Partner
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-lg text-[#4A6FA5] text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          We combine heritage, local expertise, and global standards to deliver 
          energy services that exceed expectations.
        </motion.p>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-8 hover:shadow-lg hover:shadow-gray-100 transition-all duration-500"
            >
              <div className="mb-5">
                <div className="inline-flex p-3 bg-[#D4AF37]/10 rounded-2xl">
                  <item.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                {item.title}
              </h3>

              <p className="font-body text-sm text-[#4A6FA5] leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="font-body text-xs font-medium text-[#2C3E50]">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
