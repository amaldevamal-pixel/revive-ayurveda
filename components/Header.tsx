import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

export default function Header() {
const headerMessage =
  "Hello, I would like to enquire about Ayurvedic treatments at Revive Ayurveda Munroe Island. Please share available packages and timings.";

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur-md border-b border-black/5">

      {/* checkbox MUST wrap everything */}
      <div className="relative">

        {/* TOGGLE INPUT */}
        <input id="menu-toggle" type="checkbox" className="peer hidden" />

        {/* ================= TOP BAR ================= */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Revive Ayurveda Logo"
              width={45}
              height={45}
              priority
            />
            <span className="text-lg font-semibold text-[var(--primary)]">
              Revive Ayurveda
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#packages">Packages</a>
            <a href="#whyus">Why Us</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsappLink(headerMessage)}
rel="noopener noreferrer"
            target="_blank"
            className="hidden md:inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm"
          >
            WhatsApp
          </a>

          {/* Hamburger */}
          <label
            htmlFor="menu-toggle"
            className="md:hidden cursor-pointer flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-[var(--primary)]"></span>
            <span className="w-6 h-[2px] bg-[var(--primary)]"></span>
            <span className="w-6 h-[2px] bg-[var(--primary)]"></span>
          </label>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className="
            md:hidden
            max-h-0
            overflow-hidden
            transition-all
            duration-300
            peer-checked:max-h-[400px]
            border-t border-black/5
            bg-[var(--background)]
          "
        >
          <nav className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-gray-700">

            <a href="#packages">Packages</a>
            <a href="#whyus">Why Us</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>

            <a
              href={whatsappLink(headerMessage)}
rel="noopener noreferrer"
              target="_blank"
              className="bg-green-600 text-white text-center py-2 rounded-full mt-2"
            >
              WhatsApp Now
            </a>

          </nav>
        </div>

      </div>
    </header>
  );
}