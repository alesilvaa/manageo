'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, Calendar, CreditCard, Users, ArrowRight } from 'lucide-react';

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const terminalSteps = [
    { text: 'Sistema Iniciado Correctamente', icon: Check, color: 'text-green-500', bg: 'bg-green-100' },
    { text: 'Nueva Cita: Laura M. - 16:00', icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-100' },
    { text: 'Pago Recibido: Gs. 132.000', icon: CreditCard, color: 'text-green-500', bg: 'bg-green-100' },
    { text: 'Nuevo Cliente Agregado: Carlos R.', icon: Users, color: 'text-purple-500', bg: 'bg-purple-100' },
    { text: 'Reporte Diario Enviado', icon: ArrowRight, color: 'text-orange-500', bg: 'bg-orange-100' },
    { text: '¡Todo listo para hoy!', icon: Check, color: 'text-green-500', bg: 'bg-green-100' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) =>
        prev < terminalSteps.length - 1 ? prev + 1 : prev
      );
    }, 800);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  return (
    <div className="w-full rounded-xl shadow-xl overflow-hidden bg-white border border-gray-100 font-sans">
      <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-semibold text-gray-900">Actividad Reciente</h3>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {terminalSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className={`${index > terminalStep ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                } transition-all duration-500 ease-out flex items-center space-x-3`}
            >
              <div className={`p-2 rounded-full ${step.bg}`}>
                <Icon className={`h-4 w-4 ${step.color}`} />
              </div>
              <span className="text-sm text-gray-600 font-medium">{step.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
