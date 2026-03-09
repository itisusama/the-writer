import { ui } from "@/barrel/ui";
import { icons } from "@/barrel/icons";
import { Link } from "react-router-dom";

export default function Hero(){
    return(
         <section className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center space-y-8 text-center max-w-lg">
        <icons.BookOpenText className="h-20 w-20 text-primary" strokeWidth={1.5} />
        <div className="inline-flex rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
            New • Share Your Story to the World
          </div>
        <div className="space-y-3">
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Stories that show your progress in public
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A quiet corner of the internet where hobby novelists share their
            stories, one chapter at a time.
          </p>
        </div>

        <Link to="/browse">
          <ui.Button size="lg" className="gap-2 text-base px-8">
            Browse Stories
            <icons.ArrowRight className="h-4 w-4" />
          </ui.Button>
        </Link>
      </div>
    </section>
    )
}