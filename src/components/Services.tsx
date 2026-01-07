import { Activity, Bone, Heart, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Fisioterapia Deportiva',
    description: 'Recuperación y prevención de lesiones deportivas con técnicas especializadas para atletas de todos los niveles.',
    features: ['Recuperación post-lesión', 'Mejora del rendimiento', 'Prevención de lesiones'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Bone,
    title: 'Quiropraxia',
    description: 'Ajustes quiroprácticos precisos para corregir desalineaciones y restaurar la función óptima del sistema nervioso.',
    features: ['Alivio del dolor', 'Corrección postural', 'Bienestar integral'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Heart,
    title: 'Rehabilitación',
    description: 'Programas personalizados de rehabilitación diseñados para una recuperación completa y duradera.',
    features: ['Post-operatorio', 'Terapia funcional', 'Fortalecimiento'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Terapia Manual',
    description: 'Técnicas manuales avanzadas que combinan movilización articular y manipulación de tejidos blandos.',
    features: ['Masaje terapéutico', 'Movilización', 'Liberación miofascial'],
    color: 'from-orange-500 to-orange-600',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-0 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl -z-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-600 dark:text-blue-400">Nuestros Servicios</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-6">
            Soluciones Integrales Para Tu Salud
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Combinamos experiencia profesional con atención personalizada para ofrecer tratamientos efectivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-transparent overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all duration-300">
                  <span>Más información</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up delay-400">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
          >
            Agenda una Consulta
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}