import { nextDestination } from "../../content.js";
import SectionShell from "../components/SectionShell.jsx";

export default function DestinationSection() {
  const focus = nextDestination.place?.trim() || "AI-assisted product workflows";
  const note = nextDestination.note?.trim() || "Add a one-line focus in content.js.";

  return (
    <SectionShell eyebrow="Forward" title="Next Focus" light>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <MapIllustration />
        <div className="max-w-xl text-white">
          <h2 className="font-heading text-3xl md:text-4xl">
            Building toward: {focus}
          </h2>
          <p className="mt-4 text-xl leading-9 text-white/85">{note}</p>
        </div>
      </div>
    </SectionShell>
  );
}

function MapIllustration() {
  return (
    <svg
      viewBox="0 0 520 360"
      role="img"
      aria-label="Stylized product roadmap with a destination marker"
      className="min-h-72 w-full"
    >
      <path
        d="M44 74 188 38l148 34 140-34v248l-140 36-148-34-144 34z"
        fill="#ffffff"
        opacity="0.16"
      />
      <path
        d="M188 38v250M336 72v250"
        stroke="#ffffff"
        strokeWidth="3"
        opacity="0.38"
      />
      <path
        d="M70 139c38-20 72-18 104 6 34 26 76 24 128-4 55-30 100-25 146 17"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M319 107c0 47-58 95-58 95s-58-48-58-95a58 58 0 0 1 116 0z"
        fill="#F2E9E1"
      />
      <circle cx="261" cy="107" r="22" fill="#5683da" />
      <circle cx="261" cy="267" r="20" fill="#ffffff" opacity="0.28" />
    </svg>
  );
}
