'use client';

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-[#f5f6ff] to-[#ecebfa] pb-12"
      style={{ fontFamily: 'Georgia' }}
    >
      <div className="w-full px-8 py-20">
        <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded"></div>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center">
          I’ve developed expertise in various areas, allowing me to deliver comprehensive solutions for diverse projects.
        </p>
        <div className="flex flex-col items-center">
        {/* Programming Languages */}
        <div className="mb-10 flex flex-col items-center w-full">
          <h3 className="font-bold text-2xl mb-4 text-center">Programming Languages</h3>
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
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white hover:scale-110 transition text-center"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Libraries and Frameworks */}
        <div className="mb-10 flex flex-col items-center w-full">
          <h3 className="font-bold text-2xl mb-4 text-center">Libraries and Frameworks</h3>
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
            ].map((framework) => (
              <span
                key={framework}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white hover:scale-110 transition text-center"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Tools and Software */}
        <div className="flex flex-col items-center w-full">
          <h3 className="font-bold text-2xl mb-4 text-center">Technical Tools and Software</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto" style={{ fontFamily: 'Times New Roman' }}>
            {[
              'MATLAB',
              'Git',
              'Node.js',
              "Figma"
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white hover:scale-110 transition text-center"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
