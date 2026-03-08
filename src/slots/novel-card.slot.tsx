import { type ReactNode } from "react";
import { ui } from "@/barrel/ui";

type NovelCartSlotProps = {
  title: string;
  description: string;
  image?: ReactNode;
  footer?: ReactNode;
};

const NovelCartSlot = ({
  title,
  description,
  image,
  footer,
}: NovelCartSlotProps) => {
  return (
    <ui.Card className="overflow-hidden transition hover:shadow-lg">
      {image && (
        <div className="w-full">
          {image}
        </div>
      )}

      <ui.CardHeader>
        <ui.CardTitle>{title}</ui.CardTitle>
        <ui.CardDescription>{description}</ui.CardDescription>
      </ui.CardHeader>

      {footer && (
        <ui.CardFooter className="flex justify-between items-center">
          {footer}
        </ui.CardFooter>
      )}
    </ui.Card>
  );
};

export default NovelCartSlot;