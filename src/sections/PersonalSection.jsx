import { personalInfo, sidebar } from "../../content.js";
import Avatar from "../components/Avatar.jsx";
import SectionShell from "../components/SectionShell.jsx";
import Timeline from "../components/Timeline.jsx";

export default function PersonalSection() {
  return (
    <SectionShell eyebrow="Personal" title="Personal Info/Background">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
        <div className="flex gap-5 rounded-[8px] bg-white/30 p-5">
          <Avatar photo={sidebar.photo} name={sidebar.name} />
          <p className="text-lg leading-8 text-stone-700">
            {personalInfo.bio?.trim() ||
              "Add a short bio in content.js when you are ready."}
          </p>
        </div>

        <div>
          <h2 className="mb-8 font-heading text-3xl">Education</h2>
          <Timeline
            entries={personalInfo.education}
            emptyMessage="Add education milestones in content.js to build this timeline."
            renderEntry={(entry) => (
              <article>
                <h3 className="text-xl font-semibold text-ink">
                  {entry.institution}
                </h3>
                <p className="mt-1 text-lg text-stone-700">{entry.degree}</p>
                <p className="mt-2 text-sm font-semibold text-stone-600">
                  {entry.years}
                </p>
                {entry.note ? (
                  <p className="mt-3 max-w-xl leading-7 text-stone-700">
                    {entry.note}
                  </p>
                ) : null}
              </article>
            )}
          />
        </div>
      </div>
    </SectionShell>
  );
}
