import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Hours from './components/Hours'
import Membership from './components/Membership'
import Events from './components/Events'
import FindUs from './components/FindUs'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import Carousel from './components/Carousel'
import AgeGate from './components/AgeGate'
import FAQ from './components/FAQ'
import Merch from './components/Merch'

function App() {
  return (
    <div id="top">
      <AgeGate />
      <Background />
      <Header />
      <main>
        <Reveal><Hero /></Reveal>
        <Carousel />
        <Reveal><Hours /></Reveal>
        <Reveal><Membership /></Reveal>
        <Reveal><Events /></Reveal>
        <Reveal><Merch /></Reveal>
        <Reveal><FindUs /></Reveal>
        <Reveal><FAQ /></Reveal>
      </main>
      <Footer />
    </div>
  )
}

export default App