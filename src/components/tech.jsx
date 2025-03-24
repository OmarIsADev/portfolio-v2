export default function Tech({ title, image, summary, description }) {
  return (
    <div id={title} className="group flex h-24 w-full flex-row items-center gap-6 rounded-lg border border-[var(--primary)] px-4 py-2 relative">
      <img className="col-span-1 h-16 w-16" src={image} alt={title} />
      <div className="col-span-3 flex w-full flex-col">
        <h2 className="text-xl">{title}</h2>
        <p className="text-sm">{summary}</p>
        <div
          style={{ width: document.getElementById(title)?.clientWidth }}
          className="absolute top-[calc(100%+10px)] z-10 h-0 overflow-hidden rounded-md border left-0 border-zinc-600 bg-[var(--primary)] p-0 opacity-0 transition-opacity group-hover:h-fit group-hover:p-4 group-hover:opacity-100"
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
