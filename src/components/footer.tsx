import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import logo from "@/assets/logo-with-text.png";
import facebook from "@/assets/facebook.svg";
import x from "@/assets/x.svg";
import github from "@/assets/github.svg";
import dribbble from "@/assets/dribbble.svg";

export const Footer = () => {
  return (
    <footer className="bg-[#F9FAFC] pb-16 pt-56">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid grid-cols-5">
          <div className="flex flex-col">
            <Image src={logo} alt="logo" />
            <p className="mb-5 mt-6 text-sm text-[#0F2137]">
              Terms of use | Privacy
            </p>
            <p className="text-sm text-[#0F2137] opacity-60">
              Copyright by 2019 Redq, Inc
            </p>
          </div>
          <FooterLink
            title="About Us"
            link={[
              {
                href: "/",
                text: "support center",
              },
              {
                href: "/",
                text: "customer support",
              },
              {
                href: "/",
                text: "about us",
              },
              {
                href: "/",
                text: "copyright",
              },
            ]}
          />
          <FooterLink
            title="our information"
            link={[
              {
                href: "/",
                text: "return policy",
              },
              {
                href: "/",
                text: "privacy policy",
              },
              {
                href: "/",
                text: "terms & conditions",
              },
              {
                href: "/",
                text: "site map",
              },
            ]}
          />
          <FooterLink
            title="my account"
            link={[
              {
                href: "/",
                text: "press inquiries",
              },
              {
                href: "/",
                text: "social media",
              },
              {
                href: "/",
                text: "directories",
              },
              {
                href: "/",
                text: "images & B-roll",
              },
            ]}
          />
          <FooterLink
            title="connect"
            link={[
              {
                href: "https://facebook.com",
                text: "facebook",
                icon: facebook,
              },
              {
                href: "https://x.com",
                text: "x",
                icon: x,
              },
              {
                href: "https://github.com",
                text: "github",
                icon: github,
              },
              {
                href: "https://dribbble.com",
                text: "dribbble",
                icon: dribbble,
              },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

interface FooterLink {
  title: string;
  link: {
    href: string;
    text: string;
    icon?: StaticImageData;
  }[];
}

const FooterLink = ({ title, link }: FooterLink) => {
  return (
    <div className="space-y-7">
      <h6 className="text-lg font-medium capitalize text-[#0F2137]">{title}</h6>
      <div className="flex flex-col gap-y-5">
        {link.map((link, index) => (
          <div key={index} className="flex items-center gap-[14px]">
            {link.icon ? (
              <Image src={link.icon} alt="icon" className="size-5" />
            ) : null}
            <Link
              href={link.href}
              className="capitalize text-[#02073E] opacity-80"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
