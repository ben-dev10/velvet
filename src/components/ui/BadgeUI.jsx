// eslint-disable-next-line react/prop-types
export default function BadgeUI({ text, accent, size = 12, children }) {
  const accentVariants = {
    accent: "border-accent/50 text-accent",
    "accent-dark": "border-accent/80 text-[#A18AFB]",
    gray: "text-gray-500",
    green: "border-green-500/50 text-green-600",
    blue: "border-blue-500/50 text-blue-600",
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
