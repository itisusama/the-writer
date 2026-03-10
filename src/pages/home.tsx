import { slots } from "@/barrel/slots";
import { ui } from "@/barrel/ui";

const Home = () => {
  return (
    <>
    <ui.Hero/>
    <ui.Features/>
  <div className="grid grid-cols-4 gap-3">
      <slots.NovelCard
    genre="Thriller"
  title="The Silent Kingdom"
  image={<img src="https://picsum.photos/seed/picsum/200/300" alt="The Silent Kingdom" className="w-full h-auto object-cover"/>}
  description="A fantasy novel about a lost empire."
  authorName="Usama Hassan"
/>
  <slots.NovelCard
    genre="Thriller"
  title="The Silent Kingdom"
  image={<img src="https://picsum.photos/seed/picsum/200/300" alt="The Silent Kingdom" className="w-full h-auto object-cover"/>}
  description="A fantasy novel about a lost empire."
  authorName="Usama Hassan"
/>
  <slots.NovelCard
    genre="Thriller"
  title="The Silent Kingdom"
  image={<img src="https://picsum.photos/seed/picsum/200/300" alt="The Silent Kingdom" className="w-full h-auto object-cover"/>}
  description="A fantasy novel about a lost empire."
  authorName="Usama Hassan"
/>
  <slots.NovelCard
    genre="Thriller"
  title="The Silent Kingdom"
  image={<img src="https://picsum.photos/seed/picsum/200/300" alt="The Silent Kingdom" className="w-full h-auto object-cover"/>}
  description="A fantasy novel about a lost empire."
  authorName="Usama Hassan"
/>
  <slots.NovelCard
    genre="Thriller"
  title="The Silent Kingdom"
  image={<img src="https://picsum.photos/seed/picsum/200/300" alt="The Silent Kingdom" className="w-full h-auto object-cover"/>}
  description="A fantasy novel about a lost empire."
  authorName="Usama Hassan"
/>
  </div>
    <ui.Testimonial/>
    <ui.FAQ/>
    <ui.CTA/>
    </>
  );
};

export default Home;