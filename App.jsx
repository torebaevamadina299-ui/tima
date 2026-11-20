import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  )
}