import React, { useEffect, useRef, useState } from 'react'

// Desktop images
import galeria1 from '../assets/images/galeria-1.svg'
import galeria2 from '../assets/images/galeria-2.svg'
import galeria3 from '../assets/images/galeria-3.svg'
import galeria4 from '../assets/images/galeria-4.svg'
import galeria5 from '../assets/images/galeria-5.svg'
import galeria6 from '../assets/images/galeria-6.svg'
import galeria7 from '../assets/images/galeria-7.svg'

// Mobile images
import mobile1 from '../assets/images/mobile-1.svg'
import mobile2 from '../assets/images/mobile-2.svg'
import mobile3 from '../assets/images/mobile-3.svg'
import mobile4 from '../assets/images/mobile-4.svg'

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4">
      <div className="max-w-[1050px] mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl font-bold text-white mb-6">Gallery</h2>
          <p className="text-gray-300 text-lg max-w-[600px] mx-auto">
            We focus on ergonomics and meeting you where you work. It's only a keystroke away.
          </p>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden md:block mb-10">
          
          {/* Primeira linha - 4 imagens (todas 225x285) */}
          <div className="flex gap-2 mb-2 justify-center">
            <img 
              src={galeria1} 
              alt="Gallery 1"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '0ms' }}
            />
            
            <img 
              src={galeria2} 
              alt="Gallery 2"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '100ms' }}
            />
            
            <img 
              src={galeria3} 
              alt="Gallery 3"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '200ms' }}
            />
            
            <img 
              src={galeria4} 
              alt="Gallery 4"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '300ms' }}
            />
          </div>

          {/* Segunda linha - 3 imagens (todas 225x285) */}
          <div className="flex gap-2 justify-center">
            <img 
              src={galeria5} 
              alt="Gallery 5"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '400ms' }}
            />
            
            <img 
              src={galeria6} 
              alt="Gallery 6"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '500ms' }}
            />
            
            <img 
              src={galeria7} 
              alt="Gallery 7"
              className={`w-[225px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '600ms' }}
            />
          </div>

        </div>

        {/* Mobile Gallery */}
        <div className="md:hidden flex flex-col gap-3 mb-10 items-center">
          <img 
            src={mobile1} 
            alt="Mobile 1"
            className={`w-full max-w-[329px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '0ms' }}
          />
          
          <img 
            src={mobile2} 
            alt="Mobile 2"
            className={`w-full max-w-[329px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '150ms' }}
          />
          
          <img 
            src={mobile3} 
            alt="Mobile 3"
            className={`w-full max-w-[329px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '300ms' }}
          />
          
          <img 
            src={mobile4} 
            alt="Mobile 4"
            className={`w-full max-w-[329px] h-[285px] rounded-2xl object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '450ms' }}
          />
        </div>

        {/* Button See More */}
        <div className={`text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
          <button className="px-10 py-4 border-2 border-white/30 text-white rounded-lg hover:border-[#2DC071] hover:text-[#2DC071] transition-all duration-300 text-base font-semibold">
            See more
          </button>
        </div>

      </div>
    </section>
  )
}

export default Gallery
