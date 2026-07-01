import { motion } from "framer-motion";

const logs = [
    "$ mvn spring-boot:run",
    "",
    ":: Spring Boot :: (v3.5.3)",
    "",
    "✓ Loading API Keys",
    "✓ Connecting PostgreSQL",
    "✓ Initializing JWT Authentication",
    "✓ Registering Routes",
    "✓ Enterprise LLM Gateway Started",
    "✓ Server Running on :8080",
];

export default function Terminal() {
    return (
        <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">

            {/* Header */}
            <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">

                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-4 text-sm text-zinc-500">
                    yash@backend:~
                </span>

            </div>

            {/* Logs */}
            <div className="space-y-2 p-6 font-mono text-sm">

                {logs.map((line, index) => (

                    <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: index * 0.3,
                            duration: 0.3,
                        }}
                        className={
                            line.startsWith("✓")
                                ? "text-green-400"
                                : "text-zinc-300"
                        }
                    >
                        {line}
                    </motion.p>

                ))}

            </div>

        </div>
    );
}