import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return <section 
    id="home" 
    className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right">UbusanHangin Rap Battle</h1>
            <p className="text-xl md:text-2xl mb-8">
                A very own website for my rap battle group.
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition relative overflow-hidden hover:translate-y-0.5">
                    View videos
                </a>
            </div>
        </div>
      </RevealOnScroll>
    </section>
}