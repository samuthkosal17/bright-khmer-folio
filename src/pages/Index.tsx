
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
