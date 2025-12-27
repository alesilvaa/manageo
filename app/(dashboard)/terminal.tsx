'use client';

import { useState, useEffect } from 'react';
import { Check, Calendar, CreditCard, UserPlus, MoreHorizontal, DollarSign } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Terminal() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: 'Juanse Colina',
      image: '',
      action: 'Nueva Cita Agendada',
      time: 'Hace 2 min',
      status: 'Confirmado',
      statusColor: 'bg-green-100 text-green-700',
      icon: Calendar,
      amount: null
    },
    {
      id: 2,
      user: 'Carlos Rodriguez',
      image: '',
      action: 'Pago de Mensualidad',
      time: 'Hace 15 min',
      status: 'Completado',
      statusColor: 'bg-blue-100 text-blue-700',
      icon: CreditCard,
      amount: '+ Gs. 150.000'
    },
    {
      id: 3,
      user: 'Ana Gomez',
      image: '',
      action: 'Nuevo Cliente',
      time: 'Hace 1 hora',
      status: 'Nuevo',
      statusColor: 'bg-purple-100 text-purple-700',
      icon: UserPlus,
      amount: null
    },
    {
      id: 4,
      user: 'Gimnasio TopFit',
      image: '',
      action: 'Cierre de Caja Diario',
      time: 'Ayer',
      status: 'Procesado',
      statusColor: 'bg-gray-100 text-gray-700',
      icon: DollarSign,
      amount: 'Gs. 2.400.000'
    },
  ]);

  return (
    <div className="w-full rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-100 font-sans">
      <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Actividad Reciente</h3>
          <p className="text-xs text-gray-500">Últimos movimientos en tu negocio</p>
        </div>
        <div className="flex space-x-1">
          <MoreHorizontal className="text-gray-400 h-5 w-5 cursor-pointer hover:text-gray-600 transition-colors" />
        </div>
      </div>
      <div className="divide-y divide-gray-50">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="p-4 hover:bg-blue-50/30 transition-colors duration-200 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Avatar className="h-10 w-10 border border-gray-100">
                    <AvatarImage src={activity.image} alt={activity.user} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-bold text-xs">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <div className={`p-1 rounded-full ${activity.statusColor} bg-opacity-20`}>
                      <Icon className={`h-3 w-3 ${activity.statusColor.split(' ')[1]}`} />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                </div>
              </div>
              <div className="text-right">
                {activity.amount && (
                  <p className="text-sm font-bold text-gray-900 mb-0.5">{activity.amount}</p>
                )}
                <div className="flex items-center justify-end space-x-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${activity.statusColor}`}>
                    {activity.status}
                  </span>
                  <span className="text-[10px] text-gray-400">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors block w-full">
          Ver toda la actividad
        </button>
      </div>
    </div>
  );
}
