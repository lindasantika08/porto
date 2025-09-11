import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const downloadCV = () => {
    const cvPath = '../cv.pdf'
    
    const link = document.createElement('a')
    link.href = cvPath
    link.download = 'CV_Linda_Santika.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // useEffect(() => {
  //   downloadCV()
  // }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Download My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">CV</span>
        </h1>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Get the latest version of my curriculum vitae with all my professional experience, skills, and achievements.
        </p>
        <button
          onClick={downloadCV}
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </button>

        <div className="mt-8 text-sm text-gray-400">
          <p>📄 PDF Format • 🔄 Updated Monthly</p>
          <p className="mt-2">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  )
}