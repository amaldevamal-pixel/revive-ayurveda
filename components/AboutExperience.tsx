import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

export default function AboutExperience() {

  const aboutMessage = `
Hello, I discovered Revive Ayurveda Munroe Island through your website.

I would like to know more about Ayurvedic treatments, consultation and available packages.

Please share details and available appointment timings.
`;
  return (
    <section id="about" className="bg-white py-20 lg:py-24 border-t border-black/5">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

     {/* ================= IMAGE ================= */}
<div className="relative">

  {/* Soft Glow Background (desktop only) */}
  <div className="absolute -inset-6 bg-[var(--accent)]/10 blur-2xl rounded-3xl hidden lg:block"></div>

  <div
    className="
      relative
      w-full
      aspect-[4/3]         /* Mobile ratio */
      lg:aspect-[4/5]      /* Desktop ratio */
      rounded-3xl
      overflow-hidden
      shadow-xl
    "
  >
  <Image
  src="/about-ayurveda.jpg"
  alt="Traditional Ayurvedic healing experience at Revive Ayurveda Munroe Island Kerala"
  fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         40vw"
  loading="lazy"
  quality={75}
  className="object-cover object-center lg:scale-100 scale-105"
/>
  </div>

</div>

        {/* ================= CONTENT ================= */}
        <div>

          <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
            The Revive Ayurveda Experience
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary)]">
            Authentic Ayurvedic Healing in Munroe Island Kerala
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            Located in the peaceful backwaters of Munroe Island, Revive Ayurveda
            offers a calm and authentic environment where traditional healing
            meets natural beauty. Away from crowded tourist centers, guests
            experience true Kerala Ayurveda in a quiet and restorative setting.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            Each treatment begins with Ayurvedic consultation and is designed
            to restore balance, improve vitality, and promote long-term wellness.
            Our therapies combine herbal oils, traditional techniques, and
            personalized care guided by experienced practitioners.
          </p>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">

            <div>
              <p className="text-[var(--primary)] font-semibold">✔ Natural Healing</p>
              <p className="text-gray-500">Traditional Ayurvedic therapies</p>
            </div>

            <div>
              <p className="text-[var(--primary)] font-semibold">✔ Peaceful Location</p>
              <p className="text-gray-500">Backwater island atmosphere</p>
            </div>

            <div>
              <p className="text-[var(--primary)] font-semibold">✔ Personalized Care</p>
              <p className="text-gray-500">Consultation-based treatments</p>
            </div>

            <div>
              <p className="text-[var(--primary)] font-semibold">✔ Authentic Experience</p>
              <p className="text-gray-500">Kerala tradition preserved</p>
            </div>

          </div>

          {/* ================= CTA ================= */}
          <div className="mt-10">
            <a
              href={whatsappLink(aboutMessage)}
              target="_blank"
rel="noopener noreferrer"
              className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Plan Your Healing Visit
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}