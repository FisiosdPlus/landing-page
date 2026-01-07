import { ArrowRight, Phone, Calendar, CheckCircle2, Award, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Clean Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Subtle Decorative Elements */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 px-5 py-3 rounded-full mb-8 border border-blue-100 dark:border-blue-800">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-900 dark:text-blue-100 text-sm">Quiropráctico Certificado - Más de 5 Años de Experiencia</span>
            </div>
            
            {/* Main Heading - Professional & Clear */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6 leading-tight">
              Quiropraxia
              <span className="block text-blue-600 dark:text-blue-400 mt-2">y Fisioterapia</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
              Tratamientos especializados con atención personalizada. Tu bienestar es mi prioridad, con más de 5 años ayudando a pacientes a recuperar su calidad de vida.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 animate-fade-in-up delay-100">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Quiropráctico Certificado</span>
              </div>
              
              <div className="flex items-center gap-3 animate-fade-in-up delay-200">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Atención 100% Personalizada</span>
              </div>
              
              <div className="flex items-center gap-3 animate-fade-in-up delay-300">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Tratamientos Individuales</span>
              </div>
              
              <div className="flex items-center gap-3 animate-fade-in-up delay-400">
                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Horarios Flexibles</span>
              </div>
            </div>
            
            {/* CTA Buttons - Professional */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-500">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Agendar Consulta</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="https://wa.me/593963517395?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">+(593) 963 517 395</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 animate-fade-in-up delay-600">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Quiropráctico y Fisioterapeuta</span>
              </div>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span>+5 años de experiencia</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image Section */}
          <div className="relative hidden lg:block animate-fade-in delay-300">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1706353399656-210cca727a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc2NzYwMjYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fisioterapia Profesional"
                  className="w-full h-[600px] object-cover"
                />
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl animate-slide-in-right delay-500">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="border-r border-gray-200 dark:border-gray-700 last:border-0">
                    <div className="text-3xl text-blue-600 dark:text-blue-400 mb-1">5+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Años de<br />Experiencia</div>
                  </div>
                  <div className="border-r border-gray-200 dark:border-gray-700 last:border-0">
                    <div className="text-3xl text-green-600 dark:text-green-400 mb-1">100%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Atención<br />Personal</div>
                  </div>
                  <div>
                    <div className="text-3xl text-purple-600 dark:text-purple-400 mb-1">1:1</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Trato<br />Individual</div>
                  </div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700 animate-float">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs text-gray-900 dark:text-white mb-1">Certificado</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Profesional</div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="absolute top-8 -left-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 shadow-xl text-white animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl mb-1">✓</div>
                  <div className="text-xs">Trato</div>
                  <div className="text-xs opacity-90">Personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}