import Image from "next/image";

import boost from "@/assets/boost-illustration.png";
import knowledge from "@/assets/knowledge-illustration.png";
import avatar from "@/assets/user-avatar.png";
import done from "@/assets/done.svg";

export const Features = () => {
  return (
    <section id="features">
      <div className="bg-[#F9FAFC] py-16">
        <div className="container mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-x-36">
          <Image src={boost} alt="illustration" />
          <div className="flex max-w-[511px] flex-col gap-y-7">
            <h2 className="font-serif text-[40px] text-[#0F2137]">
              We help you to boost your business profitable with our talent
              marketer
            </h2>
            <p className="text-lg leading-relaxed text-[#02073E]">
              Get your tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-x-3">
                <Image src={done} alt="done" />
                <p className="font-medium text-[#02073E]">
                  Unlimited design possibility
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image src={done} alt="done" />
                <p className="font-medium text-[#02073E]">
                  Completely responsive features
                </p>
              </div>
            </div>
            <a href="https://google.com" className="text-[#3183FF]">
              Explore Details {">"}
            </a>
          </div>
        </div>
        <div className="py-16">
          <div className="container mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-x-36">
            <Image src={knowledge} alt="illustration" className="order-last" />
            <div className="flex max-w-[511px] flex-col gap-y-7">
              <h2 className="font-serif text-[40px] text-[#0F2137]">
                We are committed to using fact-based knowledge to our customers
              </h2>
              <p className="text-lg leading-relaxed text-[#02073E]">
                Get your tests delivered at let home collect sample from the
                victory of the managments that supplies best design system
                guidelines ever. Get your tests delivered at let home collect
                sample.
              </p>
              <a href="https://google.com" className="text-[#3183FF]">
                Explore Details {">"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-28">
          <div className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl text-center font-serif text-[40px] text-[#0F2137]">
              More than thousand of user we have worldwide with happy feedback
            </h2>
            <p className="max-w-xl text-center leading-relaxed text-[#0F2137]">
              Focus only on the meaning, we take care of the design. As soon as
              the meeting end you can export in one click into your preferred.
            </p>
          </div>
          <Image src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};
