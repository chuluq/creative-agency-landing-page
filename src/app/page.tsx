import { Features } from "@/components/features";
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
    </div>
  );
}
