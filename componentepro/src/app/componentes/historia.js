import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Map, Cpu, Award } from 'lucide-react';

const HistorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    { year: 2005, title: 'Nace la Visión', description: 'Fundada con un solo camión y el objetivo de revolucionar la logística regional.', icon: Rocket, image: 'https://images.unsplash.com/photo-1587293852726-70cdb122c29a' },
    { year: 2012, title: 'Expansión Nacional', description: 'Iniciamos la expansión a nivel nacional, ampliando la flota a 50 vehículos.', icon: Map, image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea' },
    { year: 2018, title: 'Salto Tecnológico', description: 'Implementamos nuestro sistema de gestión y seguimiento en tiempo real, mejorando la eficiencia en un 40%.', icon: Cpu, image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb' },
    { year: 2023, title: 'Líderes del Mercado', description: 'Nos consolidamos como líderes en logística terrestre con más de 1000 clientes activos.', icon: Award, image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: 'spring' } },
  };

  return (
    <section id="historia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-4">Nuestra Trayectoria</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de una década de compromiso, innovación y crecimiento constante para ofrecerte el mejor servicio.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img alt={item.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1700665653601-aab7aebf9e11" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center mb-3">
                  <item.icon className="w-8 h-8 text-primary mr-3" />
                  <span className="text-3xl font-bold">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;