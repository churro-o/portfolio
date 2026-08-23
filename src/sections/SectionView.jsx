import PersonalSection from "./PersonalSection.jsx";
import ExperienceSection from "./ExperienceSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import CertificationsSection from "./CertificationsSection.jsx";
import InterestsSection from "./InterestsSection.jsx";
import DestinationSection from "./DestinationSection.jsx";

const sections = {
  personal: PersonalSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  certifications: CertificationsSection,
  interests: InterestsSection,
  destination: DestinationSection,
};

export default function SectionView({ sectionId }) {
  const ActiveSection = sections[sectionId] || PersonalSection;
  return <ActiveSection />;
}
