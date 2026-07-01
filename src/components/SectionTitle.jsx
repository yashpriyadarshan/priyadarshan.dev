export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="mb-14">

            <p className="text-blue-400 font-semibold uppercase tracking-widest">
                {subtitle}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
                {title}
            </h2>

        </div>
    );
}