import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 px-4 bg-dark-800/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                OpenType features
                <br />
                and Variable fonts
              </h2>
              <button className="px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all transform hover:scale-105">
                Try For Free
              </button>
            </div>

            {/* Right Side - Feature Preview */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <h3 className="text-dark-900 font-bold text-lg">Slate</h3>
                  <span className="px-3 py-1 bg-primary-blue text-white text-sm rounded-full">
                    SEND
                  </span>
                </div>

                {/* Typography Preview */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-dark-900 font-semibold mb-2">
                      Ligatures font positioning
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Advanced typography features for professional design work.
                    </p>
                  </div>

                  {/* Visual Elements */}
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <div className="aspect-square bg-gradient-to-br from-primary-blue to-primary-pink rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-primary-pink to-yellow-400 rounded-lg"></div>
                    <div className="aspect-square bg-gradient-to-br from-yellow-400 to-green-400 rounded-lg"></div>
                  </div>

                  {/* Sample Text */}
                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
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

export default CTA
