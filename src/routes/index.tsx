import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <div className="w-36 h-36 mx-auto rounded-full bg-gradiant-to-r from-blue-500 to-pink-500 p-1">
              <div className='w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-4xl font-bold'>
                YN
              </div>
            </div>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            Hi, I'm{' '}
            <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
              Linda Santika
            </span>
          </h1>

          <p className='text-lg md:text-2xl text-gray-300 mb-8'>
            Full Stack Developer
          </p>

          <p className='text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Saya membuat aplikasi web dan mobile yang responsif dan menarik. 
            Dengan pengalaman dalam berbagai teknologi, saya siap membantu mewujudkan ide-ide digital Anda menjadi kenyataan.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View My Project
            </button>
            <button className='px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300'>
              Contact Me
            </button>
          </div>

          <div className='animate-bounce mt-12'>
            <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke='currentColor' viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Vue.js', color: 'text-green-400' },
              { name: 'SQL', color: 'text-yellow-700' },
              { name: 'PHP', color: 'text-purple-400' },
              { name: 'React', color: 'text-blue-400' },
              { name: 'TypeScript', color: 'text-blue-500' },
              { name: 'Java', color: 'text-green-500' },
              { name: 'Python', color: 'text-yellow-400' },
              { name: 'Tailwind', color: 'text-cyan-400' },
              { name: 'PostgreSQL', color: 'text-blue-600' },
              { name: 'Flutter', color: 'text-blue-700' },
              { name: 'C++', color: 'text-yellow-300' },
              { name: 'Laravel', color: 'text-orange-500' },
            ].map((tech) => (
              <div key={tech.name} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <span className={`text-2xl font-bold ${tech.color}`}>
                    {tech.name.slice(0, 2)}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
