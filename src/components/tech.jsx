export default function Tech({title, image, description}) {
  return (
    <div className="flex flex-row gap-6 w-full h-24 items-center border border-[var(--primary)] rounded-lg px-4 py-2">
        <img className="col-span-1 h-16 w-16" src={image} alt={title} />
        <div className="col-span-3 flex flex-col">
            <h2 className="text-xl">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    </div>
  )
}
