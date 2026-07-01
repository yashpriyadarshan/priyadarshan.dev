import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
	return (
		<>
			<Navbar />

			<main className="max-w-7xl mx-auto px-6">

				<Hero />

				<Projects />

			</main>
		</>
	);
}