import './components.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Trust from './components/Trust.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import DashboardPreview from './components/DashboardPreview.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonial from './components/Testimonial.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <Pricing />
      <Testimonial />
      <CtaBand />
      <Footer />
    </>
  )
}
