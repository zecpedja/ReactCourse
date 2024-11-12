import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/ProjectList'
import Contact from './components/Contact'
import Footer from './components/Footer'

  function App() {
  const name = "John Doe";
  const profession = "Full Stack Developer";
  const projects = [
    { name: "Project 1", description: "Description of Project 1", link: "#" },
    { name: "Project 2", description: "Description of Project 2" , link: "#"}]
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
