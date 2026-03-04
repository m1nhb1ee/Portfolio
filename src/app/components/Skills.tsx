import { Code2, Database, Boxes, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'Python', 'C/C++', 'C#'],
    color: 'blue',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'JSON'],
    color: 'green',
  },
  {
    title: 'Frameworks',
    icon: Boxes,
    skills: ['JavaFX', 'CSS', 'React.js (learning)'],
    color: 'purple',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['GitHub', 'Eclipse', 'VSCode', 'Visual Studio', 'Unity', 'Figma'],
    color: 'orange',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-500',
    border: 'border-blue-200',
    hover: 'hover:border-blue-500',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-500',
    border: 'border-green-200',
    hover: 'hover:border-green-500',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-500',
    border: 'border-purple-200',
    hover: 'hover:border-purple-500',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-500',
    border: 'border-orange-200',
    hover: 'hover:border-orange-500',
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-lg transform hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={colors.icon} size={24} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 ${colors.bg} text-gray-700 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'API Development', 'TensorFlow', 'OpenCV', 'Selenium', 'OCR'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
