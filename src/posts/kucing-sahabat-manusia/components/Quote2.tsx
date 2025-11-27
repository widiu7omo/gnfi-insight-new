import { Paragraph } from "@/components/post/paragraph";
import Ornament1 from "./Ornament5a";
import Ornament2 from "./Ornament5b";
import Ornament3 from "./Ornament5c";

export default function Quote2() {
  return (
    <div className="space-y-8 py-24 flex bg-white overflow-hidden">
      <div className="bg-white md:block hidden w-[calc((100%-65ch)/2)]" />
      <Paragraph
        className={"text-[#353434] relative flex flex-grow flex-col !pr-6"}
      >
        <>
          <p>Ada pula sabda Nabi Muhammad ﷺ sebagai berikut:</p>
          <Ornament1 />
          <p className={"font-semibold lg:text-xl xl:text-2xl"}>
            Ada seorang wanita disiksa disebabkan seekor kucing yang dikurungnya
            hingga mati kelaparan, lalu wanita itu pun masuk neraka karena dia
            tidak memberinya makan dan minum ketika mengurungnya, dan tidak
            melepaskannya, sehingga dia dapat menyantap serangga tanah.
          </p>
          <Ornament2 />
          <Ornament3 />
        </>
      </Paragraph>
      <div className="bg-[#D9D9D9] md:block hidden w-[calc((100%-65ch)/2)]" />
    </div>
  );
}
