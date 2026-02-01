import React from 'react'
import heroImage from '../assets/images/background-hero.svg'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32 overflow-hidden">

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

        </div>
        {/* Hero Image separada do texto */}
        <div className="pt-12 lg:pt-20">
          <div className="relative mx-auto max-w-7xl">
            <img
              src={heroImage}
              alt="Dashboard preview"
              className="w-full"
            />
            {/* Gradiente escuro apenas sobre a imagem */}
            <div
              className="absolute left-1/2 bottom-0 -translate-x-1/2"
              style={{
                width: '100vw',
                height: '551px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(14,14,14,1) 100%)',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: 10,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
