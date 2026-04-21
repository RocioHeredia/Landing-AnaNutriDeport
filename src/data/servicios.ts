export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  detalles: string[];
  imageUrl: string;
  imageAlt: string;
}

export const servicios: Servicio[] = [
  {
    id: 'controles-nutricionales',
    titulo: 'Controles Nutricionales',
    descripcion: 'Seguimiento continuo de tu estado nutricional con mediciones periódicas para evaluar tu progreso y ajustar tu plan según tus objetivos.',
    detalles: [
      'Anamnesis nutricional completa',
      'Análisis de hábitos alimentarios',
      'Plan alimentario personalizado',
      'Seguimiento y ajuste periódico',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop&q=80',
    imageAlt: 'Bowl con vegetales frescos y coloridos representando alimentación saludable',
  },
  {
    id: 'evaluacion-antropometrica',
    titulo: 'Evaluación Antropométrica',
    descripcion: 'Medición precisa de la composición corporal para entender tu punto de partida y diseñar una estrategia nutricional efectiva.',
    detalles: [
      'Medición de pliegues cutáneos',
      'Perímetros y diámetros corporales',
      'Cálculo de masa muscular y grasa',
      'Informe de composición corporal',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&q=80',
    imageAlt: 'Persona realizando actividad física, representando evaluación de rendimiento deportivo',
  },
];
