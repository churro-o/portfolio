export default function Avatar({ photo, name, size = "large" }) {
  const dimensions = size === "small" ? "h-11 w-11" : "h-20 w-20";
  const label = name?.trim() || "Portfolio avatar";

  if (photo?.trim()) {
    return (
      <img
        src={photo}
        alt={`${label} photo`}
        className={`${dimensions} shrink-0 rounded-full object-cover ring-2 ring-white/80`}
      />
    );
  }

  return (
    <div
      aria-label="Profile photo placeholder"
      role="img"
      className={`${dimensions} grid shrink-0 place-items-center rounded-full bg-stone-200 text-sm font-semibold text-stone-600 ring-2 ring-white/80`}
    >
      {name?.trim()?.slice(0, 1).toUpperCase() || "P"}
    </div>
  );
}
