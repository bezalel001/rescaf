import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { FourRivers } from './components/FourRivers';
import { Values } from './components/Values';
import { WhatWeBuild } from './components/WhatWeBuild';
import { RescafNexus } from './components/RescafNexus';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Vision />
      <FourRivers />
      <Values />
      <WhatWeBuild />
      <RescafNexus />
      <Footer />
    </div>
  );
}
