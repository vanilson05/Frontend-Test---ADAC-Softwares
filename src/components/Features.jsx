import React from 'react'
import featuresImage from '../assets/images/FEATURES.svg'
import chartImage from '../assets/images/line-chart.jpg'

const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 12L16 20M12 16L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'A single source of truth',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights',
      color: 'text-cyan-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16L16 20L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Intuitive interface',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights',
      color: 'text-green-400'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 14C22 14 19 17 16 17C13 17 10 14 10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Or with rules',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights',
      color: 'text-blue-400'
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

        {/* Main Features Layout */}
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop: Grid com 2 colunas | Mobile: Stack vertical */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Images */}
            <div className="relative">
              {/* Large Feature Image */}
              <div className="relative">
                <img 
                  src={featuresImage} 
                  alt="Features Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Small Chart Image - Positioned on bottom right corner */}
                <div className="absolute bottom-0 right-0 w-2/3 lg:w-3/5 transform translate-y-8 lg:translate-y-12">
                  <img 
                    src={chartImage} 
                    alt="Analytics Chart" 
                    className="w-full h-auto rounded-lg shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Feature List */}
            <div className="space-y-10 mt-20 lg:mt-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className={`${feature.color} flex-shrink-0 mt-1`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Features