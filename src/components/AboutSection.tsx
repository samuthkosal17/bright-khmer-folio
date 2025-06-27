
import React from 'react';
import { Download, MapPin, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: 'ឆ្នាំបទពិសោធន៍', value: '1+' },
    { icon: Award, label: 'គម្រោងបញ្ចប់', value: '50+' },
    { icon: MapPin, label: 'ទីតាំង', value: 'ភ្នំពេញ' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/photo_2025-06-27_22-50-06.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              អំពីខ្ញុំ
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ជំរាបសួរ! ខ្ញុំឈ្មោះ <strong className="text-foreground">កុសល់ សាមុត</strong> ខ្ញុំមានការងារជា Freelancer។
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ខ្ញុំជឿជាក់ថាបច្ចេកវិទ្យាអាចផ្លាស់ប្តូរពិភពលោក ហើយខ្ញុំសប្បាយចិត្តក្នុងការបង្កើតដំណោះស្រាយ
              ដែលអាចជួយដល់មនុស្សជាច្រើន។ គោលដៅរបស់ខ្ញុំគឺក្លាយជាអ្នកអភិវឌ្ឍន៍ Full-Stack ដ៏ពូកែ។
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-card hover-lift">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download CV Button */}
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full hover-lift"
            >
              <Download className="w-5 h-5 mr-2" />
              ទាញយក CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
