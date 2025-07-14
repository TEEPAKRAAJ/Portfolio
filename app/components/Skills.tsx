'use client';

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-12 px-2"
      style={{ fontFamily: 'Georgia', background: 'none' }}
    >
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-blue-200 p-8 md:p-14 transition-all duration-500 ring-2 ring-cyan-200/60">
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center text-lg italic">
          I’ve developed expertise in various areas, allowing me to deliver comprehensive solutions for diverse projects.
        </p>
        <div className="flex flex-col items-center gap-10">
          {/* Programming Languages */}
          <div className="flex flex-col items-center w-full bg-gradient-to-br from-blue-50 via-cyan-100 to-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-2xl transition">
            <h3 className="font-bold text-2xl mb-4 text-center text-blue-800 tracking-wide drop-shadow">Programming Languages</h3>
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
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white shadow-md hover:scale-110 hover:shadow-xl transition-all duration-200 border border-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Libraries and Frameworks */}
          <div className="flex flex-col items-center w-full bg-gradient-to-br from-cyan-50 via-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-2xl transition">
            <h3 className="font-bold text-2xl mb-4 text-center text-blue-800 tracking-wide drop-shadow">Libraries and Frameworks</h3>
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
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white shadow-md hover:scale-110 hover:shadow-xl transition-all duration-200 border border-blue-200"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
          {/* Technical Tools and Software */}
          <div className="flex flex-col items-center w-full bg-gradient-to-br from-blue-50 via-cyan-100 to-white rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-2xl transition">
            <h3 className="font-bold text-2xl mb-4 text-center text-blue-800 tracking-wide drop-shadow">Technical Tools and Software</h3>
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto" style={{ fontFamily: 'Times New Roman' }}>
              {[
                'MATLAB',
                'Git',
                'Node.js',
                "Figma"
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white shadow-md hover:scale-110 hover:shadow-xl transition-all duration-200 border border-blue-200"
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