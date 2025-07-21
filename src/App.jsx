import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductGallery from './components/ProductGallery'
import Features from './components/Features'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductGallery />
      <Features />
      <About />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
