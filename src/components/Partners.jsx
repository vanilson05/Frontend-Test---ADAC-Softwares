import React, { useEffect, useRef, useState } from 'react'

// Partner icons
import icon1 from '../assets/images/icons1-Partners.svg'
import icon2 from '../assets/images/icons2-Partners.svg'
import icon3 from '../assets/images/icons3-Partners.svg'
import icon4 from '../assets/images/icons4-Parthers.svg'
import icon5 from '../assets/images/icons5-Parthers.svg'
import icon6 from '../assets/images/icons6-Parthers.svg'

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIcon, setActiveIcon] = useState(0)
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

  // Animação sequencial dos ícones
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 6)
    }, 800) // Troca a cada 800ms

    return () => clearInterval(interval)
  }, [isVisible])

  const partners = [icon1, icon2, icon3, icon4, icon5, icon6]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 bg-dark-800/30">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Partners</h2>
          <p className="text-gray-400 text-lg">
            We focus on ergonomics and meeting you where you work.
            <br />
            It's only a keystroke away.
          </p>
        </div>

        {/* Desktop Partners - 6 icons em linha */}
        <div className="hidden md:flex justify-center items-center mb-12">
          <div 
            className={`flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ 
              width: '831.97px',
              height: '70.55px',
              gap: '74px'
            }}
          >
            {partners.map((icon, index) => (
              <div 
                key={index}
                className="transition-all duration-500"
                style={{ 
                  height: '70.55px',
                  display: 'flex',
                  alignItems: 'center',
                  transform: activeIcon === index ? 'scale(1.2)' : 'scale(1)',
                  opacity: activeIcon === index ? 1 : 0.6,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <img 
                  src={icon} 
                  alt={`Partner ${index + 1}`}
                  style={{ 
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: activeIcon === index ? 'brightness(1.2)' : 'brightness(1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Partners - 2 linhas (3 + 3) */}
        <div className="md:hidden flex flex-col items-center mb-12" style={{ gap: '50px' }}>
          
          {/* Linha 1 - 3 icons */}
          <div 
            className={`flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ 
              width: '286px',
              height: '70.55px',
              gap: '50px',
              justifyContent: 'center'
            }}
          >
            {partners.slice(0, 3).map((icon, index) => (
              <div 
                key={index}
                className="transition-all duration-500"
                style={{ 
                  height: '70.55px',
                  display: 'flex',
                  alignItems: 'center',
                  transform: activeIcon === index ? 'scale(1.2)' : 'scale(1)',
                  opacity: activeIcon === index ? 1 : 0.6
                }}
              >
                <img 
                  src={icon} 
                  alt={`Partner ${index + 1}`}
                  style={{ 
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: activeIcon === index ? 'brightness(1.2)' : 'brightness(1)'
                  }}
                />
              </div>
            ))}
          </div>

          {/* Linha 2 - 3 icons */}
          <div 
            className={`flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ 
              width: '286px',
              height: '70.55px',
              gap: '50px',
              justifyContent: 'center',
              transitionDelay: '200ms'
            }}
          >
            {partners.slice(3, 6).map((icon, index) => (
              <div 
                key={index}
                className="transition-all duration-500"
                style={{ 
                  height: '70.55px',
                  display: 'flex',
                  alignItems: 'center',
                  transform: activeIcon === (index + 3) ? 'scale(1.2)' : 'scale(1)',
                  opacity: activeIcon === (index + 3) ? 1 : 0.6
                }}
              >
                <img 
                  src={icon} 
                  alt={`Partner ${index + 4}`}
                  style={{ 
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: activeIcon === (index + 3) ? 'brightness(1.2)' : 'brightness(1)'
                  }}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Try For Free Button */}
        <div className={`text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <button className="px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all duration-300 hover:transform hover:scale-105">
            Try For Free
          </button>
        </div>

      </div>
    </section>
  )
}

export default Partners