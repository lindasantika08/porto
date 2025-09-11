import { createFileRoute } from '@tanstack/react-router'
// import logo from '../logo.svg'
// import foto from '../image.png'
import foto from '../asset/image.png'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8'>
            <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-1">
              <img
                src={foto}
                alt="Linda Santika"
                className="w-full h-full rounded-full object-cover"
              />
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
          <p className='text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed'>
            I create modern and responsive web applications that deliver exceptional user experiences.
            With a passion for coding and a keen eye for design, I bring ideas to life on the web.
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
              { name: 'JavaScript', color: 'text-green-500' },
              { name: 'TypeScript', color: 'text-blue-500' },
              { name: 'PHP', color: 'text-purple-400' },
              { name: 'Java', color: 'text-green-500' },
              { name: 'Python', color: 'text-yellow-400' },
              { name: 'C++', color: 'text-yellow-300' },
              { name: 'React', color: 'text-blue-400' },
              { name: 'Vue.js', color: 'text-green-400' },
              { name: 'Tailwind', color: 'text-cyan-400' },
              { name: 'Flutter', color: 'text-blue-700' },
              { name: 'Laravel', color: 'text-orange-500' },
              { name: 'Lumen', color: 'text-orange-400' },
              { name: 'MySQL', color: 'text-yellow-700' },
              { name: 'PostgreSQL', color: 'text-blue-600' },
              { name: 'MongoDB', color: 'text-green-400' },
              { name: 'Docker', color: 'text-blue-600' },
              { name: 'GitHub', color: 'text-gray-300' },
              { name: 'AWS', color: 'text-blue-400' },
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

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Graduate of Bandung State Polytechnic with a strong interest in technology,
            particularly web application development. Experienced in developing applications in both backend and frontend
            positions, and accustomed to deploying applications. Possesses a foundation in programming, understands database
            management, and is capable of creating technical documentation during the application development process.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            In addition to focusing on software development, I also have experience in hardware,
            particularly in networking during my vocational school years.
            My internship experience and competency exams from companies with satisfactory results show that
            I have significant and measurable interest and talent in technology, both during school and college.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              3+ Years Experience
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">
              10+ Portofolio
            </span>
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              Full Stack
            </span>
            <span className="px-4 py-2 bg-red-500/20 text-blue-300 rounded-full text-sm">
              Back End
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-blue-300 rounded-full text-sm">
              Front End
            </span>
            <span className="px-4 py-2 bg-yellow-500/20 text-blue-300 rounded-full text-sm">
              Quality Assurance
            </span>
            <span className="px-4 py-2 bg-gray-500/20 text-blue-300 rounded-full text-sm">
              Technical Writer
            </span>
            <span className="px-4 py-2 bg-orange-600/20 text-blue-300 rounded-full text-sm">
              Network Administrator
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  SMK Negeri 1 Cibeber
                </h3>
                <p className="text-blue-400 font-semibold text-lg">
                  Computer and Network Engineering
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Value:</span>
                  <span className="text-green-400 font-semibold">86 / 100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Graduation year:</span>
                  <span className="text-white font-semibold">2022</span>
                </div>
                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-2">Final Examination Report Title:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    Computer Network Simulation of 4 Buildings with 100 PCs, Including Web Server and Proxy Configuration on Cisco Packet Tracer
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Politeknik Negeri Bandung
                </h3>
                <p className="text-blue-400 font-semibold text-lg">
                  Diploma 3 Informatic Engineering
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">GPA:</span>
                  <span className="text-green-400 font-semibold">3.19 / 4.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Graduation year:</span>
                  <span className="text-white font-semibold">2025</span>
                </div>
                <div className="mt-6">
                  <h4 className="text-white font-semibold mb-2">Final Project Title:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">
                    Development of Self and Peer Assessment Applications in Project-Based Learning:
                    A Case Study of the Computer Engineering and Informatics Department at Bandung State Polytechnic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-pink-400"></div>
            <div className="space-y-8">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Full Stack Developer
                      </h3>
                      <p className="text-blue-400 font-semibold mb-2">
                        PT. Bima Inspira Solusindo
                      </p>
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                        Intern
                      </span>
                    </div>
                    <div className="text-gray-300 text-sm mt-2 md:mt-0">
                      <span className="bg-gray-700/50 px-3 py-1 rounded-full">
                        Juni 2024 - Oktober 2024
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Project & Task:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Developed integration of three commodity systems (nickel, bauxite, gold) into one
                        Superapps platform based on Laravel & Vue.js.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Developed a microservice-based e-learning system for BPSDM Jabar, on certificate automation
                        and data management features with MinIO.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Developed kabarnikah.com website using CodeIgniter 3, adding digital invitation customization
                        feature for users.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        Junior Network Technician
                      </h3>
                      <p className="text-blue-400 font-semibold mb-2">
                        CV. Riyadloh
                      </p>
                      <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                        Intern
                      </span>
                    </div>
                    <div className="text-gray-300 text-sm mt-2 md:mt-0">
                      <span className="bg-gray-700/50 px-3 py-1 rounded-full">
                        September 2021 - November 2021
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Project & Task:</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Create a basic network configuration using Cisco Packet Tracer.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Implement the basics of network topology and infrastructure wiring.
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        Perform basic network installation by crimping LAN cables (RJ45), arranging straight-through
                        and cross-over patterns according to standards, and testing connections using a LAN tester to
                        ensure network stability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative flex items-start opacity-50">
                <div className="absolute left-6 w-4 h-4 bg-gray-500 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 w-full border-dashed">
                  <div className="text-center text-gray-400">
                    <h3 className="text-lg font-semibold mb-2">Next Opportunity</h3>
                    <p className="text-sm">Ready for new challenges and experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Training & Certification
          </h2>
          <div className="hidden md:block">
            <div
              className="flex overflow-x-auto pb-6 gap-6"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `
              }} />
              {[
                {
                  title: "Software Quality Assurance",
                  issuer: "Arutala Lab.",
                  date: "Juni 2025",
                  type: "Unit Testing",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Database Design & Programming with SQL",
                  issuer: "Digitalent Kominfo",
                  date: "Februari 2024",
                  type: "Database",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  title: "Junior Network Administrator (BNSP)",
                  issuer: "Digitalent Kominfo",
                  date: "Juni 2023",
                  type: "Networking",
                  color: "from-blue-400 to-purple-500"
                },
                {
                  title: "Asean Data Sience Bootcamp",
                  issuer: "SAP",
                  date: "Juni 2023",
                  type: "Data Sience",
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "Technical Competency Test for Computer Engineering",
                  issuer: "PT Cemindo Gemilang Tbk",
                  date: "Maret 2022",
                  type: "Network Configuration",
                  color: "from-blue-600 to-indigo-600"
                },
                {
                  title: "Hosting a Web App on Google Cloud Using Compute Engine",
                  issuer: "Cloud Skill Boost",
                  date: "Mei 2025",
                  type: "Cloud Computing",
                  color: "from-green-500 to-teal-500"
                },
                {
                  title: "Running a Containerized App on Google Kubernetes Engine",
                  issuer: "Cloud Skill Boost",
                  date: "April 2025",
                  type: "Kubernetes",
                  color: "from-yellow-500 to-green-500"
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="min-w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`w-full h-2 bg-gradient-to-r ${cert.color} rounded-full mb-4`}></div>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.color} bg-opacity-20 text-white text-xs rounded-full mb-3`}>
                      {cert.type}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-sm mb-2">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">{cert.date}</span>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <p className="text-gray-400 text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4-4m-4 4H3m14 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Scroll horizontally to see more
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Achievements & Awards
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Affirmative Scholarship Program of the Regent of Lebak Regency, Banten",
                event: "Lebak Regency Government",
                year: "2022",
                description: "Affirmative Scholarships from the Lebak Regency Government to support higher education at the Bandung State Polytechnic",
                type: "Scholarship",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: "🥈",
                title: "Featured Final Project",
                event: "Politeknik Negeri Bandung",
                year: "2025",
                description: "Award for the best final project that stands out among students majoring in Computer Engineering and Informatics",
                type: "Academic",
                color: "from-gray-400 to-gray-600"
              },
              {
                icon: "🌟",
                title: "Best Junior Network Administrator Training Participant",
                event: "Digitalent Kominfo",
                year: "2023",
                description: "Awarded for outstanding performance and active participation during the Junior Network Administrator training program",
                type: "Certification",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: "🎯",
                title: "Passed BNSP Junior Network Administrator Certification",
                event: "BNSP - Digitalent Kominfo",
                year: "2023",
                description: "Successfully passed the BNSP Junior Network Administrator certification",
                type: "Certification",
                color: "from-green-400 to-teal-500"
              },
              {
                icon: "📚",
                title: "Passed PKM-VGK Funding with the Title “Smart Counting Traffic Light”.",
                event: "Politeknik Negeri Bandung",
                year: "2023",
                description: "Funding for student creativity program in the field of research and technology innovation",
                type: "Research",
                color: "from-indigo-400 to-blue-600"
              },
              {
                icon: "💡",
                title: "Ready to receive a new award in future journey",
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} bg-opacity-20 text-white text-xs rounded-full font-medium`}>
                    {achievement.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-blue-400 font-semibold text-sm mb-2">
                  {achievement.event}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gray-700/50 px-3 py-1 rounded-full text-gray-300 text-xs">
                    {achievement.year}
                  </span>
                  <div className={`w-3 h-3 bg-gradient-to-r ${achievement.color} rounded-full`}></div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-sm">Total Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <div className="text-gray-400 text-sm">Certification</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">Academic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
              <div className="text-gray-400 text-sm">Scholarship</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Have a project in mind? I'd love to hear about it.
          </p>
          <button
            onClick={() => window.open('https://wa.me/6285817359604', '_blank')}
            className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl mb-10"
          >
            Start a Conversation
          </button>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-10">Connect with me</h3>

            <div className="grid grid-cols-4 md:grid-cols-4 gap-6">
              <a
                href="mailto:lindasantika75@email.com"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-red-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-red-400 mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                <p className="text-gray-400 text-xs">lindasantika75@email.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/lindasantika75/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">LinkedIn</h4>
                <p className="text-gray-400 text-xs">Linda Santika</p>
              </a>
              <a
                href="https://github.com/lindasantika08"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-gray-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-gray-400 mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">GitHub</h4>
                <p className="text-gray-400 text-xs">lindasantika08</p>
              </a>
              <a
                href="https://www.instagram.com/lndsntka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-pink-400 mb-3 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                  <h4 className="text-white font-semibold text-sm mb-1">Instagram</h4>
                  <p className="text-gray-400 text-xs">@lndsntka</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Linda Santika. All rights reserved.
        </div>
      </section>

    </div>
  )
}
