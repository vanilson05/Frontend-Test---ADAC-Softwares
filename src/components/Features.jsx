import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '💡',
      title: 'A single source of truth',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights'
    },
    {
      icon: '🎯',
      title: 'Intuitive interface',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights'
    },
    {
      icon: '📊',
      title: 'Or with rules',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights'
    }
  ]

  return (
    <section className="py-20 lg:py-32 px-4 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            FEATURES
          </h2>
          <p className="text-gray-400 text-lg">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-dark-800/50 rounded-lg border border-white/5 hover:border-primary-blue/50 transition-all hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Showcase with Dashboard Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Dashboard Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-dark-800/50 rounded-lg p-4 border border-white/5">
                {/* Simulated dashboard UI */}
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-dark-900/50 rounded">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="flex-1 h-4 bg-white/10 rounded"></div>
                      <div className="w-16 h-4 bg-primary-blue/30 rounded"></div>
                    </div>
                  ))}
                </div>
                {/* Chart section */}
                <div className="mt-6 p-4 bg-dark-900/50 rounded">
                  <div className="h-32 flex items-end gap-2">
                    {[40, 70, 50, 80, 60, 90, 75].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary-blue to-primary-pink rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">A single source of truth</h3>
                <p className="text-gray-400">
                  When you add work to your Slate calendar we automatically calculate useful insights
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Intuitive interface</h3>
                <p className="text-gray-400">
                  When you add work to your Slate calendar we automatically calculate useful insights
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Or with rules</h3>
                <p className="text-gray-400">
                  When you add work to your Slate calendar we automatically calculate useful insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
