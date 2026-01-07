import { ClipboardCheck, Stethoscope, Activity, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Evaluación Inicial',
    description: 'Realizamos una evaluación completa de tu condición física y analizamos tu historial médico para entender tus necesidades específicas.',
  },
  {
    icon: Stethoscope,
    number: '02',
    title: 'Diagnóstico Personalizado',
    description: 'Nuestros especialistas identifican la causa raíz de tu problema y desarrollan un diagnóstico preciso utilizando las últimas tecnologías.',
  },
  {
    icon: Activity,
    number: '03',
    title: 'Plan de Tratamiento',
    description: 'Creamos un plan terapéutico adaptado a tus objetivos, combinando múltiples técnicas para resultados óptimos y duraderos.',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Seguimiento Continuo',
    description: 'Monitoreamos tu progreso constantemente y ajustamos el tratamiento según sea necesario para garantizar tu recuperación completa.',
  },
];

export function Process() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <span className="text-blue-600">Nuestro Proceso</span>
          </div>
          <h2 className="text-gray-900 mb-6">
            Cómo Trabajamos Contigo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mi enfoque sistemático y profesional para tu recuperación completa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" style={{ top: '80px' }} />
          
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative z-10 border border-gray-100 hover:border-blue-200 group">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="text-xl">{step.number}</span>
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <step.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Progress bar */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-0 group-hover:w-full transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}