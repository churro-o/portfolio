import { certifications } from "../../content.js";
import SectionShell from "../components/SectionShell.jsx";

export default function CertificationsSection() {
  return (
    <SectionShell eyebrow="Credentials" title="Certifications">
      {certifications?.length ? (
        <ul className="max-w-3xl divide-y divide-stone-500/20">
          {certifications.map((certification, index) => (
            <li
              key={`${certification.name || "certification"}-${index}`}
              className="py-6 first:pt-0"
            >
              <h2 className="text-xl font-semibold">{certification.name}</h2>
              <p className="mt-2 leading-7 text-stone-700">
                {[certification.issuer, certification.date]
                  .filter(Boolean)
                  .join(" - ")}
              </p>
              {certification.credentialURL || certification.credentialUrl ? (
                <a
                  href={certification.credentialURL || certification.credentialUrl}
                  className="mt-3 inline-flex font-semibold text-electric-iris underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-iris"
                >
                  View credential
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="max-w-2xl text-lg leading-8 text-stone-700">
          Add certifications in content.js to list them here.
        </p>
      )}
    </SectionShell>
  );
}
