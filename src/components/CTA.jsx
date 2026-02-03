import React, { useEffect, useRef, useState } from 'react'
import lineChart from '../assets/images/line1.svg'

const CTA = () => {
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
      <div className="container mx-auto">
        
        {/* Desktop Card - Horizontal */}
        <div 
          className={`hidden md:flex items-center justify-between bg-dark-700 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            width: '1219px',
            height: '370px',
            maxWidth: '100%',
            margin: '0 auto',
            borderRadius: '33px',
            padding: '0',
            overflow: 'hidden'
          }}
        >
          {/* Conteúdo Texto (Esquerda) */}
          <div style={{ flex: '1', padding: '60px 0 60px 80px' }}>
            <h2 
              className={`text-4xl lg:text-5xl font-bold mb-8 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ 
                lineHeight: '1.2',
                transitionDelay: '200ms'
              }}
            >
              OpenType feature
              <br />
              and Variable fonts
            </h2>
            
            <button 
              className={`px-10 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all duration-300 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ 
                fontSize: '18px',
                fontWeight: '500',
                transitionDelay: '400ms'
              }}
            >
              Try For Free
            </button>
          </div>

          {/* Imagem (Direita) */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ 
              width: '50%',
              height: '100%',
              transitionDelay: '300ms'
            }}
          >
            <img 
              src={lineChart} 
              alt="Line Chart" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0 33px 33px 0'
              }}
            />
          </div>
        </div>

        {/* Mobile Card - Vertical */}
        <div 
          className={`md:hidden flex flex-col bg-dark-700 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
            borderRadius: '33px',
            overflow: 'hidden'
          }}
        >
          {/* Conteúdo Texto (Topo) */}
          <div style={{ padding: '40px 30px' }}>
            <h2 
              className={`text-3xl font-bold mb-6 text-center transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
              }`}
              style={{ 
                lineHeight: '1.2',
                transitionDelay: '200ms'
              }}
            >
              OpenType features and Variable fonts
            </h2>
            
            <div className="text-center">
              <button 
                className={`px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all duration-300 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
                }`}
                style={{ 
                  fontSize: '16px',
                  fontWeight: '500',
                  transitionDelay: '400ms'
                }}
              >
                Try For Free
              </button>
            </div>
          </div>

          {/* Imagem (Embaixo) */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              width: '100%',
              height: '300px',
              transitionDelay: '300ms'
            }}
          >
            <img 
              src={lineChart} 
              alt="Line Chart" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '0 0 33px 33px'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default CTA