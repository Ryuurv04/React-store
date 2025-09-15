import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Truck, Globe, Smile } from 'lucide-react';

const stats = [
  { icon: Users, end: 1200, suffix: '+', label: 'Clientes Satisfechos' },
  { icon: Truck, end: 500000, separator: '.', suffix: '+', label: 'Envíos Anuales' },
  { icon: Globe, end: 45, suffix: '', label: 'Países Cubiertos' },
  { icon: Smile, end: 98, suffix: '%', label: 'Tasa de Satisfacción' },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="datos" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <stat.icon className="h-14 w-14 text-primary mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-extrabold text-white">
                {isInView && (
                  <CountUp end={stat.end} duration={3} separator={stat.separator} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;