export type DiaSemana = 1 | 2 | 3 | 4; // 1=Lunes, 2=Martes, 3=Miércoles, 4=Jueves

export interface FranjaHoraria {
  id: string;
  label: string;
  horarios: string[];
}

export interface DisponibilidadDia {
  dia: DiaSemana;
  nombre: string;
  franjas: FranjaHoraria[];
}

export const disponibilidad: DisponibilidadDia[] = [
  {
    dia: 1,
    nombre: 'Lunes',
    franjas: [
      { id: 'tarde', label: 'Tarde', horarios: ['17:30', '18:00', '18:30', '19:00', '19:30'] },
    ],
  },
  {
    dia: 2,
    nombre: 'Martes',
    franjas: [
      { id: 'manana', label: 'Mañana', horarios: ['08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'] },
    ],
  },
  {
    dia: 3,
    nombre: 'Miércoles',
    franjas: [
      { id: 'tarde', label: 'Tarde', horarios: ['15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'] },
    ],
  },
  {
    dia: 4,
    nombre: 'Jueves',
    franjas: [
      { id: 'tarde', label: 'Tarde', horarios: ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'] },
    ],
  },
];

// Días habilitados para el calendario (0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue)
export const diasHabilitados: number[] = [1, 2, 3, 4];
