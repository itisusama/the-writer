import { ui } from "@/barrel/ui";
import { icons } from "@/barrel/icons";
import { useHomeHandlers } from "@/handlers/home.handlers";

const Home = () => {
  const { handleEnter } = useHomeHandlers();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center space-y-8 text-center max-w-lg">
        <icons.BookOpenText className="h-20 w-20 text-primary" strokeWidth={1.5} />

        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground">
            The Writer
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A quiet corner of the internet where hobby novelists share their
            stories, one chapter at a time.
          </p>
        </div>

        <ui.Button size="lg" onClick={handleEnter} className="gap-2 text-base px-8">
          Enter
          <icons.ArrowRight className="h-4 w-4" />
        </ui.Button>
      </div>

      <p className="absolute bottom-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Writer
      </p>
    </div>
  );
};

export default Home;