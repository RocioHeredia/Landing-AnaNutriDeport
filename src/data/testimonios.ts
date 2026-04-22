export interface Testimonio {
  id: string;
  texto: string;
  nombre: string;
  contexto: string;
}

export const testimonios: Testimonio[] = [
  {
    id: 'martina',
    texto: 'Gracias al plan de Ana mejoré notablemente mis tiempos en los 10k. Me enseñó que comer bien no es privarse, es saber cuándo y qué comer según tu entrenamiento.',
    nombre: 'Martina G.',
    contexto: 'Corredora amateur',
  },
  {
    id: 'carlos',
    texto: 'En tres meses de seguimiento bajé 6 kg y mejoré mi composición corporal. La evaluación antropométrica fue clave para entender mi punto de partida y trabajar con objetivos reales.',
    nombre: 'Carlos D.',
    contexto: 'Jugador de fútbol',
  },
  {
    id: 'sofia',
    texto: 'Muy profesional y accesible. Me dio un plan que pude sostener en el tiempo, algo que con otras dietas nunca había logrado. La recomiendo sin dudarlo.',
    nombre: 'Sofía R.',
    contexto: 'CrossFit y vida activa',
  },
];
