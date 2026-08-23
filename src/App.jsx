import { useEffect, useMemo, useState } from "react";
import { sidebar } from "../content.js";
import { NAV_ITEMS, SECTION_COLORS } from "./sections/sectionData.js";
import Sidebar from "./components/Sidebar.jsx";
import MobileNav from "./components/MobileNav.jsx";
import SectionView from "./sections/SectionView.jsx";
import { useReducedMotion } from "./hooks/useReducedMotion.js";

const FADE_MS = 150;
const BACKGROUND_MS = 250;

export default function App() {
  const [activeId, setActiveId] = useState(NAV_ITEMS[0].id);
  const [visibleId, setVisibleId] = useState(NAV_ITEMS[0].id);
  const [isVisible, setIsVisible] = useState(true);
  const [panelColor, setPanelColor] = useState(SECTION_COLORS[NAV_ITEMS[0].id]);
  const reduceMotion = useReducedMotion();

  const activeIndex = useMemo(
    () => NAV_ITEMS.findIndex((item) => item.id === activeId),
    [activeId]
  );

  useEffect(() => {
    const titleName = sidebar.name?.trim();
    document.title = titleName ? `${titleName} - Portfolio` : "Portfolio";
  }, []);

  function handleNavigate(nextId) {
    if (nextId === activeId) return;

    setActiveId(nextId);

    if (reduceMotion) {
      setVisibleId(nextId);
      setPanelColor(SECTION_COLORS[nextId]);
      setIsVisible(true);
      return;
    }

    setIsVisible(false);

    window.setTimeout(() => {
      setVisibleId(nextId);
      setPanelColor(SECTION_COLORS[nextId]);

      window.setTimeout(() => {
        setIsVisible(true);
      }, BACKGROUND_MS);
    }, FADE_MS);
  }

  return (
    <div className="min-h-screen bg-stone-100 font-body text-ink">
      <Sidebar
        items={NAV_ITEMS}
        activeId={activeId}
        activeIndex={activeIndex}
        onNavigate={handleNavigate}
      />
      <MobileNav
        items={NAV_ITEMS}
        activeId={activeId}
        onNavigate={handleNavigate}
      />
      <main
        className="content-panel min-h-screen md:ml-72"
        style={{ backgroundColor: panelColor }}
      >
        <div className="h-screen overflow-y-auto px-6 py-28 transition-opacity duration-150 ease-out motion-reduce:duration-[0.01ms] md:px-12 md:py-14 lg:px-20">
          <div className={isVisible ? "opacity-100" : "opacity-0"}>
            <SectionView sectionId={visibleId} />
          </div>
        </div>
      </main>
    </div>
  );
}
