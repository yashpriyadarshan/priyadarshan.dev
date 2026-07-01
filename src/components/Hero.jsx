import Terminal from "./Terminal";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] grid lg:grid-cols-2 items-center gap-16 py-16 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                <div
                    className="
                    absolute
                    left-1/4
                    top-32
                    h-80
                    w-80
                    rounded-full
                    bg-blue-600/15
                    blur-3xl"
                />

                <div
                    className="
                    absolute
                    right-20
                    bottom-20
                    h-96
                    w-96
                    rounded-full
                    bg-purple-600/10
                    blur-3xl"
                />

            </div>

            <div className="max-w-3xl">

                <p className="text-blue-400 font-semibold tracking-wide uppercase">
                    Backend Software Engineer
                </p>

                <h1 className="mt-6 text-6xl font-extrabold leading-tight">

                    Building reliable backend
                    <br />
                    systems that power
                    <br />
                    real-world applications.

                </h1>

                <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-2xl">

                    I build scalable REST APIs, distributed systems,
                    AI-powered platforms, and backend applications
                    using Java, Spring Boot, PostgreSQL and modern
                    cloud technologies.

                </p>

                <div className="mt-10 flex gap-5">

                    <button
                        className="
                        rounded-xl
                        bg-blue-600
                        px-7
                        py-3.5
                        font-semibold
                        shadow-lg
                        shadow-blue-600/20
                        transition
                        hover:-translate-y-1
                        hover:bg-blue-500"
                    >
                        Download Resume
                    </button>

                    <button
                        className="
                        rounded-xl
                        border
                        border-zinc-700
                        bg-zinc-900/40
                        px-7
                        py-3.5
                        transition
                        hover:-translate-y-1
                        hover:border-zinc-500"
                    >
                        GitHub
                    </button>

                </div>

            </div>

            {/* Right Side */}
            <div className="hidden lg:flex justify-center">
                <Terminal />
            </div>

        </section>
    );
}