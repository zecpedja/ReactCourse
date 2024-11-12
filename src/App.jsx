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
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* contact section */}
      <section id='contact' className='contact-section'>
        <h2>Contact Me</h2>
        <p>Feel free to reach out! My mail <a href="mailto:john.doe@me.com">john.doe@me.com</a></p>
      </section>
      {/* footer section */}
      <footer className='footer'>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  
  )
}
export default App;
