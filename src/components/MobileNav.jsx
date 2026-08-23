import { sidebar } from "../../content.js";
import Avatar from "./Avatar.jsx";

export default function MobileNav({ items, activeId, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-[#fbf7f1]/95 px-4 py-3 shadow-[0_1px_0_rgba(43,43,43,0.08)] md:hidden">
      <div className="flex items-center gap-3">
        <Avatar photo={sidebar.photo} name={sidebar.name} size="small" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-xl">
            {sidebar.name?.trim() || "Your Name"}
          </p>
          <p className="truncate text-xs text-stone-600">
            {sidebar.tagline?.trim() || "Software engineer & lifelong learner"}
          </p>
        </div>
      </div>
      <nav
        className="mt-3 flex gap-2 overflow-x-auto pb-1"
        aria-label="Portfolio sections"
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={activeId === item.id ? "page" : undefined}
            onClick={() => onNavigate(item.id)}
            className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-iris ${
              activeId === item.id
                ? "bg-stone-300/75 text-stone-950"
                : "bg-stone-200/75 text-stone-700 hover:bg-stone-300/60"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
