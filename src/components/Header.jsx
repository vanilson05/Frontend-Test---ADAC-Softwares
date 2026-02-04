import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo-dark.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const menuItems = ['Home', 'Product', 'About', 'Contact']

  return (
    <header className="bg-transparent border-0 w-full h-[119px]">
      <nav className="mx-auto flex items-center justify-center max-w-[1097px] h-full">
        <div className="flex items-center justify-between w-full px-4 h-full">
          
          {/* Logo */}
          <div className={`flex items-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <img src={logo} alt="Logo" className="w-72 h-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-10 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
            {menuItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-primary-blue transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Login Button */}
          <button className={`hidden md:block px-6 py-2 border border-white/20 rounded hover:border-primary-blue hover:text-primary-blue transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            Login
          </button>

          {/* Mobile Menu Button + Login */}
          <div className="md:hidden flex items-center justify-end w-full gap-2">
            <button
              className="px-6 py-2 border border-white/20 rounded hover:border-primary-blue hover:text-primary-blue transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
            <button
              className="w-12 h-12 flex flex-col items-end justify-center gap-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="block bg-white rounded" style={{ width: '40px', height: '5px' }} />
              <span className="block bg-white rounded" style={{ width: '28px', height: '5px' }} />
              <span className="block bg-white rounded" style={{ width: '18px', height: '5px' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-dark-900/95 z-50 flex flex-col">
            <div className="flex justify-end pt-16 pb-2 pr-6">
              <button
                className="w-10 h-10 flex items-center justify-center relative"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <span className="block bg-white absolute" style={{ width: '36px', height: '7px', top: '18px', left: '2px', borderRadius: '4px', transform: 'rotate(45deg)' }}></span>
                <span className="block bg-white absolute" style={{ width: '36px', height: '7px', top: '18px', left: '2px', borderRadius: '4px', transform: 'rotate(-45deg)' }}></span>
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 mt-10">
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-primary-blue transition-colors text-2xl py-2"
                  style={{ 
                    animation: `slideIn 0.5s ease-out ${index * 100}ms forwards`,
                    opacity: 0,
                    transform: 'translateX(-48px)'
                  }}
                >
                  {item}
                </a>
              ))}
              <button 
                className="w-40 px-6 py-2 border border-white/20 rounded hover:border-primary-blue hover:text-primary-blue transition-all text-xl"
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  animation: 'slideIn 0.5s ease-out 400ms forwards',
                  opacity: 0,
                  transform: 'translateX(-48px)'
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header >
  )
}

export default Header