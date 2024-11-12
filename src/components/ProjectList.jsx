function ProjectList() {
    const projects = [
        { name: "Project 1", description: "Description of Project 1", link: "#" },
        { name: "Project 2", description: "Description of Project 2" , link: "#"},
        { name: "Project 3", description: "Description of Project 3" , link: "#"}
    ]
    return (
        <div className='projects-list'>
            {projects.map((project, index) => (
                <div key={index} className='project-item'>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ProjectList;