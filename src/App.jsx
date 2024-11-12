import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/ProjectList'
import Contact from './components/Contact'
import Footer from './components/Footer'

  function App() {

  return (
    <div className="App">
      <Header/>
      {/* about section */}
      <About/>
      {/* projects section */}
      <Projects/>
      {/* contact section */}
      <Contact/>
      {/* footer section */}
      <Footer/>
    </div>
  
  )
}
export default App;
