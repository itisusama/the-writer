import { Link } from "react-router-dom";
import { ui } from "@/barrel/ui";

export function CTA() {
  return (
    <section className="container mx-auto px-6 pb-16">
      <div className="relative overflow-hidden rounded-xl border bg-linear-to-r from-primary/10 to-primary/5 p-8 sm:p-12">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-semibold">
            Ready to share your stories?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Spin up your first novel in seconds. No credit card required.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ui.Button asChild size="lg">
              <Link to="/register">Get Started</Link>
            </ui.Button>
            <ui.Button asChild size="lg" variant="outline">
              <Link to="/login">Log in</Link>
            </ui.Button>
          </div>
        </div>
      </div>
    </section>
  );
}