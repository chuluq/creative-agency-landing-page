export const HowItWorks = () => {
  return (
    <section>
      <div className="bg-[#F9FAFC] pb-44 pt-20">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-y-36">
            <div className="flex flex-col items-center gap-3">
              <h2 className="font-serif text-3xl text-[#0F2137]">
                Let’s meet how its work
              </h2>
              <p className="max-w-xl text-center text-[#0F2137]">
                Focus only on the meaning, we take care of the design. As soon
                as the meeting end you can export in one click into your
                preferred format.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-14">
              <Item
                number="01"
                title="Connect with support"
                caption="Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases."
              />
              <Item
                number="02"
                title="Explain you business idea"
                caption="Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases."
              />
              <Item
                number="03"
                title="Be partner & earn money"
                caption="Our homes are designed to be move-in ready. Think furnished common areas, super fast wifi, and flexible leases."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Item {
  number: string;
  title: string;
  caption: string;
}

const Item = ({ number, title, caption }: Item) => {
  return (
    <div className="flex max-w-96 items-start gap-x-7">
      <h3 className="text-5xl text-[#0F2137]">{number}</h3>
      <div className="space-y-2">
        <h6 className="text-lg font-medium text-[#0F2137]">{title}</h6>
        <p className="text-[#343D48]">{caption}</p>
      </div>
    </div>
  );
};
