// eslint-disable-next-line react/prop-types
export default function BadgeUI({ text, accent, size = 12, children }) {
  const accentVariants = {
    accent: "border-accent/50 text-accent",
    "accent-dark": "border-accent/70 text-[#A18AFB]",
    white: "border-white/50 text-white",
  };

  return (
    <div
      className={`badge-ui px-2 flex items-center rounded-full border text-[${size}px] max-w-max font-semibold ${accentVariants[accent]}`}
    >
      {text}
      {children}
    </div>
  );
}
