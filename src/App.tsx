import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProblemLine } from './components/ProblemLine'
import { Product } from './components/Product'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { Workflow } from './components/Workflow'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <Nav />
      <main
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'clip', width: '100%' }}
      >
        <Hero />
        <ProblemLine />
        <Product />
        <Features />
        <Stats />
        <Workflow />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
