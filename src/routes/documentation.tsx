import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  certificates,
  getCategories,
  getCertificatesByCategory,
  getRecentCertificates,
  type Certificate
} from '../data/documentation'

export const Route = createFileRoute('/documentation')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const categories = getCategories()
  const filteredCertificates = getCertificatesByCategory(selectedCategory)
  const recentCertificates = getRecentCertificates('2025')

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950'>
      <section className='pt-32 pb-20 px-4'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 leading-tight'>
            <span className='bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent'>
              Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of my documentation and archive
          </p>
        </div>
      </section>

      <section className="px-4 py-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
                  }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map(cert => (
              <div
                key={cert.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} rounded-full text-white text-xs font-medium shadow-lg`}>
                      {cert.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-16 h-1 bg-gradient-to-r ${cert.color} rounded-full`}></div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="bg-gray-700/50 px-3 py-1 rounded-full text-gray-300 text-xs">
                      {cert.date}
                    </span>
                    <div className="flex items-center text-blue-400 text-xs font-medium group-hover:text-blue-300 transition-colors">
                      <span className="mr-2">View Document</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📜</div>
              <h3 className="text-xl font-semibold text-white mb-2">No certificates found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-12 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Documentation Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {certificates.length}
              </div>
              <div className="text-gray-400 text-sm">Total Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {recentCertificates.length}
              </div>
              <div className="text-gray-400 text-sm">Recent (2025)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold text-white">Certificate Details</h2>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${selectedCertificate.color} bg-opacity-20 text-white text-sm rounded-full mb-4`}>
                      {selectedCertificate.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg mb-4">
                      {selectedCertificate.issuer}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Issue Date:</span>
                      <span className="text-white font-semibold">{selectedCertificate.date}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Category:</span>
                      <span className="text-white font-semibold capitalize">{selectedCertificate.category.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Status:</span>
                      <span className="flex items-center text-green-400 font-semibold">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedCertificate.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}