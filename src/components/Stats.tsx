import { Users, Award, Clock, Heart } from 'lucide-react';

const stats = [
  {
    icon: Award,
    number: '5+',
    label: 'Años de Experiencia',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    number: '1:1',
    label: 'Atención Personalizada',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    number: '100%',
    label: 'Dedicación al Paciente',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Heart,
    number: 'Pro',
    label: 'Quiropráctico Certificado',
    color: 'from-pink-500 to-pink-600',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${stat.color}`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl text-gray-900 mb-3">{stat.number}</div>
              <div className="text-gray-600 leading-tight">{stat.label}</div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}