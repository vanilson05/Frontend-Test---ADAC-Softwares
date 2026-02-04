import React, { useState, useEffect, useRef } from 'react'
import heroImageDesktop from '../assets/images/background-hero.svg'
import heroImageMobile from '../assets/images/screens.svg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Main Heading - Animação de chegada */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Work at the speed
            <br />
            of thought
          </h1>

          {/* Subtitle - Animação de chegada */}
          <p 
            className={`text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>

          {/* CTA Buttons - Animação de chegada */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button className="px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all transform hover:scale-105">
              Try For Free
            </button>
            <button className="px-8 py-3 border border-white/20 hover:border-primary-blue hover:text-primary-blue rounded transition-all">
              Learn More
            </button>
          </div>

        </div>

        {/* Hero Images - Desktop e Mobile */}
        <div className="pt-12 lg:pt-20">
          <div className="relative mx-auto max-w-7xl">
            
            {/* Imagem Desktop */}
            <img
              src={heroImageDesktop}
              alt="Dashboard preview"
              className="w-full hidden md:block"
            />

            {/* Imagem Mobile */}
            <img
              src={heroImageMobile}
              alt="Dashboard preview mobile"
              className="w-full md:hidden"
            />

            {/* Gradiente MAIS FRACO e MENOR */}
            <div
              className="absolute left-1/2 bottom-0 -translate-x-1/2"
              style={{
                width: '100vw',
                height: '300px', // REDUZIDO de 551px para 300px
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(14,14,14,0.6) 100%)', // Opacity REDUZIDA de 1 para 0.6
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