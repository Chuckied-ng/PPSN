import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cog, Anchor, Wrench, Activity, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Cog,
    title: 'Drilling & Well Services',
    description: 'Full lifecycle drilling support including well intervention, workover operations, completion services, and wireline operations for both onshore and offshore environments.',
    features: ['Well Intervention', 'Workover Operations', 'Completion Services', 'Wireline & Coiled Tubing'],
    image: '/images/drilling-operations.png',
    color: 'from-amber-500/10 to-amber-500/5',
  },
  {
    icon: Anchor,
    title: 'Marine & Subsea',
    description: 'Advanced subsea intervention capabilities with ROV operations, pipeline integrity management, and comprehensive marine logistics coordination.',
    features: ['ROV Operations', 'Pipeline Integrity', 'Subsea Installation', 'Marine Logistics'],
    image: '/images/marine-subsea.png',
    color: 'from-blue-500/10 to-blue-500/5',
  },
  {
    icon: Wrench,
    title: 'Production Support',
    description: 'Production optimization, facilities maintenance, integrity management, and brownfield modifications to maximize asset value and output.',
    features: ['Production Optimization', 'Facilities Maintenance', 'Integrity Management', 'Brownfield Mods'],
    image: '/images/production-support.png',
    color: 'from-emerald-500/10 to-emerald-500/5',
  },
  {
    icon: Activity,
    title: 'Technical Services',
    description: 'Engineering design, project management, procurement support, and commissioning services delivered by experienced Namibian engineers.',
    features: ['Engineering Design', 'Project Management', 'Procurement', 'Commissioning'],
    image: '/images/technical-services.png',
    color: 'from-purple-500/10 to-purple-500/5',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-white rounded-full font-mono text-xs text-[#4A6FA5] uppercase tracking-wider border border-gray-200">
            Core Services
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1628] text-center mb-6 leading-tight"
        >
          End-to-End Energy
          <br />
          Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-lg text-[#4A6FA5] text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Integrated petroleum services across the entire production lifecycle, 
          from exploration to decommissioning.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-3xl border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer hover:border-[#D4AF37]/30"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex p-3.5 bg-gradient-to-br ${service.color} rounded-2xl`}>
                  <service.icon className="w-7 h-7 text-[#0A1628]" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              <h3 className="font-heading font-bold text-xl text-[#0A1628] mb-3">
                {service.title}
              </h3>

              <p className="font-body text-sm text-[#4A6FA5] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-block px-3 py-1 bg-gray-50 rounded-full text-xs font-body font-medium text-[#2C3E50] border border-gray-100"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
