export default function SectionShell({
  eyebrow,
  title,
  children,
  light = false,
  className = "",
}) {
  return (
    <section
      className={`mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl flex-col justify-center ${className}`}
      aria-labelledby={`${eyebrow}-heading`}
    >
      <p
        className={`mb-3 text-sm font-semibold uppercase tracking-[0.12em] ${
          light ? "text-white/75" : "text-stone-600"
        }`}
      >
        {eyebrow}
      </p>
      <h1
        id={`${eyebrow}-heading`}
        className={`font-heading text-4xl leading-tight md:text-6xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h1>
      <div className="mt-10">{children}</div>
    </section>
  );
}
