import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Vision } from '../components/Vision';
import { FourRivers } from '../components/FourRivers';
import { Values } from '../components/Values';
import { WhatWeBuild } from '../components/WhatWeBuild';
import { RescafNexus } from '../components/RescafNexus';
import { Partnership } from '../components/Partnership';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="about">
        <Vision />
      </div>
      <div id="products">
        <WhatWeBuild />
      </div>
      <div id="vision">
        <FourRivers />
      </div>
      <div id="values">
        <Values />
      </div>
      <RescafNexus />
      <div id="partner">
        <Partnership />
      </div>
      <Footer />
    </div>
  );
}
