export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ae-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="animate-fade-in-up font-heading text-sm font-semibold uppercase tracking-wide text-ae-orange">
            {eyebrow}
          </p>
        )}
        <h1
          className="animate-fade-in-up mt-2 font-heading text-3xl font-bold sm:text-4xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-fade-in-up mt-4 max-w-2xl text-base text-white/75 sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
