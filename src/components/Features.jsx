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
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" className="w-8 h-8">
          <path d="M7.14636 13.6089L10.9197 9.83554L2.66636 1.59554C2.02636 0.955542 0.919691 1.12888 0.519691 1.95554C-0.426976 3.94221 -0.0803094 6.38221 1.55969 8.03554L7.14636 13.6089ZM16.1864 11.1955C18.2264 12.1422 21.093 11.4755 23.213 9.35554C25.7597 6.80887 26.253 3.15554 24.293 1.19554C22.3464 -0.751124 18.693 -0.271124 16.133 2.27554C14.013 4.39554 13.3464 7.26221 14.293 9.30221L2.21302 21.3822C1.96372 21.6315 1.82366 21.9696 1.82366 22.3222C1.82366 22.6748 1.96372 23.0129 2.21302 23.2622C2.46233 23.5115 2.80046 23.6516 3.15302 23.6516C3.50559 23.6516 3.84372 23.5115 4.09302 23.2622L12.3464 15.0355L20.5864 23.2755C20.7098 23.399 20.8563 23.4969 21.0176 23.5637C21.1789 23.6305 21.3518 23.6649 21.5264 23.6649C21.7009 23.6649 21.8738 23.6305 22.0351 23.5637C22.1964 23.4969 22.3429 23.399 22.4664 23.2755C22.5898 23.1521 22.6877 23.0055 22.7545 22.8443C22.8213 22.683 22.8557 22.5101 22.8557 22.3355C22.8557 22.161 22.8213 21.9881 22.7545 21.8268C22.6877 21.6655 22.5898 21.519 22.4664 21.3955L14.2264 13.1555L16.1864 11.1955Z" fill="#02E4C0"/>
        </svg>
      ),
      title: 'A single source\nof truth',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights',
      color: 'text-cyan-400'
    },
    {
      icon: (
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" className="w-8 h-8">
          <path d="M12.0495 13.395C13.5285 15.855 13.311 18.75 11.542 19.92C9.773 21.06 7.134 19.995 5.6405 17.535C4.1615 15.075 4.3935 12.15 6.1625 11.01C7.9315 9.87 10.5705 10.935 12.0495 13.395ZM14.5 23.625C17.4 23.625 18.125 22.5 18.125 22.5C18.125 22.5 17.4 25.5 14.5 25.5C11.6 25.5 10.875 22.545 10.875 22.5C10.875 22.5 11.6 23.625 14.5 23.625ZM22.8375 11.01C24.6065 12.15 24.8385 15.075 23.3595 17.535C21.866 19.995 19.227 21.06 17.458 19.92C15.689 18.75 15.4715 15.855 16.9505 13.395C18.4295 10.935 21.0685 9.87 22.8375 11.01ZM14.5 27C18.125 27 26.1 19.29 26.1 13.5C26.1 7.71 20.8945 3 14.5 3C8.1055 3 2.9 7.71 2.9 13.5C2.9 19.29 10.875 27 14.5 27ZM14.5 0C22.475 0 29 6.06 29 13.5C29 19.62 20.764 30 14.5 30C8.236 30 0 19.62 0 13.5C0 6.06 6.525 0 14.5 0Z" fill="#02E4C0"/>
        </svg>
      ),
      title: 'Intuitive\ninterface',
      description: 'When you add work to your Slate calendar we automatically calculate useful insights',
      color: 'text-green-400'
    },
    {
      icon: (
        <svg width="41" height="19" viewBox="0 0 41 19" fill="none" className="w-8 h-8">
          <path d="M31.775 4.03437e-05C29.315 4.03437e-05 26.9917 0.988885 25.3346 2.70171L13.325 13.7203C12.2317 14.8504 10.7796 15.4684 9.225 15.4684C6.03042 15.4684 3.41667 12.8021 3.41667 9.50002C3.41667 6.19798 6.03042 3.53163 9.225 3.53163C10.7796 3.53163 12.2317 4.14966 13.3933 5.3504L15.3238 7.1162L17.9375 4.75003L15.7508 2.79C14.8953 1.90238 13.8782 1.19881 12.7581 0.719939C11.6379 0.241065 10.4371 -0.0036143 9.225 4.03437e-05C4.13417 4.03437e-05 0 4.27327 0 9.50002C0 14.7268 4.13417 19 9.225 19C11.685 19 14.0083 18.0112 15.6654 16.2983L27.675 5.27977C28.7683 4.14966 30.2204 3.53163 31.775 3.53163C34.9696 3.53163 37.5833 6.19798 37.5833 9.50002C37.5833 12.8021 34.9696 15.4684 31.775 15.4684C30.2375 15.4684 28.7683 14.8504 27.6067 13.6496L25.625 11.8662L23.0625 14.2324L25.2492 16.21C26.107 17.0932 27.125 17.7927 28.2448 18.2684C29.3646 18.7442 30.5643 18.9868 31.775 18.9823C36.8658 18.9823 41 14.7268 41 9.50002C41 4.20263 36.8658 4.03437e-05 31.775 4.03437e-05Z" fill="#02E4C0"/>
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
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
            <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
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
            <div className={`space-y-6 mt-20 lg:mt-0 lg:max-w-xs transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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