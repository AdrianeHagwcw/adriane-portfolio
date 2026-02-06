import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  const projects = [
    {
      subtitle: "BOBBY VS TOTOY ROUND 1",
      description:
        "Parehong may bitaw mahirap mamili ng panalo.",
      tech: ["MUSIC", "RAP", "OBSCENE"],
      image: "/photos/d52c86bd-21bb-4c9d-b643-0814edaa580b.jfif",
      link: "https://www.facebook.com/reel/1262031465822766",
    },
    {
      subtitle: "BOBBY VS TOTOY ROUND 2",
      description:
        "Dito medyo may nauutal wala kasing charge kaya wala sa mood.",
      tech: ["MUSIC", "RAP", "OBSCENE"],
      image: "/photos/dcda5230-4989-4310-9678-12bd3fb2c56d.jfif",
      link: "https://www.facebook.com/reel/1777446612864381",
    },
    {
      subtitle: "BOBBY VS TOTOY ROUND 3",
      description:
        "Eto nag nagkakabatuhan na ng matitinding banat.",
      tech: ["MUSIC", "RAP", "OBSCENE"],
      image: "/photos/79cc70bf-776d-444e-840c-b091a915093c.jfif",
      link: "https://www.facebook.com/reel/4461042570884645",
    },
    {
      subtitle: "BOBBY VS TOTOY ROUND - FREESTYLE",
      description: "Palitan ng banat walang pikunan suntukan lang.",
      tech: ["MUSIC", "RAP", "OBSCENE"],
      image: "/photos/7feef183-d1c0-4dd8-a7bd-dab4f0fb6a47.jfif",
      link: "https://www.facebook.com/reel/1557052758893340",
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
                  → View Video
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