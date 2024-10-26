import { Header } from "@/components/header";
import { Service } from "@/components/service";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl font-sans">
      <Header />
      <Service />
    </div>
  );
}
