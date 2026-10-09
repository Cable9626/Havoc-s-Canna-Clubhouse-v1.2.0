import Header from './components/Header'
import Hero from './components/Hero'
import Hours from './components/Hours'
import Membership from './components/Membership'
import Events from './components/Events'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Hours />
        <Membership />
        <Events />
        <FindUs />
      </main>
       <Footer />
    </div>
  )
}

export default App