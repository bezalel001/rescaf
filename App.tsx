import { useEffect } from 'react';
import Home from './pages/Home';
import { routeComponents } from './routes';

export default function App() {
  const pathname = window.location.pathname as keyof typeof routeComponents;
  const Page = routeComponents[pathname] ?? Home;

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.rescaf-reveal'));
    if (!elements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return <Page />;
}
