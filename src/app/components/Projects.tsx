import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'HUSTDerm – Smart Skincare Assistant App',
    description: 'An intelligent mobile application that provides personalized skincare recommendations using AI and machine learning. Features include skin analysis, product recommendations, and consultation with dermatology experts.',
    image: 'https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcyNjMyMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Java', 'Python', 'MongoDB', 'LLM'],
    github: '#',
  },
  {
    title: 'Traffic Sign Recognition System',
    description: 'A computer vision system that accurately detects and classifies traffic signs in real-time using deep learning. Implements VGG16 architecture for high accuracy recognition.',
    image: 'https://images.unsplash.com/photo-1655272427565-c64fd73298df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNjM1NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['TensorFlow', 'OpenCV', 'VGG16', 'Python'],
    github: '#',
  },
  {
    title: 'Captcha Resolution & Mobile Network Tracking',
    description: 'An automated system for captcha solving and mobile network tracking using OCR technology and Selenium for web automation. Improves efficiency in data collection processes.',
    image: 'https://images.unsplash.com/photo-1625459201773-9b2386f53ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZSUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc3MjYzNTQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Python', 'OCR', 'Selenium'],
    github: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
