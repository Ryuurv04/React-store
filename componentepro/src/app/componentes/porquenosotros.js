import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Zap, BrainCircuit, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const reasons = [
        { icon: ShieldCheck, title: 'Confiabilidad y Seguridad', description: 'Tu carga está segura con nosotros. Cumplimos con los más altos estándares.' },
        { icon: Zap, title: 'Eficiencia y Rapidez', description: 'Optimizamos rutas y procesos para asegurar entregas rápidas y puntuales.' },
        { icon: BrainCircuit, title: 'Tecnología de Punta', description: 'Utilizamos sistemas de seguimiento en tiempo real para total visibilidad.' },
    ];

    return (
        <section id="por-que-nosotros" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-4">¿Por Qué Elegir GRUPO CINCO?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Somos más que un proveedor logístico; somos tu socio estratégico para el éxito.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="text-center p-6"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="bg-primary/10 p-5 rounded-full">
                                    <reason.icon className="h-12 w-12 text-primary"/>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link to="/nosotros">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-secondary border-secondary border-2 hover:bg-secondary/10 font-bold text-lg px-8 py-7"
                        >
                            Conoce más sobre nosotros
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUsSection;