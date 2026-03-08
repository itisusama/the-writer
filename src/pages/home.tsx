// import { slots } from "@/barrel/slots";
import { ui } from "@/barrel/ui";

const Home = () => {
  return (
    <>
    <ui.Hero/>
    <ui.Features/>
    {/* <slots.NovelCard
  title="The Silent Kingdom"
  description="A fantasy novel about a lost empire."
  footer={
    <ui.Button>Read More</ui.Button>
  }
/> */}
    <ui.FAQ/>
    <ui.CTA/>
    </>
  );
};

export default Home;