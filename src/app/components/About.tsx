import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import hustLogo from '../../assets/logohust.png';

const education = [
  {
    school: 'Hanoi University of Science and Technology',
    location: 'Hanoi, Vietnam',
    degree: 'Bachelor of Informatics Comunication and Technology (ICT K68)',
    period: '2023 – 2028',
    current: true,
  },
  {
    school: 'Ha Long High School for Gifted Students',
    location: 'Quảng Ninh, Vietnam',
    degree: 'Specialized in Informatics (Chuyên Tin K31)',
    period: '2020 – 2023',
    current: false,
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* About Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
                Hello! I'm Minh
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate Computer Science student at Hanoi University of Science and Technology (HUST), 
                  one of Vietnam's most prestigious technical universities. My journey in technology started during 
                  my time at Ha Long High School for Gifted Students, where I specialized in Informatics.
                </p>
                <p>
                  I'm deeply interested in software development, with a particular focus on backend engineering 
                  and artificial intelligence. I believe in building applications that solve real-world problems 
                  and create meaningful impact for users.
                </p>
                <p>
                  Beyond coding, I enjoy participating in programming competitions and constantly learning new 
                  technologies. My goal is to become a skilled software engineer who can contribute to innovative 
                  projects that shape the future.
                </p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-6 border-l-2 ${
                    edu.current ? 'border-blue-500' : 'border-gray-300'
                  } ${index === education.length - 1 ? 'border-l-0 pb-0' : ''}`}
                >
                  <div
                    className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-[9px] ${
                      edu.current
                        ? 'bg-blue-500 ring-4 ring-blue-100'
                        : 'bg-gray-300'
                    }`}
                  ></div>
                  
                  <div className="bg-gray-50 p-5 md:p-6 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          edu.current ? 'bg-blue-100' : 'bg-gray-200'
                        }`}>
                          {edu.current ? (
                            <img
                              src={hustLogo}
                              alt="HUST Logo"
                              className="w-10 object-contain"
                            />
                          ) : (
                            <GraduationCap className="text-gray-500" size={40} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {edu.school}
                          </h4>
                          <p className="text-gray-700 mb-2">{edu.degree}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600 ml-11">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                        {edu.current && (
                          <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-xs">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}