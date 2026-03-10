import { useState } from "react";

const GenrePills = ({ genres } : { genres: string[] }) => {
      const [selectedGenre, setSelectedGenre] = useState('All');
  return (
      <div className="flex flex-wrap gap-2 mb-8 mt-6">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedGenre === g
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-ink-600 border border-warm-200/60 hover:bg-warm-50 hover:border-warm-300'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
  )
}

export default GenrePills
