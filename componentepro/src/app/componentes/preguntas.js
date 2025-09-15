import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: '¿Qué tipo de mercancías transportan?',
    answer: 'Transportamos una amplia variedad de mercancías, incluyendo carga general, productos perecederos con control de temperatura, mercancías peligrosas (ADR) y carga de gran tamaño. Contáctanos para evaluar tus necesidades específicas.'
  },
  {
    question: '¿Cómo puedo rastrear mi envío?',
    answer: 'Una vez que tu envío está en camino, recibirás un número de seguimiento y un enlace a nuestro portal de clientes. Allí podrás ver la ubicación de tu carga en tiempo real, 24/7.'
  },
  {
    question: '¿Ofrecen seguro para la mercancía?',
    answer: 'Sí, todos nuestros envíos cuentan con un seguro básico de responsabilidad. Además, ofrecemos opciones de seguro a todo riesgo para una mayor tranquilidad, adaptadas al valor de tu mercancía.'
  },
  {
    question: '¿Cuál es su área de cobertura?',
    answer: 'Ofrecemos cobertura completa a nivel nacional. Para servicios internacionales, cubrimos los principales destinos en Europa, América y Asia a través de nuestra red de socios estratégicos en transporte marítimo y aéreo.'
  },
  {
    question: '¿Cómo solicito una cotización?',
    answer: 'Puedes solicitar una cotización a través del formulario en nuestra sección de contacto, llamándonos por teléfono o escribiendo a nuestro email de atención al cliente. Un asesor te responderá en menos de 24 horas con una oferta personalizada.'
  }
];

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes para que tengas toda la información que necesitas.
          </p>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md mb-4 px-6">
                <AccordionTrigger className="text-lg font-semibold text-secondary text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
        >
            <p className="text-lg text-gray-700 mb-6">¿No encuentras tu pregunta? Nuestro equipo está listo para ayudarte.</p>
            <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold text-lg px-8 py-7"
                onClick={() => {
                    const element = document.querySelector('#contacto');
                    if (element) {
                        const yOffset = -80;
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
                    }
                }}
            >
                Contacta con un experto
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;