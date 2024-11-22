export default function Link({ children, href, className, variant }) {
  return (
    <a
      href={href}
      className={`h-fit w-fit rounded-lg border border-primary px-3 py-2 text-[var(--color)] ${className} ${variant === "outline" ? "bg-transparent" : "bg-primary"}`}
    >
      {children}
    </a>
  );
}
