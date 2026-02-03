import React, { useEffect, useRef, useState } from 'react'
import featuresImage from '../assets/images/FEATURES.svg'
import chartImage from '../assets/images/line-chart.jpg'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false) // Reset quando sair da tela
          }
        })
      },
      {
        threshold: 0.2, // Ativa quando 20% do elemento está visível
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 12L16 20M12 16L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'A single source\nof truth',
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
      title: 'Intuitive\ninterface',
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
      title: 'Or with\nrules',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights',
      color: 'text-blue-400'
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
          {/* Width: 1088px, Height: 759px, Gap: 27px */}
          <div 
            className="grid lg:grid-cols-[1fr_auto] items-center mx-auto"
            style={{ 
              maxWidth: '1088px',
              gap: '27px'
            }}
          >
            
            {/* Left Side: Images */}
            <div className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              {/* Large Feature Image */}
              <div className="relative">
                <img 
                  src={featuresImage} 
                  alt="Features Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Small Chart Image - Positioned on bottom right corner (desktop) and centered (mobile) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-2/3 lg:w-1/2 transform translate-y-8 lg:translate-y-12">
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

            {/* Right Side: Feature List - Compact */}
            <div className={`space-y-6 mt-20 lg:mt-0 lg:max-w-xs transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-800 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
                  }}
                >
                  <div className={`${feature.color} flex-shrink-0 mt-1`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 leading-tight whitespace-pre-line">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
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