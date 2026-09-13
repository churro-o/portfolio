export default function Timeline({ entries, emptyMessage, renderEntry }) {
  if (!entries?.length) {
    return <p className="max-w-2xl text-lg leading-8 text-stone-700">{emptyMessage}</p>;
  }

  return (
    <ol className="relative max-w-3xl pl-10 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-0.5 before:bg-electric-iris">
      {entries.map((entry, index) => (
        <li
          key={`${entry.institution || entry.company || index}-${entry.years || index}`}
          className="timeline-entry relative mb-10 last:mb-0"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <span className="absolute -left-10 top-1.5 h-4 w-4 rounded-full bg-electric-iris ring-4 ring-white/70" />
          {renderEntry(entry)}
        </li>
      ))}
    </ol>
  );
}
