import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Mail, Monitor, Users, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactModal } from '@/components/contact/ContactModal';

const stats = [
  {
    icon: Monitor,
    value: '99%',
    label: 'System Uptime',
    description: 'Operational reliability across all active projects',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Projects Delivered',
    description: 'Completed engagements across Africa',
  },
  {
    icon: LinkIcon,
    value: '95%',
    label: 'Client Retention',
    description: 'Operators who continue to partner with us',
  },
];

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Stats Banner with Mountain Background */}
      <div className="relative py-24 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Governance Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full font-mono text-xs text-[#4A6FA5] uppercase tracking-wider border border-gray-200/60">
              Governance
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1628] text-center mb-16 leading-tight"
          >
            Reliable, Safe,
            <br />
            and Validated
          </motion.h2>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/60 p-8 text-center shadow-lg shadow-gray-200/30"
              >
                <div className="inline-flex p-3 bg-[#4A6FA5]/10 rounded-2xl mb-4">
                  <stat.icon className="w-6 h-6 text-[#4A6FA5]" />
                </div>
                <div className="font-display font-extrabold text-5xl text-[#0A1628] mb-2">
                  {stat.value}
                </div>
                <div className="font-heading font-bold text-sm text-[#0A1628] mb-1">
                  {stat.label}
                </div>
                <p className="font-body text-xs text-[#4A6FA5]">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 lg:py-32 bg-[#0A1628] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#4A6FA5]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to Power Your
              <br />
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C674] bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>

            <p className="font-body text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto">
              Partner with Namibia's premier petroleum services provider. 
              Let's discuss how PPSN can support your operations with world-class capability and local execution.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] rounded-full font-heading font-bold text-base hover:bg-[#E5C158] hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-heading font-bold text-base hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 bg-transparent transition-all duration-300 flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Request Proposal
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </section>
  );
}
