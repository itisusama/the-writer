import {
  BookOpenText,
  PencilLine,
  ChartBar,
  Users2,
  Lock,
  Layers,
} from "lucide-react";

import { ui } from "@/barrel/ui";
import { FEATURES } from "@/lib/marketing";

export function Features() {
    const ICONS = {
  BookOpenText,
  PencilLine,
  ChartBar,
  Users2,
  Lock,
  Layers
};
  return (
    <section id="features" className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to share progress
        </h2>
        <p className="mt-2 text-muted-foreground">
          Simple, focused, and ready to scale with your team.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const Icon = ICONS[f.icon as keyof typeof ICONS] ?? ICONS["Layers"];
          return (
            <ui.Card key={f.title} className="h-full">
              <ui.CardContent className="flex h-full flex-col gap-3 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {f.description}
                </p>
              </ui.CardContent>
            </ui.Card>
          );
        })}
      </div>
    </section>
  );
}