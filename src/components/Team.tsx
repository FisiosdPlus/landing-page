import { Award, GraduationCap, Briefcase, Star, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Team() {
  return (
    <section id="equipo" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-600">Fundador</span>
          </div>
          
          <h2 className="text-gray-900 mb-6">
            Tu Especialista en Quiropraxia
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesional certificado con más de 5 años de experiencia, dedicado completamente a tu bienestar y recuperación
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-2">
              <div
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NzU3NzgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sergio Díaz - Quiropráctico y Fisioterapeuta"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">Certificaciones Profesionales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-3 animate-fade-in-up delay-200">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-3xl text-gray-900 mb-2">Sergio Díaz</h3>
                <p className="text-xl text-blue-600 mb-6">Quiropráctico y Fisioterapeuta</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Con más de 5 años de experiencia en quiropraxia y fisioterapia, me dedico a proporcionar tratamientos personalizados que realmente transforman la vida de mis pacientes. Mi compromiso es tu bienestar completo.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-600 transition-colors">
                      <GraduationCap className="w-5 h-5 text-blue-600 group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">Formación Profesional</p>
                      <p className="text-sm text-gray-600">Certificado en Quiropraxia y Fisioterapia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-600 transition-colors">
                      <Briefcase className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">Experiencia</p>
                      <p className="text-sm text-gray-600">+5 años tratando pacientes con excelentes resultados</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-600 transition-colors">
                      <Award className="w-5 h-5 text-purple-600 group-hover/item:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">Especialidades</p>
                      <p className="text-sm text-gray-600">Quiropraxia Activa, Fisioterapia Deportiva, Rehabilitación</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">Quiropraxia</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">Fisioterapia</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-lg border border-purple-100">
                    <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-700">Rehabilitación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl text-center border border-blue-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up group"
            style={{ animationDelay: '400ms' }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-gray-900 mb-2">Atención Exclusiva</h4>
            <p className="text-gray-600">Cada sesión es completamente personalizada, enfocada 100% en tus necesidades específicas</p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl text-center border border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up group"
            style={{ animationDelay: '500ms' }}
          >
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-gray-900 mb-2">Experiencia Comprobada</h4>
            <p className="text-gray-600">Más de 5 años ayudando a pacientes a recuperar su bienestar y calidad de vida</p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl text-center border border-purple-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up group"
            style={{ animationDelay: '600ms' }}
          >
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-gray-900 mb-2">Enfoque Integral</h4>
            <p className="text-gray-600">Tratamientos que abordan la causa raíz, no solo los síntomas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
