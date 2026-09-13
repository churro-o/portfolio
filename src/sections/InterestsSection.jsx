import { interests } from "../../content.js";
import SectionShell from "../components/SectionShell.jsx";

const tileClasses = [
  "md:col-span-2 md:row-span-2 rotate-[-1deg]",
  "translate-y-4 rotate-[1deg]",
  "md:col-span-2 rotate-[2deg]",
  "translate-y-2 rotate-[-2deg]",
  "md:col-span-2",
  "rotate-[1deg]",
];

export default function InterestsSection() {
  return (
    <SectionShell eyebrow="Toolkit" title="Product Toolkit">
      {interests?.length ? (
        <div className="grid max-w-4xl auto-rows-[8.5rem] grid-cols-2 gap-4 md:grid-cols-4">
          {interests.map((interest, index) => (
            <article
              key={`${interest.label || "interest"}-${index}`}
              className={`flex flex-col justify-between rounded-[8px] bg-white/35 p-5 shadow-[0_1px_0_rgba(43,43,43,0.08)] ${
                tileClasses[index % tileClasses.length]
              }`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/60 text-sm font-semibold text-electric-iris">
                {interest.icon || "PM"}
              </span>
              <h2 className="text-lg font-semibold">{interest.label}</h2>
            </article>
          ))}
        </div>
      ) : (
        <p className="max-w-2xl text-lg leading-8 text-stone-700">
          Add product skills and tools in content.js to build this toolkit.
        </p>
      )}
    </SectionShell>
  );
}
