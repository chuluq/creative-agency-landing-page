import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HowItWorks } from "@/components/how-it-works";
import { Service } from "@/components/service";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Service />
      <Features />
      <HowItWorks />
      <Team />
      <div
        className="bg-pattern absolute left-1/2 h-[200px] w-[1290px] -translate-x-1/2 -translate-y-[87px] rounded-xl bg-[#183656] bg-[url('../assets/pattern.png')] bg-no-repeat px-16 py-11"
        role="banner"
      >
        <div className="flex items-center justify-between">
          <p className="font-serif text-4xl leading-relaxed text-white">
            Do you have any question? <br />
            Feel free to contact us
          </p>
          <button
            type="button"
            role="button"
            className="rounded bg-white px-10 py-5 uppercase text-[#183656]"
          >
            contact us now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
