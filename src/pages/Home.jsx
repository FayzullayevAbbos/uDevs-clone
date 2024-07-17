
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import OurWork from "../components/OurWork"
import Clients from "./Clients"
import Command from "./Command"
import Contacts from "./Contacts"
import Direction from "./Direction"
import Portifolio from "./Portfolio"
import Services from "./Services"
import Tools from "./Tools"


function Home() {
  
  return (
    <div>
      <Header/>
      <Hero  />
      <Direction />
      <Command />
      <Services />
      <Tools/>
      <Clients/>
      <Portifolio />
      <OurWork />
      <Contacts />
      <Footer/>
    </div>
  )
}

export default Home