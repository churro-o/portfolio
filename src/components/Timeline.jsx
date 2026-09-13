export default function Timeline({ entries, emptyMessage, renderEntry }) {
  if (!entries?.length) {
    return (
      <p className="max-w-2xl text-lg leading-8 text-stone-700">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ol className="max-w-3xl">
      {entries.map((entry, index) => (
        <li
          key={`${entry.institution || entry.company || index}-${entry.years || index}`}
          className="timeline-entry grid grid-cols-[1rem_1fr] gap-6"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="relative flex justify-center">
            {index < entries.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute -bottom-[0.875rem] left-1/2 top-[0.875rem] w-0.5 -translate-x-1/2 bg-electric-iris"
              />
            ) : null}
            <span
              aria-hidden="true"
              className="relative z-10 mt-1.5 h-4 w-4 rounded-full bg-electric-iris ring-4 ring-white/70"
            />
          </div>
          <div className={index === entries.length - 1 ? "pb-0" : "pb-10"}>
            {renderEntry(entry)}
          </div>
        </li>
      ))}
    </ol>
  );
}
