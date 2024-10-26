import Image from "next/image";
import Link from "next/link";

import { EmailField } from "@/components/email-field";

import logo from "@/assets/logo-with-text.png";
import hero from "@/assets/hero-img.png";
import paypal from "@/assets/paypal.svg";
import google from "@/assets/google.svg";
import dropbox from "@/assets/dropbox.svg";

export const Header = () => {
  return (
    <header className="flex flex-col space-y-20 pt-6">
      {/* Menu */}
      <div className="flex items-center justify-between">
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
      </div>

      {/* Hero */}
      <div className="grid grid-cols-2 items-center gap-x-28">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-6xl leading-[80px] text-[#02073E]">
              A Creative way to grow your Exciting Business model
            </h1>
            <p className="max-w-[507px] text-lg leading-[42px] text-[#02073E]">
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
          </div>
          <EmailField />
          <div className="flex items-center gap-x-5">
            <p className="text-[#566272]">Sponsored by:</p>
            <div className="flex items-center gap-x-7">
              <Image src={paypal} alt="paypal-logo" />
              <Image src={google} alt="google-logo" />
              <Image src={dropbox} alt="dropbox-logo" />
            </div>
          </div>
        </div>
        <Image src={hero} alt="hero-img" />
      </div>
    </header>
  );
};
