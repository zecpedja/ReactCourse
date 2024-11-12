import './App.css'


  function App() {
  const name = "John Doe";
  const profession = "Full Stack Developer";
  const projects = [
    { name: "Project 1", description: "Description of Project 1", link: "#" },
    { name: "Project 2", description: "Description of Project 2" , link: "#"}]
  return (
    <div className="App">
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      {/* about section */}
      <section id='projects' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I'm {name}, a {profession}.</p>
      </section>
      {/* projects section */}
    </div>
  
  )
}
export default App;
