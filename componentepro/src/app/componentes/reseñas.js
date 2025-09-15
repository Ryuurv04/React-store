import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  { name: 'Carlos Fernández', company: 'CEO, Tech-Innova', text: 'La eficiencia de GRUPO CINCO ha sido un pilar en nuestro crecimiento. Sus entregas siempre son puntuales y su sistema de seguimiento nos da una tranquilidad invaluable.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
  { name: 'Ana Sofía Pérez', company: 'Gerente de Compras, ModaGlobal', text: 'Desde que trabajamos con GRUPO CINCO, nuestra logística de importación es mucho más fluida. Su equipo de aduanas es simplemente excepcional. Han optimizado nuestros tiempos y costos.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  { name: 'Javier Morales', company: 'Director de Operaciones, AgriExport', text: 'La fiabilidad es crucial en nuestro sector, y GRUPO CINCO nunca nos ha fallado. Su manejo de la cadena de frío es impecable, garantizando que nuestros productos lleguen en perfecto estado.', avatar: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d' },
];

const TestimonialsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const renderStars = () => [...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />);

  return (
    <section id="comentarios" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-4">La Voz de Nuestros Clientes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La confianza y satisfacción de quienes trabajan con nosotros es nuestro mayor activo.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4"/>
                  <div>
                    <p className="font-bold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex">{renderStars()}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;