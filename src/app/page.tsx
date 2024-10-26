import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-with-text.png";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl font-sans">
      <header className="flex items-center justify-between pt-6">
        <Link href="/">
          <Image src={logo} alt="creative-agency-logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="#pricing"
                className="font-medium capitalize text-[#0F2137]"
              >
                pricing
              </Link>
            </li>
            <li>
              <Link
                href="#support"
                className="font-medium capitalize text-[#0F2137]"
              >
                support
              </Link>
            </li>
            <li>
              <Link
                href="#register"
                className="font-medium capitalize text-[#0F2137]"
              >
                register
              </Link>
            </li>
            <li>
              <Link
                href="#get-started"
                className="font-bold capitalize text-[#F94962] underline underline-offset-8"
              >
                get started
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
