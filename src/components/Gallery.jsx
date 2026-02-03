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
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.1,
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

  // Desktop gallery images (7 images)
  const desktopGallery = [
    // Top row - 4 images (225x285 each)
    { id: 1, src: galeria1, size: 'small' },
    { id: 2, src: galeria2, size: 'small' },
    { id: 3, src: galeria3, size: 'small' },
    { id: 4, src: galeria4, size: 'small' },
    // Bottom row - 3 images (sides: large, middle: small)
    { id: 5, src: galeria5, size: 'large' },
    { id: 6, src: galeria6, size: 'small' },
    { id: 7, src: galeria7, size: 'large' },
  ]

  // Mobile gallery images (4 images)
  const mobileGallery = [
    { id: 1, src: mobile1 },
    { id: 2, src: mobile2 },
    { id: 3, src: mobile3 },
    { id: 4, src: mobile4 },
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Gallery
          </h2>
          <p className="text-gray-400 text-lg">
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>
        </div>

        {/* Desktop Gallery - Hidden on mobile */}
        <div className="hidden md:block mx-auto mb-12" style={{ maxWidth: '1087px' }}>
          {/* Top Row - 4 images (999px total width, gap: 33px) */}
          <div 
            className="flex justify-center mb-8"
            style={{ 
              width: '999px',
              height: '285px',
              gap: '33px',
              margin: '0 auto'
            }}
          >
            {desktopGallery.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                className={`overflow-hidden transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  width: '225px',
                  height: '285px',
                  borderRadius: '8px',
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                }}
              >
                <img
                  src={item.src}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 images (1087px total width, gap: 33px) */}
          {/* Left: large (407px), Middle: small (225px), Right: large (407px) */}
          <div 
            className="flex justify-center"
            style={{ 
              width: '1087px',
              height: '285px',
              gap: '33px',
              margin: '0 auto'
            }}
          >
            {desktopGallery.slice(4).map((item, index) => {
              // Calculate width: (1087 - 225 - 33*2) / 2 = 398px per large image
              // But to match exactly: (1087 - 2*33) = 1021 total for images
              // Small = 225, so (1021 - 225) / 2 = 398px for each large
              const width = item.size === 'large' ? '398px' : '225px'
              
              return (
                <div
                  key={item.id}
                  className={`overflow-hidden transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    width: width,
                    height: '285px',
                    borderRadius: '8px',
                    transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms'
                  }}
                >
                  <img
                    src={item.src}
                    alt={`Gallery ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Gallery - Hidden on desktop */}
        <div className="md:hidden max-w-md mx-auto mb-12 space-y-6">
          {mobileGallery.map((item, index) => (
            <div
              key={item.id}
              className={`overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{
                width: '329px',
                height: '285px',
                borderRadius: '8px',
                margin: '0 auto',
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <img
                src={item.src}
                alt={`Mobile Gallery ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className={`text-center transition-all duration-800 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="px-8 py-3 border border-white/20 hover:border-primary-blue hover:text-primary-blue rounded transition-all duration-300 hover:transform hover:scale-105">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery