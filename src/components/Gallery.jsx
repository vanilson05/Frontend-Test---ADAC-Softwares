import React from 'react'

const Gallery = () => {
  // Placeholder for gallery images
  const galleryItems = [
    { id: 1, color: 'from-purple-500 to-pink-500' },
    { id: 2, color: 'from-blue-500 to-cyan-500' },
    { id: 3, color: 'from-green-500 to-teal-500' },
    { id: 4, color: 'from-yellow-500 to-orange-500' },
    { id: 5, color: 'from-red-500 to-pink-500' },
    { id: 6, color: 'from-indigo-500 to-purple-500' },
    { id: 7, color: 'from-cyan-500 to-blue-500' },
  ]

  return (
    <section className="py-20 lg:py-32 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Gallery
          </h2>
          <p className="text-gray-400 text-lg">
            We focus on ergonomics and meeting you where you work.
            It's only a keystroke away.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* Large items */}
            {galleryItems.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-lg bg-gradient-to-br overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`
                }}
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-80 hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Remaining items */}
            {galleryItems.slice(4).map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-lg bg-gradient-to-br overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-80 hover:opacity-100 transition-opacity`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-white/20 hover:border-primary-blue hover:text-primary-blue rounded transition-all">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery
