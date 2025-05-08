import React from 'react'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Navbar from './components/Navbar.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App
