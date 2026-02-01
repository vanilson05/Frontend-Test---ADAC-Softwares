import React from 'react'
import heroImage from '../assets/images/Desktop_HEADER_05.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-pink/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            Work at the speed
            <br />
            of thought
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all transform hover:scale-105">
              Try For Free
            </button>
            <button className="px-8 py-3 border border-white/20 hover:border-primary-blue hover:text-primary-blue rounded transition-all">
              Learn More
            </button>
          </div>

          {/* Hero Image */}
          <div className="pt-12 lg:pt-20">
            <div className="relative mx-auto max-w-5xl">
              <img
                src={heroImage}
                alt="Dashboard preview"
                className="w-full h-auto transform perspective-1000 rotate-x-12"
                style={{
                  transform: 'perspective(1000px) rotateX(10deg)',
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                }}
              />
              
              {/* Glow effect under image */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary-blue/30 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
