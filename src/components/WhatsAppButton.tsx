import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const whatsappNumber = '593963517395'; // Formato internacional
  const message = '¡Hola! Me gustaría agendar una consulta de fisioterapia en Fisio SD Plus.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in-up">
        {/* Expanded Message */}
        {isExpanded && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200 animate-scale-in">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-900">Fisio SD Plus</div>
                  <div className="text-xs text-gray-500">En línea</div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-3 mb-3">
              <p className="text-sm text-gray-700">
                ¡Hola! 👋 ¿Necesitas agendar una consulta o tienes alguna pregunta? Estamos aquí para ayudarte.
              </p>
            </div>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Iniciar Chat</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-20" />
          
          {/* Icon */}
          <div className="relative z-10">
            {isExpanded ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white" />
            )}
          </div>

          {/* Notification Badge */}
          {!isExpanded && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-[10px] text-white">1</span>
            </div>
          )}
        </button>

        {/* Tooltip (only when not expanded) */}
        {!isExpanded && (
          <div className="absolute right-20 bottom-5 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            ¿Necesitas ayuda?
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </div>
        )}
      </div>
    </>
  );
}