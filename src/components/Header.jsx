import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-transparent border-0" style={{width: '100%', height: '119px'}}>
      <nav className="mx-auto flex items-center justify-center" style={{maxWidth: '1097px', height: '100%'}}>
        <div className="flex items-center justify-center w-full" style={{height: '100%'}}>
          {/* Logo */}
          <div className="flex items-center pr-44">
            <img src="/src/assets/images/logo-dark.svg" alt="Logo" className="w-44 h-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-white hover:text-primary-blue transition-colors">
              Home
            </a>
            <a href="#product" className="text-white hover:text-primary-blue transition-colors">
              Product
            </a>
            <a href="#about" className="text-white hover:text-primary-blue transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-primary-blue transition-colors">
              Contact
            </a>
          </div>

          {/* Login Button */}
          <button className="hidden md:block px-6 py-2 border border-white/20 rounded hover:border-primary-blue hover:text-primary-blue transition-all ml-44">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-white/10 pt-4">
            <a href="#home" className="block text-white hover:text-primary-blue transition-colors">
              Home
            </a>
            <a href="#product" className="block text-white hover:text-primary-blue transition-colors">
              Product
            </a>
            <a href="#about" className="block text-white hover:text-primary-blue transition-colors">
              About
            </a>
            <a href="#contact" className="block text-white hover:text-primary-blue transition-colors">
              Contact
            </a>
            <button className="w-full px-6 py-2 border border-white/20 rounded hover:border-primary-blue hover:text-primary-blue transition-all">
              Login
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
