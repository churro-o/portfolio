import { sidebar } from "../../content.js";
import Avatar from "./Avatar.jsx";

export default function Sidebar({ items, activeId, activeIndex, onNavigate }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 flex-col bg-[#fbf7f1] px-8 py-9 shadow-[1px_0_0_rgba(43,43,43,0.08)] md:flex">
      <div className="flex flex-col items-start gap-4">
        <Avatar photo={sidebar.photo} name={sidebar.name} />
        <div>
          <p className="font-heading text-3xl leading-tight">
            {sidebar.name?.trim() || "Your Name"}
          </p>
          <p className="mt-2 max-w-48 text-sm leading-6 text-stone-600">
            {sidebar.tagline?.trim() || "Software engineer & lifelong learner"}
          </p>
        </div>
      </div>

      <nav className="mt-12" aria-label="Portfolio sections">
        <div className="relative flex flex-col items-start gap-3">
          <span
            aria-hidden="true"
            className="absolute left-0 rounded-full bg-stone-300/70 transition-transform duration-200 ease-out motion-reduce:duration-[0.01ms]"
            style={{
              width: "0.55rem",
              height: "0.55rem",
              transform: `translate(-1.15rem, ${activeIndex * 2.95 + 0.9}rem)`,
            }}
          />
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-current={activeId === item.id ? "page" : undefined}
              onClick={() => onNavigate(item.id)}
              className={`rounded-full px-4 py-2 text-left text-sm font-semibold transition-colors duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-iris focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf7f1] ${
                activeId === item.id
                  ? "bg-stone-300/70 text-stone-950"
                  : "bg-stone-200/70 text-stone-700 hover:bg-stone-300/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
}
