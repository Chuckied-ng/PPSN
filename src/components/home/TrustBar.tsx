import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Globe, Shield } from 'lucide-react';

const trustItems = [
  {
    icon: Zap,
    title: 'Rapid Mobilization',
    description: "Pre-positioned equipment and local supply chains ensure we're operational when you need us.",
    color: 'from-[#D4AF37]/10 to-[#D4AF37]/5',
    iconColor: 'text-[#D4AF37]',
    iconBg: 'bg-[#D4AF37]/10',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'International engineering quality backed by ISO and API certifications across all service lines.',
    color: 'from-[#4A6FA5]/10 to-[#4A6FA5]/5',
    iconColor: 'text-[#4A6FA5]',
    iconBg: 'bg-[#4A6FA5]/10',
  },
  {
    icon: Shield,
    title: 'HSE Excellence',
    description: 'Zero-compromise safety culture with industry-leading incident prevention and environmental compliance.',
    color: 'from-emerald-500/10 to-emerald-500/5',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-500/10',
  },
];

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-start gap-4"
            >
              <div className={`flex-shrink-0 w-12 h-12 ${item.iconBg} rounded-2xl flex items-center justify-center`}>
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#0A1628] mb-1">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-[#4A6FA5] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
