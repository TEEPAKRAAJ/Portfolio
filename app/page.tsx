import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ChatlingWidget from './components/ChatlingWidget'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Showcase/>
      <Contact />
      <Footer />
      <ChatlingWidget />
    </>
  )
}
