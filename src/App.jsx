import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy load components for better performance
const LoadingScreen = lazy(() => import('./components/LoadingScreen'))
const Navbar = lazy(() => import('./components/Navbar'))
const Hero = lazy(() => import('./components/Hero'))
const Section = lazy(() => import('./components/Section'))
const Footer = lazy(() => import('./components/Footer'))
const ParallaxSection = lazy(() => import('./components/ParallaxSection'))
const SectionDetail = lazy(() => import('./components/SectionDetail'))
const AboutSection = lazy(() => import('./components/AboutSection'))

import sectionsData from './data/sections.json'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const LoadingFallback = () => (
    <div className="fixed inset-0 bg-goa-dark flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-goa-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  )

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <Navbar sections={sectionsData.sections} />
      </Suspense>
      
      <Suspense fallback={null}>
        <Hero heroData={sectionsData.hero} />
      </Suspense>
      
      {sectionsData.sections.map((section, index) => (
        <Suspense key={section.id} fallback={null}>
          <ParallaxSection>
            <Section section={section} index={index} />
          </ParallaxSection>
        </Suspense>
      ))}

      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Suspense fallback={<LoadingFallback />}>
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!isLoading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/section/:sectionId" element={
            <Suspense fallback={null}>
              <Navbar sections={sectionsData.sections} />
              <SectionDetail />
            </Suspense>
          } />
        </Routes>
      )}
    </>
  )
}

export default App