function About() {
    const name = "John Doe";
    const profession = "Full Stack Developer";
    return (
        <section id='projects' className='about-section'>
            <h2>About Me</h2>
            <p>Hello! I'm {name}, a {profession}.</p>
        </section>
    )
}

export default About