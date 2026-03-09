import { icons } from "lucide-react"

const Testimonial = () => {
  return (
    <section className="py-20 bg-linear-to-br from-ink-950 to-ink-900 text-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-10 left-10 text-8xl">✦</div>
          <div className="absolute bottom-10 right-10 text-6xl">✦</div>
          <div className="absolute top-1/2 left-1/2 text-9xl transform -translate-x-1/2 -translate-y-1/2">✦</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <icons.Quote className="w-10 h-10 text-warm-400 mx-auto mb-6 opacity-60" />
          <blockquote className="font-story text-xl md:text-2xl leading-relaxed text-cream-200 italic mb-8">
            "The Writer gave me a place where my stories feel valued. I came here with half-finished drafts
            and self-doubt. I found a community that cheered for every chapter, every messy first draft,
            every brave 'The End.' This isn't just a platform — it's home for my imagination."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <p className="font-medium text-cream-100">Anonymous</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial
