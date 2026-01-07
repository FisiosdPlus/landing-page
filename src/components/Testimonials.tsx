import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Paciente',
    content: 'Sergio es un profesional excepcional. Su trato personalizado y dedicación hicieron la diferencia en mi recuperación. Después de meses de dolor de espalda, finalmente encontré alivio.',
    rating: 5,
    image: 'MG',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Atleta',
    content: 'La fisioterapia con Sergio me ayudó a recuperarme de una lesión de rodilla. Su conocimiento y atención individual son incomparables. Lo recomiendo totalmente.',
    rating: 5,
    image: 'CR',
  },
  {
    name: 'Ana Martínez',
    role: 'Profesora',
    content: 'Los ajustes quiroprácticos con Sergio han mejorado mi postura y eliminado dolores crónicos de cuello. Su enfoque personalizado marca la diferencia.',
    rating: 5,
    image: 'AM',
  },
  {
    name: 'Roberto Silva',
    role: 'Oficinista',
    content: 'Excelente profesional. Sergio se toma el tiempo necesario para entender tu problema y diseñar un tratamiento efectivo. Me siento mucho mejor.',
    rating: 5,
    image: 'RS',
  },
  {
    name: 'Laura Fernández',
    role: 'Diseñadora',
    content: 'La atención personalizada es lo mejor de Fisio SD Plus. Sergio realmente se preocupa por sus pacientes y los resultados hablan por sí mismos.',
    rating: 5,
    image: 'LF',
  },
  {
    name: 'Diego Morales',
    role: 'Deportista',
    content: 'Desde la primera consulta sentí confianza. El tratamiento fue exactamente lo que necesitaba. Mi movilidad y rendimiento han mejorado notablemente.',
    rating: 5,
    image: 'DM',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse-slow" />
            <span className="text-blue-100">Testimonios</span>
          </div>
          
          <h2 className="text-white mb-6">
            Lo Que Dicen Mis Pacientes
          </h2>
          
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            La confianza y satisfacción de mis pacientes es mi mayor motivación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-300/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-scale-in" style={{ animationDelay: `${i * 50}ms` }} />
                ))}
              </div>
              
              <p className="text-blue-50 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-white group-hover:text-blue-200 transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-blue-300">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center animate-fade-in-up delay-300">
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl text-white mb-2">5.0/5.0</div>
            <div className="flex gap-1 mb-2 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-blue-200">Calificación de pacientes</div>
          </div>
          
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl text-white mb-2">100%</div>
            <div className="text-sm text-blue-200">Atención personalizada</div>
          </div>
          
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="text-4xl text-white mb-2">5+</div>
            <div className="text-sm text-blue-200">Años de experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}