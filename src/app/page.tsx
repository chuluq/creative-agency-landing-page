import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Service } from "@/components/service";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Service />
      <Features />
    </div>
  );
}
