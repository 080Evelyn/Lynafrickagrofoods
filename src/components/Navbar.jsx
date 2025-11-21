import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DistributorButton from "./ui/distributor-button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "#home", label: "Home" },
    { to: "#products", label: "Products" },
    { to: "#about", label: "About Us" },
    { to: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 w-full max-w-[1600px] z-50 max-md:px-2 bg-white/20 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="size-7.5 md:size-9" />
          <span className="font-medium tracking-tighter text-2xl text-gray-600">
            Lynafrick
            <span className="text-[#00d094] text-base align-baseline ms-2">
              Agro Foods
            </span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-800">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.to}
                className="hover:text-green-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex gap-4">
          <a
            href="#products"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-lime-700 hover:bg-lime-800 text-white"
            )}
          >
            Shop Now
          </a>
          <DistributorButton />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none w-6 h-6 flex flex-col justify-center items-center"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/20 backdrop-blur-md shadow-md transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center py-4 text-gray-800">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.to}
                className="hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li className="flex gap-4 mt-4">
            <a
              href="#products"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-lime-700 hover:bg-lime-800 text-white"
              )}
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </a>
            <DistributorButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
