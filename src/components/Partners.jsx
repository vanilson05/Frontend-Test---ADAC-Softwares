import React from 'react'

const Partners = () => {
  const partners = [
    { name: 'Apple', color: 'text-gray-400' },
    { name: 'Apiary', color: 'text-teal-400' },
    { name: 'Android', color: 'text-green-400' },
    { name: 'Basecamp', color: 'text-green-500' },
    { name: 'Airbnb', color: 'text-red-400' },
    { name: 'IBM', color: 'text-blue-400' },
  ]

  return (
    <section className="py-20 lg:py-32 px-4 bg-dark-800/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Partners
          </h2>
          <p className="text-gray-400 text-lg">
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 hover:scale-110 transition-transform"
            >
              <div className={`text-4xl font-bold ${partner.color}`}>
                {partner.name === 'Apple' && (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                )}
                {partner.name === 'Apiary' && (
                  <div className="text-2xl">🐝</div>
                )}
                {partner.name === 'Android' && (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.21.637.637 0 0 0-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
                  </svg>
                )}
                {partner.name === 'Basecamp' && (
                  <div className="text-xl font-bold">⛺</div>
                )}
                {partner.name === 'Airbnb' && (
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
                  </svg>
                )}
                {partner.name === 'IBM' && (
                  <div className="text-2xl font-bold tracking-wider">IBM</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* All Partners Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-white/20 hover:border-primary-blue hover:text-primary-blue rounded transition-all">
            All Partners
          </button>
        </div>
      </div>
    </section>
  )
}

export default Partners
