
import React from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">ខ្ញុំជានិស្សិតឆ្នាំទី២ </span>
            <br />
            <span className="text-foreground">Norton University</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ជំនាញខាង <span className="text-primary font-semibold">Graphic Design</span> និង <span className="text-primary font-semibold">ថតរូប</span>
            <br />
            ដើម្បីបង្កើតនៅអ្វីដែលថ្មី សម្រាប់ទាំងអស់គ្នា
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full hover-lift"
            >
              មើលគម្រោង
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-full hover-lift"
            >
              ទាក់ទងខ្ញុំ
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Download className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
