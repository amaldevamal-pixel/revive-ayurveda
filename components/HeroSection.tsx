import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

export default function HeroSection() {

  const heroMessage = `
Hello, I would like to book an Ayurvedic appointment at Revive Ayurveda Munroe Island.

Please share available timings and treatment details.
`;

  return (
    <section className="bg-[var(--background)] overflow-hidden">

      {/* ===================== DESKTOP ===================== */}
      <div className="hidden lg:grid max-w-6xl mx-auto px-6 py-20 grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="animate-left">
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
            Authentic Kerala Ayurvedic Clinic
          </p>

          <h1 className="mt-6 text-5xl xl:text-6xl font-bold leading-tight text-[var(--primary)]">
            Revive Ayurveda
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
            Traditional Ayurvedic treatments designed to restore balance,
            improve vitality, and support long-term natural healing.
          </p>

          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <p className="animate-up delay-200">✔ Certified Ayurvedic Practitioner</p>
            <p className="animate-up delay-400">✔ Personalized Treatment Plans</p>
            <p className="animate-up delay-600">✔ Pure Herbal Medicines</p>
          </div>

          {/* SINGLE CTA */}
          <div className="mt-10">
            <a
              href={whatsappLink(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative w-full max-w-md justify-self-end aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl animate-right">
          <Image
            src="/shirodhara.jpg"
            alt="Shirodhara Ayurvedic Therapy at Revive Ayurveda Munroe Island"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="relative lg:hidden w-full min-h-screen overflow-hidden">

        <div className="absolute inset-0 animate-zoom">
          <Image
            src="/shirodhara.jpg"
            alt="Shirodhara Ayurvedic Therapy"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 py-20 text-white animate-up">

          <p className="text-xs tracking-[0.25em] uppercase text-orange-300 font-medium">
            Authentic Kerala Ayurvedic Clinic
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight">
            Revive Ayurveda
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/90">
            Traditional Ayurvedic treatments designed to restore balance,
            improve vitality, and support long-term natural healing.
          </p>

          <div className="mt-6 space-y-2 text-sm text-white/90">
            <p className="animate-up delay-200">✔ Certified Ayurvedic Practitioner</p>
            <p className="animate-up delay-400">✔ Personalized Treatment Plans</p>
            <p className="animate-up delay-600">✔ Pure Herbal Medicines</p>
          </div>

          {/* SINGLE CTA */}
          <div className="mt-8">
            <a
              href={whatsappLink(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium block text-center bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg"
            >
              Book Appointment
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}