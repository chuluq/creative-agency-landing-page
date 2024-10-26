import Image, { StaticImageData } from "next/image";

import marketplace from "@/assets/marketplace.png";
import gift from "@/assets/gift.png";
import award from "@/assets/award.png";

export const Service = () => {
  return (
    <section
      id="service"
      className="container mx-auto max-w-screen-xl space-y-36 py-28"
    >
      <div className="flex flex-col items-center gap-y-3 text-center">
        <h2 className="font-serif text-3xl text-[#0F2137]">
          Go Beyond unlimited features
        </h2>
        <p className="max-w-[583px] leading-[35px] text-[#0F2137]">
          Focus only on the meaning, we take care of the design. As soon as the
          meeting end you can export in one click into your preferred format.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-14">
        <ServiceItem
          img={marketplace}
          title="Trusted marketplace"
          caption="Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases."
        />
        <ServiceItem
          img={gift}
          title="Multiple Awards wins"
          caption="Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases."
        />
        <ServiceItem
          img={award}
          title="Trusted marketplace"
          caption="Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases."
        />
      </div>
    </section>
  );
};

interface ServiceItem {
  img: StaticImageData;
  title: string;
  caption: string;
}

const ServiceItem = ({ img, title, caption }: ServiceItem) => {
  return (
    <div className="flex max-w-96 items-start gap-x-7">
      <Image src={img} alt={title} className="size-12" />
      <div className="space-y-4">
        <h6 className="text-lg font-medium text-[#0F2137]">{title}</h6>
        <p className="text-[#343D48]">{caption}</p>
      </div>
    </div>
  );
};
