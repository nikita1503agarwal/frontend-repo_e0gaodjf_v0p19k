import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Conditions from './components/Conditions'
import Team from './components/Team'
import Business from './components/Business'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Conditions />
        <Team />
        <Business />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Smestadpsykologene. Alle rettigheter forbeholdt.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
