import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import profileData from './data/profileData.js'

import LoadingScreen from './components/LoadingScreen.jsx'
import FloatingSunflowers from './components/FloatingSunflowers.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import PhotoStory from './components/PhotoStory.jsx'
import ProfileDetails from './components/ProfileDetails.jsx'
import FamilyBackground from './components/FamilyBackground.jsx'
import CareerSection from './components/CareerSection.jsx'
import HoroscopeSection from './components/HoroscopeSection.jsx'
import LifestyleSection from './components/LifestyleSection.jsx'
import PartnerExpectations from './components/PartnerExpectations.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400)
    return () => clearTimeout(t)
  }, [])

  const scrollToProfile = () =>
    document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })

  const downloadBiodata = () => window.print()

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen data={profileData.loading} />}
      </AnimatePresence>

      <FloatingSunflowers count={9} />

      <main className="relative z-10">
        <Hero data={profileData.hero} onView={scrollToProfile} onDownload={downloadBiodata} />
        <Intro data={profileData.intro} />
        <PhotoStory items={profileData.photoStory} />
        <ProfileDetails data={profileData.profile} />
        <FamilyBackground data={profileData.family} />
        <CareerSection data={profileData.career} />
        <HoroscopeSection data={profileData.horoscope} />
        <LifestyleSection data={profileData.lifestyle} />
        <PartnerExpectations data={profileData.partner} />
        <Gallery data={profileData.gallery} />
        <Contact data={profileData.contact} onDownload={downloadBiodata} />
        <Footer data={profileData.footer} />
      </main>
    </>
  )
}
