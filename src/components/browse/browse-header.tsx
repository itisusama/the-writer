import { icons } from "@/barrel/icons"
import { ui } from "@/barrel/ui"
import { Clock, Search, TrendingUp } from "lucide-react"
import { useState } from "react";

const BrowseHeader = () => {
    const [sortBy, setSortBy] = useState('latest');
  return (
    <div className="bg-linear-to-b from-warm-50/80 to-cream-50 border-b border-warm-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* head */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-warm-100/80 text-warm-700 rounded-full text-xs font-medium mb-4">
              <ui.Badge>
                <icons.Sparkles className="w-3 h-3" />
                stories to explore
              </ui.Badge>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-ink-950 mb-3">
              Browse Stories
            </h1>
            <p className="text-ink-500 font-story">
              Discover tales that transport, inspire, and move you.
              Every story here was crafted with love by a fellow dreamer.
            </p>
          </div>
          {/* search */}
           <div className="mt-8 flex flex-col md:flex-row gap-3">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
              <input
                type="text"
                value="#"
                placeholder="Search stories, authors, genres..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-warm-200/60 rounded-xl text-sm text-ink-800 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-warm-400/50 focus:border-warm-400 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                value="#"
                className="px-3 py-2.5 bg-white border border-warm-200/60 rounded-xl text-sm text-ink-700 focus:outline-none focus:ring-2 focus:ring-warm-400/50 transition-all"
              >
                  <option key="genre" value="genre">Genre</option>
              </select>
              <div className="flex bg-white border border-warm-200/60 rounded-xl overflow-hidden">
                <button
                  className={`px-3 py-2.5 text-sm flex items-center gap-1 transition-colors ${
                    sortBy === 'latest' ? 'bg-warm-100 text-warm-700' : 'text-ink-500 hover:text-ink-700'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" /> Latest
                </button>
                <button
                  onClick={() => setSortBy('popular')}
                  className={`px-3 py-2.5 text-sm flex items-center gap-1 transition-colors ${
                    sortBy === 'popular' ? 'bg-warm-100 text-warm-700' : 'text-ink-500 hover:text-ink-700'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" /> Popular
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default BrowseHeader
