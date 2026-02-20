import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    image: '/images/namibian-operations-mobilization.png',
    title: 'Namibian Operations Mobilization',
    category: 'Market Entry',
    description: 'Establishing local presence in Walvis Bay with facilities, equipment, and strategic partnerships for energy services.',
  },
  {
    image: '/images/local-workforce-development.png',
    title: 'Local Workforce Development',
    category: 'Training & Capacity',
    description: 'Building indigenous capability through technical training partnerships with local institutions and certification programs.',
  },
  {
    image: '/images/equipment-readiness-support.png',
    title: 'Equipment Readiness Support',
    category: 'Technical Services',
    description: 'Providing maintenance and inspection services for drilling equipment ahead of upcoming exploration campaigns.',
  },
  {
    image: '/images/marine-logistics-readiness.png',
    title: 'Marine Logistics Readiness',
    category: 'Marine Support',
    description: 'Establishing marine coordination capabilities for upcoming offshore exploration and supply vessel operations.',
  },
  {
    image: '/images/engineering-study-services.jpg',
    title: 'Engineering Study Services',
    category: 'Front-End Engineering',
    description: 'Supporting operators with feasibility studies and FEED work for Namibian Orange Basin developments.',
  },
  {
    image: '/images/strategic-partnership-formation.png',
    title: 'Strategic Partnership Formation',
    category: 'Business Development',
    description: 'Building strategic alliances with international operators and local service providers entering Namibia.',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-white rounded-full font-mono text-xs text-[#4A6FA5] uppercase tracking-wider border border-gray-200">
            Building Namibia's Future
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1628] text-center mb-6 leading-tight"
        >
          Establishing Our Presence
          <br />
          in Namibia's Energy Sector
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-lg text-[#4A6FA5] text-center max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Our initial initiatives focus on mobilization, local partnerships, and capability building
          to support Namibia's emerging petroleum industry.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-heading font-bold text-[#0A1628]">
                    {project.category}
                  </span>
                </div>

                {/* Arrow */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}>
                  <ArrowUpRight className="w-4 h-4 text-[#0A1628]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[#0A1628] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-[#4A6FA5] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
