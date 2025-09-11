import { createFileRoute } from '@tanstack/react-router'
import foto from '../asset/profile.png'
import fam from '../asset/fam.png'
import int from '../asset/movie/int.jpg'
import end from '../asset/movie/end.jpg'
import coco from '../asset/movie/coco.jpg'
import mby from '../asset/movie/mbu.jpg'
import the from '../asset/movie/tcjr.jpg'
import ex from '../asset/kdrama/ex.jpg'
import home from '../asset/kdrama/home.jpg'
import mv from '../asset/kdrama/mv.jpg'
import rpy from '../asset/kdrama/rpy.jpg'
import you from '../asset/kdrama/you.jpg'
import arieti from '../asset/anime/arieti.jpg'
import haikyuu from '../asset/anime/haikyuu.jpg'
import howl from '../asset/anime/howl.jpg'
import ju from '../asset/anime/ju.jpg'
import topeng from '../asset/anime/topeng.jpg'

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate)
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    return age
  }

  const age = calculateAge('2004-11-08')
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950'>
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img
                  src={foto}
                  alt="Linda Santika Profile"
                  className="w-96 h-96 mx-auto md:mx-0 rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30 animate-bounce"></div>
              </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {' '}
                <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
                  Linda Santika
                </span>
              </h1>
              <div className="space-y-4 text-lg text-gray-300">
                <p className="text-2xl text-blue-300 font-semibold">
                  Linda • Midun • Dun • Lin • Nut
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-blue-400 font-semibold">Age:</span>
                      <p className="text-white">{age} Years Old</p>
                    </div>
                    <div>
                      <span className="text-blue-400 font-semibold">Born:</span>
                      <p className="text-white">Lebak, 8 November 2004</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Get to Know Me Better
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Basic Info</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Full Name:</span>
                  <span className="text-white font-medium">Linda Santika</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Age:</span>
                  <span className="text-white font-medium">{age} Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Height:</span>
                  <span className="text-white font-medium">153 cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weight:</span>
                  <span className="text-white font-medium">55 kg</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Birth Details</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Birth Date:</span>
                  <span className="text-white font-medium">8 November 2004</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Birth Place:</span>
                  <span className="text-white font-medium">Lebak, Banten</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Zodiac:</span>
                  <span className="text-white font-medium">♏ Scorpio</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nationality:</span>
                  <span className="text-white font-medium">Indonesian</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Current Status</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white font-medium">Bandung, West Java</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-medium">Fresh Graduate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Available:</span>
                  <span className="text-green-400 font-medium">For Work</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-white font-medium">3+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            My Family
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <img
                  src={fam}
                  alt="Linda's Family"
                  className="w-full h-80 rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-30 animate-bounce"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Family Members
                  </span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👨</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Father</h4>
                      <p className="text-gray-300 text-sm">My role model and biggest supporter</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👩</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Mother</h4>
                      <p className="text-gray-300 text-sm">Always encouraging and caring</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👦🏻</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Little Brother</h4>
                      <p className="text-gray-300 text-sm">My best friends and partners in crime</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">👧🏻</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Little Sister</h4>
                      <p className="text-gray-300 text-sm">Sweet little sis</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                  <p className="text-gray-300 text-center italic">
                    "Family is not an important thing, it's everything. They are my source of strength and motivation to keep growing."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            My Hobbies & Interests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🍳",
                title: "Cooking",
                description: "Experimenting with new recipes and cuisines",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "📚",
                title: "Reading",
                description: "Enjoy reading tech blogs, documentation, and historical comics",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🎵",
                title: "Music",
                description: "Listening to pop, jazz, and lo-fi beats while relaxing",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "🏃‍♀️",
                title: "Sports",
                description: "Staying active with jogging and light exercise",
                color: "from-pink-500 to-purple-500"
              },
              {
                icon: "📷",
                title: "Taking Photos",
                description: "Capturing moments and nature photography",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "🌱",
                title: "Learning",
                description: "Always curious about new things, especially in tech",
                color: "from-yellow-500 to-green-500"
              },
              {
                icon: "🏄🏻‍♀",
                title: "Play to the Beach",
                description: "Relaxing by the sea and enjoying the waves",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: "🍢",
                title: "Foodie",
                description: "Exploring different foods and street cuisines",
                color: "from-amber-600 to-orange-600"
              }
            ].map((hobby, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {hobby.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-r ${hobby.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            My Favorites
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Movies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Avengers: Endgame", poster: end },
                { title: "Coco", poster: coco },
                { title: "Interstellar", poster: int },
                { title: "The Conjuring", poster: the },
                { title: "Me Before You", poster: mby }
              ].map((movie, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-medium text-sm text-center leading-tight">
                      {movie.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">K-Drama</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Reply 1988", poster: rpy },
                { title: "Hometown Cha Cha", poster: home },
                { title: "Exhuma", poster: ex },
                { title: "Tune in For Love", poster: mv },
                { title: "Extraordinary You", poster: you }
              ].map((drama, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={drama.poster}
                      alt={drama.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-medium text-sm text-center leading-tight">
                      {drama.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Anime</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { title: "Jujutsu Kaisen", poster: ju },
                { title: "Haikyuu!!", poster: haikyuu },
                { title: "Howl's Moving Castle", poster: howl },
                { title: "The Secret World of Arrietty", poster: arieti },
                { title: "Hotarubi no Mori e", poster: topeng }
              ].map((anime, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={anime.poster}
                      alt={anime.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-medium text-sm text-center leading-tight">
                      {anime.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Favorite Foods</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "All Sundanese Food",
                  "Semur Kambing",
                  "Cumi Bumbu Hitam",
                  "Ikan Marlin Bumbu Kuning",
                  "Mie Ayam Bakso",
                  "Rendang"
                ].map((food, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                    <span className="text-white font-medium">{food}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Fun Facts About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">🎯 Personality</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Adapting quickly to new technologies and changes</p>
                <p>• Managing time effectively and meeting deadlines</p>
                <p>• Collaborating with teams and sharing knowledge</p>
                <p>• Solving problems with creative and efficient solutions</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">⚡ Work Style</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Working independently and taking initiative</p>
                <p>• Iterating fast and embracing agile practices</p>
                <p>• Collaborating remotely with modern tools</p>
                <p>• Staying most productive at night</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">🚀 Goals</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Become a senior full-stack developer</p>
                <p>• Master cloud technologies</p>
                <p>• Contribute to open source projects</p>
                <p>• Mentor junior developers</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold text-white mb-4">💫 Random Facts</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Linking coding errors to mood and fixing mood first</p>
                <p>• Avoiding snacks while coding to stay fully focused</p>
                <p>• Skipping coffee while coding to avoid shaky hands (aka aslam mode wkwk)</p>
                <p>• Dream workspace: minimalist with plants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}