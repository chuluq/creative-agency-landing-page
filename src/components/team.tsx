import Image from "next/image";

import team from "@/assets/team-photo.png";

export const Team = () => {
  return (
    <section className="container mx-auto max-w-screen-xl">
      <div className="flex flex-col items-center gap-12 py-[86px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="max-w-2xl text-center font-serif text-[40px] text-[#0F2137]">
            Meet our support team who always work hardly behind the scenes
          </h2>
          <p className="max-w-xl text-center text-[#0F2137]">
            Focus only on the meaning, we take care of the design. As soon as
            the meeting end you can export in one click into your preferred.
          </p>
        </div>
        <Image src={team} alt="team" />
      </div>
    </section>
  );
};
