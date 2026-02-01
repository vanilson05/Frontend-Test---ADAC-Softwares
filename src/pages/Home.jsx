import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Contents from '../components/Contents'
import Gallery from '../components/Gallery'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Contents />
        <Gallery />
        <Partners />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Home
