import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Download, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    // This would track CV downloads in a real implementation
    console.log('CV download tracked');
    // For now, we'll just simulate the download
    alert('CV download will be available once deployed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Avatar */}
            <div className={`mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative mx-auto w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-600">
                  OJ
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Oyoo</span> Jerry Steve
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-600 mb-8 space-y-2">
                <p className="font-medium">Tech Enthusiast | Software Developer | Problem Solver</p>
                <p className="text-lg">Building digital solutions with passion and precision</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </button>
                
                <Link
                  to="/projects"
                  className="flex items-center justify-center space-x-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <span>View Projects</span>
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-16">
                <a
                  href="https://github.com/oyoojerry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <Github size={24} className="text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oyoo-jerry-a316341b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={24} className="text-blue-600" />
                </a>
                <Link
                  to="/contact"
                  className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <Mail size={24} className="text-emerald-600" />
                </Link>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex flex-col items-center">
                <p className="text-gray-500 mb-2">Scroll to explore</p>
                <ChevronDown size={24} className="text-gray-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2+</div>
              <div className="text-gray-600">Years Learning</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;