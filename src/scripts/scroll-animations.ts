import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<Element>('.fade-in').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
      },
    });
  });
} else {
  // Sin animaciones: mostrar todo directamente
  document.querySelectorAll<HTMLElement>('.fade-in').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}
