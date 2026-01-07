import { CheckCircle2, Shield, Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Profesionales Certificados',
    description: 'Equipo médico con certificaciones internacionales y años de experiencia',
  },
  {
    icon: Shield,
    title: 'Tratamientos Seguros',
    description: 'Protocolos aprobados y equipamiento de última generación',
  },
  {
    icon: Clock,
    title: 'Horarios Flexibles',
    description: 'Disponibilidad adaptada a tu agenda personal y profesional',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Medibles',
    description: 'Seguimiento detallado de tu progreso y recuperación',
  },
];

export function Benefits() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <span className="text-blue-600">Por Qué Elegirnos</span>
            </div>
            
            <h2 className="text-gray-900 mb-6">
              Excelencia en Cada Tratamiento
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Me comprometo con tu bienestar utilizando las técnicas más avanzadas en fisioterapia y quiropraxia, respaldadas por más de 5 años de experiencia y resultados comprobados.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 rounded-xl border border-green-200">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <div>
                  <div className="text-sm text-green-600">Certificados</div>
                  <div className="text-gray-900">ISO 9001:2015</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 rounded-xl border border-blue-200">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-sm text-blue-600">Acreditación</div>
                  <div className="text-gray-900">Nacional</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjBjbGluaWN8ZW58MXx8fHwxNzY3NTU2NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Clínica de fisioterapia"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl text-gray-900 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300" />
                  <div>
                    <div className="text-3xl text-gray-900 mb-1">5K+</div>
                    <div className="text-sm text-gray-600">Pacientes felices</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300" />
                  <div>
                    <div className="text-3xl text-gray-900 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Satisfacción</div>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                    +5K
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl -z-10 blur-2xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl -z-10 blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}