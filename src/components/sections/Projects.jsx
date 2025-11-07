import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  const projects = [
    {
      subtitle: "Table Order List",
      description:
        "Responsive Table Order List web application showing products status.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: "/photos/Screenshot (492).png",
      link: "https://adrianehagwcw.github.io/Table/",
    },
    {
      subtitle: "Restaurant Menu App",
      description:
        "A restaurant ordering interface displaying dynamic menu categories and pricing.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/photos/Screenshot (493).png",
      link: "https://adrianehagwcw.github.io/adriane-project/",
    },
    {
      subtitle: "Grade Calculator Web",
      description:
        "A webpage that shows about myself, skills, projects, and contact information.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: "/photos/Screenshot (496).png",
      link: "https://adrianehagwcw.github.io/gradecal/",
    },
    {
      subtitle: "Kids Story Web",
      description: "A simple short story that kids can enjoy.",
      tech: ["HTML", "CSS", "Bootstrap"],
      image: "/photos/Screenshot (495).png",
      link: "https://adrianehagwcw.github.io/Typography/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:shadow-[0_5px_12px_rgba(255,255,255,0.2)] transition-transform duration-300 bg-gray-900/40"
            >
              <div className="relative rounded-lg overflow-hidden mb-4 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  {project.price && (
                    <h6 className="text-sm text-gray-300">{project.price}</h6>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.subtitle}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="border border-white/30 bg-gray-800 text-blue-500 py-1 px-3 rounded-full font-semibold hover:bg-black hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  → View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
     </RevealOnScroll>
    </section>
  );
};