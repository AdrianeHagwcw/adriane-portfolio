import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

    const frontendskills = [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Python",
          "Java"
    ]
    return (
    <section
      id="about" 
      className="min-h-screen flex items-center justify-center py-20"
      >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-10">  
                {" "}
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/30 border hover:-translate-y-1 transition-all hover:shadow-[0_5px_12px_rgba(255,255,255,0.2)]">
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                    I'm Adriane Aranda, a dedicated computer programmer from CVSU-Bacoor Cavite. 
                    My passion lies in crafting efficient code and creating delightful user experiences. 
                    I thrive on learning new technologies and continuously improving my skills to build exceptional software solutions.
                </p>
                <div className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">Languages Learned:</h3>
                      <div className="flex gap-4 flex-wrap">
                        {frontendskills.map((tech, key) => (
                          <span key={key} 
                          className="border-white/30 border mt-4 bg-gray-800 text-blue-500 py-1 px-3 rounded-full text-bold hover:bg-black
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                          
                          ">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="justify-center items-center text-center p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all hover:shadow-[0_5px_12px_rgba(255,255,255,0.2)]">
                    <h3 className="rounded-xl text-3xl font-bold">  Education  </h3>
                    <ul className="rounded-xl text-xl mt-4 text-gray-300 leading-relaxed list-disc list-inside text-left">
                      <li>
                        <strong>College</strong> - Cavite State University - Bacoor Campus (2023 - Present)
                      </li>
                      <li>
                        <strong>Senior High School</strong> - Saint Agustine College of Nursing (2020 - 2022)
                      </li>
                      <li>
                        <strong>Junior High School</strong> - Las Piñas National High School (2016 - 2020)
                      </li>
                      <li>
                        <strong>Elementary</strong> - Pulanlupa Elementary School (2010 - 2016)
                      </li>
                    </ul>
              </div>
            </div>
        </div>
      </RevealOnScroll>
    </section>
    );
}