import { Link } from "react-router-dom";
import { ui } from "@/barrel/ui";
import { icons } from "@/barrel/icons";

export function CTA() {
  return (
    <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-to-linear from-warm-100 via-cream-100 to-warm-50 rounded-3xl p-10 md:p-16 text-center border border-warm-200/50 relative overflow-hidden">
            <div className="absolute top-4 right-6 text-4xl opacity-20 animate-float">✨</div>
            <div className="absolute bottom-4 left-6 text-3xl opacity-20 animate-float delay-200">📝</div>

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-950 mb-4">
                Ready to Tell Your Story?
              </h2>
              <p className="text-ink-600 max-w-lg mx-auto mb-8 font-story">
                Every great novel started with a single sentence. Every writer started as a beginner.
                Your story deserves to be told — and we'd love to read it.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/browse">
                  <ui.Button variant="outline">
                    <icons.Heart className="w-4 h-4" />
                    Read Stories First
                  </ui.Button>
                </Link>
                <Link to="/register">
                  <ui.Button>
                    <icons.Users className="w-4 h-4" />
                    Join The Writer
                  </ui.Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}