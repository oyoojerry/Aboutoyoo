import React from 'react';
import { Code2, Database, Globe, Palette, Users, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Technologies',
      color: 'blue',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 82 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'indigo',
      skills: [
        { name: 'Node.js', level: 78 },
        { name: 'Express.js', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 68 },
        { name: 'REST APIs', level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      color: 'emerald',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Oracle Cloud', level: 65 },
        { name: 'Canva', level: 75 },
        { name: 'Linux', level: 70 }
      ]
    }
  ];

  const softSkills = [
    {
      icon: Users,
      title: 'Communication',
      description: 'Excellent verbal and written communication skills, comfortable presenting to diverse audiences.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Strong collaborative skills with experience working in diverse, cross-functional teams.'
    },
    {
      icon: Globe,
      title: 'Problem Solving',
      description: 'Analytical mindset with ability to break down complex problems into manageable solutions.'
    },
    {
      icon: Palette,
      title: 'Creativity',
      description: 'Creative approach to design and development, always seeking innovative solutions.'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    emerald: 'bg-emerald-500'
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${colorMap[category.color]} bg-opacity-10 mr-4`}>
                      <Icon size={24} className={`text-${category.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${colorMap[category.color]} transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Soft Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{skill.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              I'm committed to staying current with the latest technologies and best practices. 
              Currently expanding my knowledge in cloud computing, DevOps practices, and advanced React patterns.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Currently Learning</h3>
                <p className="text-sm">Docker & Kubernetes</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Next Goal</h3>
                <p className="text-sm">AWS Cloud Certification</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Exploring</h3>
                <p className="text-sm">Machine Learning & AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;