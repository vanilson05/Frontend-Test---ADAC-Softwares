import React, { useEffect, useRef, useState } from 'react'

// Testimonial images
import testimonial1 from '../assets/images/Testimonials-1.png'
import testimonial2 from '../assets/images/Testimonials-2.png'
import testimonial3 from '../assets/images/Testimonials-3.png'
import testimonial4 from '../assets/images/Testimonials-4.png'

// Componente de efeito máquina de escrever
const TypewriterText = ({ text, delay = 0, speed = 80, shouldStart, hasTyped }) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Se já digitou antes, mostra completo
    if (hasTyped) {
      setDisplayText(text)
      setIsComplete(true)
      return
    }

    if (!shouldStart) {
      return
    }

    const timeout = setTimeout(() => {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex))
          currentIndex++
        } else {
          setIsComplete(true)
          clearInterval(interval)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, delay, speed, shouldStart, hasTyped])

  return (
    <span>
      {displayText}
      {!isComplete && shouldStart && <span className="animate-pulse">|</span>}
    </span>
  )
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTyping, setCurrentTyping] = useState(-1)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setCurrentTyping(0)
          } else {
            setIsVisible(false)
            setCurrentTyping(-1)
          }
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

  // Animação sequencial
  useEffect(() => {
    if (currentTyping >= 0 && currentTyping < 4) {
      const timeout = setTimeout(() => {
        setCurrentTyping(prev => prev + 1)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [currentTyping])

  const testimonials = [
    {
      id: 1,
      name: 'Claire Bell',
      role: 'Designer',
      image: testimonial1,
      text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.'
    },
    {
      id: 2,
      name: 'Francisco Lane',
      role: 'Designer',
      image: testimonial2,
      text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    },
    {
      id: 3,
      name: 'Ralph Fisher',
      role: 'Designer',
      image: testimonial3,
      text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    },
    {
      id: 4,
      name: 'Jorge Murphy',
      role: 'Designer',
      image: testimonial4,
      text: 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'
    }
  ]

  // Medidas específicas de cada card
  const cardSizes = [
    { width: '430px', height: '328px' }, // Card 1 (maior)
    { width: '430px', height: '304px' }, // Card 2
    { width: '430px', height: '304px' }, // Card 3
    { width: '430px', height: '304px' }  // Card 4
  ]

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 px-4">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Testimonials</h2>
        </div>

        {/* Desktop Grid - 2x2 com medidas exatas */}
        <div className="hidden md:flex justify-center items-start" style={{ gap: '30px' }}>
          
          {/* Coluna Esquerda */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Card 1 - Claire Bell (MAIOR) */}
            <div
              className={`border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                width: cardSizes[0].width,
                height: cardSizes[0].height,
                borderRadius: '10px',
                padding: '40px',
                borderWidth: '1px',
                transitionDelay: '0ms'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[0].image}
                  alt={testimonials[0].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    <TypewriterText 
                      text={testimonials[0].name}
                      shouldStart={currentTyping === 0}
                      hasTyped={currentTyping > 0}
                      speed={80}
                    />
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonials[0].role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {testimonials[0].text}
              </p>
            </div>

            {/* Card 3 - Ralph Fisher */}
            <div
              className={`border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                width: cardSizes[2].width,
                height: cardSizes[2].height,
                borderRadius: '10px',
                padding: '40px',
                borderWidth: '1px',
                transitionDelay: '300ms'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[2].image}
                  alt={testimonials[2].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    <TypewriterText 
                      text={testimonials[2].name}
                      shouldStart={currentTyping === 2}
                      hasTyped={currentTyping > 2}
                      speed={80}
                    />
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonials[2].role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {testimonials[2].text}
              </p>
            </div>
          </div>

          {/* Coluna Direita */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Card 2 - Francisco Lane */}
            <div
              className={`border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                width: cardSizes[1].width,
                height: cardSizes[1].height,
                borderRadius: '10px',
                padding: '40px',
                borderWidth: '1px',
                transitionDelay: '150ms'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[1].image}
                  alt={testimonials[1].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    <TypewriterText 
                      text={testimonials[1].name}
                      shouldStart={currentTyping === 1}
                      hasTyped={currentTyping > 1}
                      speed={80}
                    />
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonials[1].role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {testimonials[1].text}
              </p>
            </div>

            {/* Card 4 - Jorge Murphy */}
            <div
              className={`border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                width: cardSizes[3].width,
                height: cardSizes[3].height,
                borderRadius: '10px',
                padding: '40px',
                borderWidth: '1px',
                transitionDelay: '450ms'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[3].image}
                  alt={testimonials[3].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    <TypewriterText 
                      text={testimonials[3].name}
                      shouldStart={currentTyping === 3}
                      hasTyped={currentTyping > 3}
                      speed={80}
                    />
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonials[3].role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {testimonials[3].text}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Stack - Um abaixo do outro */}
        <div className="md:hidden flex flex-col items-center" style={{ gap: '30px' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`border border-white/20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                width: '100%',
                maxWidth: '430px',
                borderRadius: '10px',
                padding: '40px',
                borderWidth: '1px',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    <TypewriterText 
                      text={testimonial.name}
                      shouldStart={currentTyping === index}
                      hasTyped={currentTyping > index}
                      speed={80}
                    />
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials