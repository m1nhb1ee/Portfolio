import { Download, ChevronDown } from 'lucide-react';
import profileImg from 'figma:asset/23cd5281e8ec5a5a9a556ff998d569db29b99635.png';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 md:pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-4 md:mb-6">
              <span className="text-sm md:text-base">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6">
              <span className="block text-gray-900">Hi, I'm</span>
              <span className="block text-blue-500 font-bold">Nguyễn Trọng Minh</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-3 md:mb-4">
              Aspiring Software Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Backend & Machine Learning Enthusiast
            </p>
            
            <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              Passionate about building impactful applications with real-world value
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-6 md:px-8 py-3 md:py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View My Projects
              </button>
              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={profileImg}
                  alt="Nguyễn Trọng Minh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-blue-500 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
