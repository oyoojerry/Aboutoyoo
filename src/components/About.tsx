import React from 'react';
import { GraduationCap, Award, Target, Users } from 'lucide-react';

const About = () => {
  const education = [
    {
      title: 'Diploma in Computer Science',
      institution: 'Technical Institute',
      period: '2022 - 2024',
      description: 'Comprehensive study of computer science fundamentals, programming, and software development.'
    },
    {
      title: 'PLP Africa Software Engineering',
      institution: 'PLP Africa (Scholarship)',
      period: '2023 - Present',
      description: 'Intensive software engineering program focusing on modern web development technologies.'
    },
    {
      title: 'Oracle Cloud Infrastructure Training',
      institution: 'Oracle Corporation',
      period: '2024',
      description: 'Cloud computing and infrastructure management certification program.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions to complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong believer in teamwork and knowledge sharing to achieve greater results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations.'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate software developer with a love for creating innovative digital solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Profile Image and Bio */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-6">
                  OJ
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Oyoo Jerry Steve
                </h2>
                <p className="text-center text-gray-600 font-medium">
                  Software Developer & Tech Enthusiast
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate software developer with a strong foundation in computer science 
                  and a keen interest in creating innovative digital solutions. My journey in 
                  technology began with curiosity and has evolved into a dedicated career path.
                </p>
                <p>
                  Currently pursuing advanced software engineering through PLP Africa's scholarship 
                  program, I combine theoretical knowledge with practical experience to build 
                  meaningful applications that solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with fellow developers. I believe in 
                  the power of collaboration and continuous learning.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="mr-3 text-blue-600" size={28} />
                Education & Training
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">{edu.title}</h4>
                      <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Core Values</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Icon size={32} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Dedicated software developer with expertise in modern web technologies including React.js, 
            Node.js, and cloud infrastructure. Proven ability to work collaboratively in team environments 
            while delivering high-quality, scalable solutions. Passionate about continuous learning and 
            staying current with industry trends and best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;