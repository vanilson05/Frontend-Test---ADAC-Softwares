import React from 'react'

const Contents = () => {
  return (
    <section className="py-20 lg:py-32 px-4 bg-dark-800/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contents
          </h2>
          <p className="text-gray-400 text-lg">
            We focus on ergonomics and meeting you where you work. 
            It's only a keystroke away.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Work */}
          <div className="bg-white text-dark-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Work</h3>
              <p className="text-gray-700 mb-6">
                Ever wondered if you're too reliant on a client for work? Slate helps you identify.
              </p>
              <button className="px-6 py-3 bg-primary-blue text-white rounded hover:bg-primary-blue/90 transition-colors">
                Sign Up
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              {/* Simulated calendar/board view */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-4 pb-2 border-b">
                  <span className="text-sm font-semibold">Board</span>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="p-2 bg-gray-50 rounded text-xs">
                      Task {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Design with real data */}
          <div className="bg-white text-dark-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Design with real data</h3>
              <p className="text-gray-700 mb-6">
                Ever wondered if you're too reliant on a client for work? Slate helps you identify.
              </p>
              <button className="px-6 py-3 bg-primary-blue text-white rounded hover:bg-primary-blue/90 transition-colors">
                Try For Free
              </button>
            </div>
            <div className="p-4 bg-gray-50">
              {/* Simulated data dashboard */}
              <div className="bg-dark-900 rounded-lg shadow-sm p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-white text-xs">Connected</span>
                    </div>
                    <span className="text-gray-400 text-xs">99%</span>
                  </div>
                  <div className="flex gap-1 h-20">
                    {[40, 70, 50, 80, 60].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary-blue rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contents
