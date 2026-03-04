import { Trophy, Award, Star, Globe } from 'lucide-react';

const achievements = [
  {
    year: '2023',
    title: 'IELTS 6.0',
    category: 'Language Certification',
    icon: Globe,
    color: 'purple',
  },
  {
    year: '2022',
    title: 'Hung Vuong Summer Camp',
    category: 'Honorable Mention',
    icon: Star,
    color: 'yellow',
  },
  {
    year: '2022',
    title: 'Red River Delta Informatics Competition',
    category: 'Honorable Mention',
    icon: Star,
    color: 'yellow',
  },
  {
    year: '2021-2022',
    title: 'Young Informatics Contest',
    category: '2nd & 3rd Prize',
    icon: Award,
    color: 'orange',
  },
  {
    year: '2021-2023',
    title: 'Provincial Informatics Competition',
    category: '2nd, 3rd & Consolation Prize',
    icon: Trophy,
    color: 'blue',
  },
  {
    year: '2020',
    title: 'Top 2 Entrance Scorer',
    category: 'Ha Long High School for Gifted Students',
    icon: Trophy,
    color: 'gold',
  },
];

const colorClasses = {
  gold: {
    bg: 'bg-yellow-50',
    icon: 'text-yellow-500',
    border: 'border-yellow-200',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-500',
    border: 'border-blue-200',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-500',
    border: 'border-orange-200',
  },
  yellow: {
    bg: 'bg-amber-50',
    icon: 'text-amber-500',
    border: 'border-amber-200',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-500',
    border: 'border-purple-200',
  },
};

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Awards & <span className="text-blue-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition and accomplishments throughout my academic journey
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>

            {/* Achievement Items */}
            <div className="space-y-8 md:space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const colors = colorClasses[achievement.color as keyof typeof colorClasses];
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`bg-white rounded-xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all transform hover:-translate-y-1`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className={colors.icon} size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-500 mb-1">{achievement.year}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {achievement.title}
                            </h3>
                            <p className="text-gray-600">{achievement.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 ring-4 ring-white shadow-md z-10"></div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">6+</div>
            <div className="text-gray-600">Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">3+</div>
            <div className="text-gray-600">Competitions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">3+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">6.0</div>
            <div className="text-gray-600">IELTS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
