import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-wide hover:text-blue-400 transition-colors"
                >
                    Yash
                </a>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">

                    <a href="#about" className="hover:text-white transition-colors">
                        About
                    </a>

                    <a href="#skills" className="hover:text-white transition-colors">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-white transition-colors">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-white transition-colors">
                        Contact
                    </a>

                </div>

                {/* GitHub */}
                <a
                    href="https://github.com/yashpriyadarshan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white transition-colors"
                >
                    <FaGithub size={22} />
                </a>

            </nav>
        </header>
    );
}