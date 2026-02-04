import React from 'react'

const Footer = () => {
  const footerLinks = {
    fingertipe: [
      { name: 'Home', href: '#' },
      { name: 'Examples', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Updates', href: '#' }
    ],
    resources: [
      { name: 'Home', href: '#' },
      { name: 'Examples', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Updates', href: '#' }
    ],
    about: [
      { name: 'Home', href: '#' },
      { name: 'Examples', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Updates', href: '#' }
    ]
  }

  return (
    <footer className="bg-dark-900 py-16 px-4">
      <div className="container mx-auto">
        
        {/* Desktop Layout - 4 colunas horizontais */}
        <div className="hidden md:grid grid-cols-4 gap-12 max-w-6xl mx-auto">
          
          {/* Coluna 1 - Fingertipe */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Fingertipe</h3>
            <ul className="space-y-4">
              {footerLinks.fingertipe.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2 - Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Contato e Social */}
          <div>
            {/* Endereço */}
            <div className="flex items-start gap-3 mb-6">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p className="text-gray-400">7480 Mockingbird Hill undefined</p>
            </div>

            {/* Telefone */}
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <p className="text-gray-400">(239) 555-0108</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              {/* Twitter */}
              <a href="#" className="text-white hover:text-primary-blue transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="text-white hover:text-primary-blue transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-primary-blue transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Mobile Layout - Colunas verticais */}
        <div className="md:hidden space-y-12">
          
          {/* Fingertipe */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Fingertipe</h3>
            <ul className="space-y-4">
              {footerLinks.fingertipe.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-6">About</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato e Social */}
          <div>
            {/* Endereço */}
            <div className="flex items-start gap-3 mb-6">
              <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p className="text-gray-400">7480 Mockingbird Hill undefined</p>
            </div>

            {/* Telefone */}
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <p className="text-gray-400">(239) 555-0108</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              {/* Twitter */}
              <a href="#" className="text-white hover:text-primary-blue transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="text-white hover:text-primary-blue transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="text-white hover:text-primary-blue transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer