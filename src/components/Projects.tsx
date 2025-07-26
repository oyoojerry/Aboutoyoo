import React from 'react';
import { ExternalLink, Github, Code, Globe, Smartphone, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
      githubUrl: 'https://github.com/oyoojerry/ecommerce-platform',
      liveUrl: '#',
      category: 'Web Application',
      icon: Globe
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive project tracking capabilities.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      githubUrl: 'https://github.com/oyoojerry/task-manager',
      liveUrl: '#',
      category: 'Productivity',
      icon: Code
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions, forecasts, and interactive maps using multiple weather APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Chart.js'],
      githubUrl: 'https://github.com/oyoojerry/weather-dashboard',
      liveUrl: '#',
      category: 'Web Application',
      icon: Globe
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and featuring smooth animations and interactive elements.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'React Router', 'Framer Motion'],
      githubUrl: 'https://github.com/oyoojerry/portfolio',
      liveUrl: '#',
      category: 'Portfolio',
      icon: Smartphone
    },
    {
      id: 5,
      title: 'Student Management API',
      description: 'RESTful API for managing student records with CRUD operations, authentication, and data validation. Includes comprehensive documentation.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Express', 'MySQL', 'JWT', 'Swagger'],
      githubUrl: 'https://github.com/oyoojerry/student-api',
      liveUrl: '#',
      category: 'API',
      icon: Database
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, private messaging, file sharing, and emoji support. Built with modern web technologies.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'CSS3'],
      githubUrl: 'https://github.com/oyoojerry/chat-app',
      liveUrl: '#',
      category: 'Web Application',
      icon: Globe
    }
  ];

  const categories = ['All', 'Web Application', 'API', 'Portfolio', 'Productivity'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and creativity through various projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-white rounded-full shadow-md">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for additional projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/oyoojerry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;