import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import fe from '../asset/dashboardfe.png'
import sps from '../asset/spss.png'
import mobile from '../asset/mobile.png'
import booking from '../asset/booking.png'
import supperapps from '../asset/supperapps.png'
import kabarnikah from '../asset/kabarnikah.png'
import bpsdm from '../asset/bpsdm.png'
import smk from '../asset/smk.png'
import pc from '../asset/100pc.png'
import promotion from '../asset/promotion.png'
import habit from '../asset/habit.png'

export const Route = createFileRoute('/portofolio')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const portfolioData = [
    {
      id: 1,
      title: "Self and Peer Assessment Web App",
      category: "web",
      description: "A web application for conducting self and peer assessments with suggest score from Simplefied Lesk Algorithm, giving feedback, and transparant scoring system.",
      image: sps,
      technologies: ["Vue.js", "PHP", "MySQL", "Python", "Flask", "Natural Language Processing", "Simplified Lesk Algorithm", "Inertia", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/lindasantika08/TA_KoTa201.git",
      featured: true
    },
    {
      id: 2,
      title: "Sentiment Analysis Web App",
      category: "web",
      description: "Dashboard for sentiment analysis using Vue, TypeScript, Tailwind CSS, Chart.js and Pinia for state management data from respons API.",
      image: fe,
      technologies: ["Vue.js", "TypeScript", "Pinia", "Tailwind CSS", "Chart.js", "Html", "CSS" ],
      liveUrl: "https://sentiment-analysis-jade-nine.vercel.app/",
      githubUrl: "https://github.com/lindasantika08/sentiment-analysis.git",
      featured: false
    },
    {
      id: 3,
      title: "Hotel Booking Reservation System",
      category: "mobile",
      description: "Mobile app for booking and managing hotel reservations with user authentication based role (user and admin). Using flutter for front-end and Laravel for back-end.",
      image: mobile,
      technologies: ["Dart", "PHP", "MySQL", "Flutter", "Laravel", "REST API", "Provider", "Taiga", "GitHub", "Figma"],
      liveUrl: "https://youtu.be/Jwcpg3G-cyI?si=S1sXI3CAnGbcRaOU",
      githubUrl: "https://github.com/afyar08/proyek4_hotel.git",
      featured: true
    },
    {
      id: 4,
      title: "Booking Room Web App",
      category: "web",
      description: "A web application for booking rooms with real-time availability, user authentication, and admin management features.",
      image: booking,
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/lindasantika08/booking-room-test.git",
      featured: false
    },
    {
      id: 5,
      title: "Microservice BPSDM Jabar",
      category: "web",
      description: "A microservice-based for automating certification processes, enhancing efficiency and accuracy in managing certifications and data with MinIO.",
      image: bpsdm,
      technologies: ["Laravel Lumen", "PHP", "MinIO", "Postman", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Supperapps Platform",
      category: "web",
      description: "A platform integrating multiple services into a single web application from three commodity systems gold, nickel and bauxite PT. Antam.",
      image: supperapps,
      technologies: ["PHP", "Vue.js", "MySQL", "Laravel", "Inertia", "JavaScript", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "KabarNikah.com",
      category: "web",
      description: "A wedding invitation web application that allows users to create and customize their own digital wedding invitations with RSVP functionality.",
      image: kabarnikah,
      technologies: ["PHP", "CodeIgneter", "MySQL", "Html", "Bootstrap", "Css"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "Simulation of 4 Buildings with 100 PCs",
      category: "network",
      description: "A network simulation project using Cisco Packet Tracer to design and implement a network for 4 buildings, each with 25 PCs, including Web Server and Proxy Configuration.",
      image: pc,
      technologies: ["Cisco Packet Tracer", "Networking", "Subnetting", "VLAN", "Routing Protocols"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 9,
      title: "Simulation of Network in building",
      category: "network",
      description: "A network simulation project using Cisco Packet Tracer to design and implement a network for a school building with 50 PCs, including Web Server and Proxy Configuration.",
      image: smk,
      technologies: ["Cisco Packet Tracer", "Networking", "Subnetting", "VLAN", "Routing Protocols", "DHCP", "DNS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 10,
      title: "Video Promotion SMKN 1 Cibeber",
      category: "another",
      description: "A promotional video project for SMKN 1 Cibeber showcasing the school's facilities, programs, and achievements to attract prospective students.",
      image: promotion,
      technologies: ["Video Editing", "Capcut", "Voice Editing", "Cinematography"],
      liveUrl: "https://youtu.be/qfNva25KhFo?si=ynR_s-8isdfNOcAJ",
      githubUrl: "#",
      featured: false
    },
    {
      id: 11,
      title: "Learning Habits Amid the Pandemic",
      category: "another",
      description: "A video project highlighting effective learning habits and strategies for students to adapt to the challenges of remote learning during the pandemic.",
      image: habit,
      technologies: ["Video Editing", "Capcut", "Voice Editing", "Cinematography"],
      liveUrl: "https://youtu.be/0vcpBbyYbVE?si=LngGiJckXajZ_G6f",
      githubUrl: "#",
      featured: false
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: portfolioData.length },
    { id: 'web', name: 'Web Apps', count: portfolioData.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: portfolioData.filter(p => p.category === 'mobile').length },
    { id: 'iot', name: 'IoT Projects', count: portfolioData.filter(p => p.category === 'iot').length },
    { id: 'network', name: 'Network Projects', count: portfolioData.filter(p => p.category === 'network').length },
    { id: 'another', name: 'Another', count: portfolioData.filter(p => p.category === 'another').length },
  ]

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData
    : portfolioData.filter(project => project.category === selectedCategory)

  const featuredProjects = portfolioData.filter(project => project.featured)

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950'>
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            My{' '}
            <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
              Portfolio
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web development,
            mobile applications, and innovative solutions.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">{portfolioData.length}</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">{featuredProjects.length}</div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">{categories.length - 1}</div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
              >
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory === 'all' && (
        <section className="px-4 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map(project => (
                <div
                  key={project.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-medium rounded-full">
                        ⭐ Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 font-medium"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 px-4 py-2 border border-gray-400 text-gray-300 text-center rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 font-medium"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {selectedCategory === 'all' ? 'All Projects' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center rounded text-xs hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 px-3 py-2 border border-gray-500 text-gray-300 text-center rounded text-xs hover:bg-gray-700 transition-all duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}