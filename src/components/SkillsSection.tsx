
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Microsoft Word', level: 90 },
        { name: 'Microsoft Excel', level: 60 },
        { name: 'Microsoft Powerpoint', level: 88 },
        { name: 'Canva', level: 25 },
        { name: 'Motion Ninja', level: 75 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Adobe Photoshop', level: 87 },
        { name: 'Adobe Illustrator', level: 82 },
        { name: 'Adobe After Effects', level: 85 },
        { name: 'Adobe Premue', level: 50 },
        { name: 'Davivc', level: 25 },
      ]
    },
    {
      title: 'Contact Inform',
      skills: [
        { name: 'Camera', level: 90 },
        { name: 'Editor', level: 75 },
        <a href="t.me/nestelrooyxx"></a> Telegram
      ]
    }
  ];

  const softSkills = [
    'ការដឹកនាំក្រុម',
    'ការដោះស្រាយបញ្ហា',
    'ការប្រាស្រ័យទាក់ទង',
    'ការគ្រប់គ្រងពេលវេលា',
    'ចិត្តស្នេហាការរៀន',
    'ការធ្វើការជាក្រុម'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            ជំនាញរបស់ខ្ញុំ
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            បច្ចេកវិទ្យានិងឧបករណ៍ដែលខ្ញុំប្រើប្រាស់ដើម្បីបង្កើតដំណោះស្រាយដ៏ល្អឥតខ្ចោះ
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="glass-card max-w-4xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center text-xl font-bold text-primary">
              ជំនាញទន់
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-primary/10 rounded-lg p-3 text-center hover-lift"
                >
                  <span className="text-foreground font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
