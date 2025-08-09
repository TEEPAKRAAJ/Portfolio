'use client';

import { useTheme } from '../contexts/ThemeContext';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-12 px-2"
      style={{ fontFamily: 'Georgia', background: 'none' }}
    >
      <AnimatedSection direction="up" className="w-full max-w-5xl">
        <div className={`backdrop-blur-md rounded-[2.5rem] shadow-2xl border p-8 md:p-14 transition-all duration-700 ${
          theme === 'dark' 
            ? 'bg-gray-900/90 border-gray-700 ring-2 ring-blue-500/30' 
            : 'bg-white/90 border-blue-200 ring-2 ring-cyan-200/60'
        }`}>
          <p className={`mb-10 max-w-2xl mx-auto text-center text-lg italic transition-colors duration-300 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I've developed expertise in various areas, allowing me to deliver comprehensive solutions for diverse projects.
          </p>
          
          <div className="flex flex-col items-center gap-10">
            {/* Programming Languages */}
            <AnimatedSection direction="left" delay={200} className="w-full">
              <div className={`flex flex-col items-center w-full rounded-2xl shadow-lg border p-6 transition-all duration-700 transform ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 via-blue-900/50 to-gray-900 border-gray-600'
                  : 'bg-gradient-to-br from-blue-50 via-cyan-100 to-white border-blue-100'
              } hover:shadow-2xl hover:scale-[1.02]`}>
                <h3 className={`font-bold text-2xl mb-4 text-center tracking-wide drop-shadow transition-colors duration-300 ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
                }`}>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto" style={{ fontFamily: 'Times New Roman' }}>
                  {[
                    'C Language',
                    'C++',
                    'Python',
                    'Java',
                    'JavaScript',
                    'TypeScript',
                    'HTML5',
                    'CSS',
                    'SQL'
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md border skill-tag ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white border-blue-400 hover:shadow-blue-500/50'
                          : 'bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white border-blue-200 hover:shadow-blue-500/50'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Libraries and Frameworks */}
            <AnimatedSection direction="right" delay={400} className="w-full">
              <div className={`flex flex-col items-center w-full rounded-2xl shadow-lg border p-6 transition-all duration-700 transform ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 via-cyan-900/50 to-gray-900 border-gray-600'
                  : 'bg-gradient-to-br from-cyan-50 via-blue-50 to-white border-blue-100'
              } hover:shadow-2xl hover:scale-[1.02]`}>
                <h3 className={`font-bold text-2xl mb-4 text-center tracking-wide drop-shadow transition-colors duration-300 ${
                  theme === 'dark' ? 'text-cyan-300' : 'text-blue-800'
                }`}>
                  Libraries and Frameworks
                </h3>
                <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto" style={{ fontFamily: 'Times New Roman' }}>
                  {[
                    'Tailwind CSS',
                    'Scikit-learn',
                    'PyTorch',
                    'TensorFlow',
                    'Keras',
                    'OpenCV',
                    'Django',
                    'React',
                    'Next.js'
                  ].map((framework, index) => (
                    <span
                      key={framework}
                      className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md border skill-tag ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white border-cyan-400 hover:shadow-cyan-500/50'
                          : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white border-blue-200 hover:shadow-cyan-500/50'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Technical Tools and Software */}
            <AnimatedSection direction="up" delay={600} className="w-full">
              <div className={`flex flex-col items-center w-full rounded-2xl shadow-lg border p-6 transition-all duration-700 transform ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 via-blue-900/50 to-gray-900 border-gray-600'
                  : 'bg-gradient-to-br from-blue-50 via-cyan-100 to-white border-blue-100'
              } hover:shadow-2xl hover:scale-[1.02]`}>
                <h3 className={`font-bold text-2xl mb-4 text-center tracking-wide drop-shadow transition-colors duration-300 ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
                }`}>
                  Technical Tools and Software
                </h3>
                <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto" style={{ fontFamily: 'Times New Roman' }}>
                  {[
                    'MATLAB',
                    'Git',
                    'Node.js',
                    "Figma"
                  ].map((tool, index) => (
                    <span
                      key={tool}
                      className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md border skill-tag ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white border-blue-400 hover:shadow-blue-500/50'
                          : 'bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-500 text-white border-blue-200 hover:shadow-blue-500/50'
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'fadeInUp 0.6s ease-out forwards'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}