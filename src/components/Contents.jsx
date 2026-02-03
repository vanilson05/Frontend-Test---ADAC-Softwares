import React, { useEffect, useRef, useState } from 'react'
import contentImg1 from '../assets/images/content-img1.svg'
import contentImg2 from '../assets/images/content-img2.svg'

const Contents = () => {
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
        threshold: 0.2,
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

  const cards = [
    {
      title: 'Work',
      description: 'Ever wondered if you\'re too reliant\non a client for work? Slate helps\nyou identify.',
      buttonText: 'Sign Up',
      image: contentImg1,
      imageStyle: {
        width: '405.125px',
        height: '226.52px',
        borderTopLeftRadius: '4.56px',
        borderTopRightRadius: '4.56px'
      }
    },
    {
      title: 'Design with real data',
      description: 'Ever wondered if you\'re too reliant\non a client for work? Slate helps\nyou identify.',
      buttonText: 'Try For Free',
      image: contentImg2,
      imageStyle: {
        width: '379px',
        height: '276px',
        borderRadius: '14px'
      }
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4 bg-dark-800/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contents
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We focus on ergonomics and meeting you where you work.
            <br />
            It's only a keystroke away.
          </p>
        </div>

        {/* Content Cards */}
        {/* Desktop: lado a lado | Mobile: um embaixo do outro */}
        <div 
          className="flex flex-col md:flex-row justify-center items-center md:items-stretch mx-auto"
          style={{ 
            maxWidth: '985px',
            gap: '33px'
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden transition-all duration-1000 w-full md:w-auto ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                maxWidth: '476px',
                minHeight: '624.52px',
                gap: '57px',
                paddingTop: '40px',
                paddingBottom: '40px',
                borderRadius: '10px',
                borderWidth: '1px',
                borderColor: '#E5E5E5',
                transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Card Content */}
              <div className="flex flex-col items-center px-8 text-center" style={{ gap: '57px' }}>
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-dark-900">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>

                {/* Button - Hover apenas no botão */}
                <button className="px-8 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white rounded transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                  {card.buttonText}
                </button>
              </div>

              {/* Image */}
              <div className="flex justify-center items-end flex-1 mt-auto px-4">
                <img 
                  src={card.image} 
                  alt={card.title}
                  style={{
                    ...card.imageStyle,
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contents