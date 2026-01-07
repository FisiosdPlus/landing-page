import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse-slow" />
          <span className="text-blue-100">Oferta Especial</span>
        </div>
        
        <h2 className="text-white mb-6 animate-fade-in-up delay-100">
          Comienza Tu Camino Hacia el Bienestar
        </h2>
        
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Agenda tu primera consulta y descubre cómo puedo ayudarte a vivir sin dolor con atención 100% personalizada.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
          <a
            href="#contacto"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 duration-300 overflow-hidden"
          >
            <span className="relative z-10 text-lg">Agenda tu Consulta Gratuita</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="tel:+593963517395"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all hover:scale-105 duration-300"
          >
            <span className="text-lg">Llamar Ahora</span>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-blue-100 animate-fade-in-up delay-400">
          {[
            { icon: true, text: 'Atención personalizada' },
            { icon: true, text: 'Evaluación completa' },
            { icon: true, text: 'Tratamiento individual' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 group hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 text-green-400 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}