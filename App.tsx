import Home from './pages/Home';
import { routeComponents } from './routes';

export default function App() {
  const pathname = window.location.pathname as keyof typeof routeComponents;
  const Page = routeComponents[pathname] ?? Home;
  return <Page />;
}
