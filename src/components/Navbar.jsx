import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(0, 0, 0, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">{""} Project<span className="text-blue-500"> Portfolio</span> {""}</a>
                <button
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="w-8 h-8 relative cursor-pointer z-50 md:hidden flex items-center justify-center text-white"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">{""}Home{""}</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">{""}Videos{""}</a>
                </div>
            </div>
        </div>
    </nav>
}