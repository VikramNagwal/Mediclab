import Docprofile from "./components/Docprofile"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Mission from "./components/Mission"
import Navbar from "./components/Navbar"
import Patients from "./components/Patients"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
     <Navbar />
     <Hero />
     <Mission />
     <Services />
     <Features />
     <Docprofile />
     <Patients />
     <Footer />
    </div>
  )
}

export default App