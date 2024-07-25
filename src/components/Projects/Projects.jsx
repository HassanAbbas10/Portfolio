

const Projects = () => {
  return (
    <><section id="projects" className="py-20">
    <div className="container mx-auto text-center">
      <h2 className="mb-4 text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="overflow-hidden bg-white rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="object-cover w-full h-48" />
            <div className="p-4">
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section></>
  )
}

export default Projects