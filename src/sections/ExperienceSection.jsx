import { experience } from "../../content.js";
import SectionShell from "../components/SectionShell.jsx";
import Timeline from "../components/Timeline.jsx";

export default function ExperienceSection() {
  return (
    <SectionShell eyebrow="Experience" title="Product Experience">
      <Timeline
        entries={experience}
        emptyMessage="Add career entries in content.js to build this timeline."
        renderEntry={(entry) => (
          <article>
            <h2 className="text-xl font-semibold text-ink">
              {[entry.company, entry.role].filter(Boolean).join(" - ")}
            </h2>
            <p className="mt-2 text-sm font-semibold text-stone-600">
              {entry.years}
            </p>
            {entry.description ? (
              <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-700">
                {entry.description}
              </p>
            ) : null}
          </article>
        )}
      />
    </SectionShell>
  );
}
