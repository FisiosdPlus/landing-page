import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-xl block">Fisiosd Plus</span>
                    <span className="text-[10px] text-gray-500 block -mt-1">Clínica Profesional</span>
                  </div>
                </div>
                </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Clínica de quiropraxia y fisioterapia con atención personalizada. Tu bienestar es mi prioridad.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/593963517395"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Fisioterapia Deportiva
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Quiropraxia
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Rehabilitación
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Terapia Manual
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Evaluación Postural
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Av. Principal 123, Centro</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/593963517395" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                  96 351 7395
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:contacto@fisiosdplus.com" className="text-blue-200 hover:text-white transition-colors">
                  contacto@fisiosdplus.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="text-sm text-blue-100 mb-2">Horario de Atención:</p>
              <p className="text-sm text-white">Lun - Vie: 8:00 AM - 8:00 PM</p>
              <p className="text-sm text-white">Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200 text-sm">
            <p>&copy; {currentYear} Fisiosd Plus - Quiropraxia Activa. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}