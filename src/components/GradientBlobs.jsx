// Ambient animated gradient blobs used behind section content for depth.
export default function GradientBlobs({ variant = 'default' }) {
  const positions = {
    default: [
      'top-[-10%] left-[-10%] bg-primary/30',
      'bottom-[-15%] right-[-10%] bg-secondary/20',
    ],
    reverse: [
      'top-[-10%] right-[-10%] bg-accent/25',
      'bottom-[-10%] left-[-15%] bg-primary/20',
    ],
  }

  const set = positions[variant] || positions.default

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute h-[26rem] w-[26rem] rounded-full blur-[110px] animate-blob ${set[0]}`} />
      <div
        className={`absolute h-[22rem] w-[22rem] rounded-full blur-[110px] animate-blob ${set[1]}`}
        style={{ animationDelay: '-4s' }}
      />
    </div>
  )
}
