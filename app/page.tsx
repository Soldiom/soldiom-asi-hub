import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SOLDIOM <span className="text-yellow-300">ASI</span> Hub
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Enterprise AI Platform - All your AI tools in one place
            </p>
            <p className="text-lg text-blue-50 mb-12 max-w-2xl mx-auto">
              Powered by Gemini 3 Pro • Voice • Images • Video • Maps • Business Intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools" className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
                Explore Tools
              </Link>
              <Link href="/pricing" className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Powerful AI Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'ASI Chat',
              description: 'Multimodal conversations with text, images, and voice',
              icon: '💬'
            },
            {
              title: 'Voice Studio',
              description: 'Record, transcribe, summarize, and regenerate speech',
              icon: '🎙️'
            },
            {
              title: 'Image & Video Lab',
              description: 'Generate, analyze, and explain visual content',
              icon: '🎨'
            },
            {
              title: 'Search & Maps',
              description: 'Real-time grounded answers with location data',
              icon: '🗺️'
            },
            {
              title: 'Business Copilot',
              description: 'Planning, logistics, and entrepreneurship assistance',
              icon: '📊'
            },
            {
              title: 'Code Assistant',
              description: 'Development support with multiple languages',
              icon: '💻'
            }
          ].map((tool, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{tool.title}</h3>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience the future of AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with our free tier. Upgrade anytime for more power.
          </p>
          <Link href="/tools" className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
            Get Started Free
          </Link>
        </div>
      </div>
    </main>
  )
}
