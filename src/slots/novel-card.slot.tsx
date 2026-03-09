import { type ReactNode } from "react";
import { ui } from "@/barrel/ui";

type NovelCartSlotProps = {
  genre?: string;
  title: string;
  description: string;
  image?: ReactNode;
  authorName: string;
};

const NovelCartSlot = ({
  genre,  
  title,
  description,
  image,
  authorName,
}: NovelCartSlotProps) => {
  return (
    <ui.Card className="overflow-hidden transition hover:shadow-lg">
      {image && (
        <div className="w-full">
          {image}
        </div>
      )}

      <ui.CardHeader>
        <ui.Badge variant="outline" className="mb-2">
          {genre}
        </ui.Badge>
        <ui.CardTitle>{title}</ui.CardTitle>
        <ui.CardDescription>{description}</ui.CardDescription>
      </ui.CardHeader>
      <div className="px-4"><hr /></div>
        <ui.CardFooter className="flex justify-between items-center">
          <div>
            By: {authorName}
          </div>
        </ui.CardFooter>
    </ui.Card>
  );
};

export default NovelCartSlot;