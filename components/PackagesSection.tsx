import Image from "next/image";

import { whatsappLink } from "@/lib/whatsapp";

export default function PackagesSection() {

 const enquiryMessage = (packageName: string) =>
  `Hello, I would like to enquire about the "${packageName}" at Revive Ayurveda Munroe Island. Please share availability, more details and appointment timings.`;
  return (
    <section id="packages" className="bg-[var(--background)] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ===================== SECTION HEADER ===================== */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
            Ayurvedic Healing Retreats
          </p>

          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[var(--primary)]">
            Signature Ayurvedic Packages in Munroe Island
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Personalized Kerala Ayurvedic programs designed for relaxation,
            detoxification and holistic rejuvenation during your stay in Munroe Island.
          </p>
        </div>

        {/* ===================== PREMIUM PROGRAMS ===================== */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">

  {/* 14 DAY PLAN */}
  <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[var(--primary)] relative">

    <span className="absolute -top-4 left-6 bg-[var(--primary)] text-white text-xs px-4 py-1 rounded-full">
      Most Popular
    </span>

    <h3 className="text-2xl font-bold text-[var(--primary)]">
      14-Day Panchakarma Rejuvenation Program
    </h3>

    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
      A complete Ayurvedic detox and rejuvenation retreat designed
      for deep body purification and holistic healing.
    </p>

    <div className="mt-6 space-y-3 text-sm text-gray-700">

      <div>
        <p className="font-medium text-[var(--primary)]">Rejuvenation Massage</p>
        <p className="text-gray-500">14 Sessions (Daily)</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Leaf Bundle Massage (Elakizhi)</p>
        <p className="text-gray-500">7 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Shirodhara Therapy</p>
        <p className="text-gray-500">7 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Pizhichil Therapy</p>
        <p className="text-gray-500">3 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Rice Bundle Massage</p>
        <p className="text-gray-500">4 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Karnapooranam & Anjanam</p>
        <p className="text-gray-500">2 Sessions Each</p>
      </div>

    </div>

    <div className="mt-6 text-sm text-gray-500">
      Duration: 2 Hours Per Day
    </div>

    <div className="mt-2 text-lg font-semibold text-[var(--primary)]">
      ₹28,000 / USD 320
    </div>

    <a
      href={whatsappLink(enquiryMessage("14-Day Panchakarma Rejuvenation Program"))}
     target="_blank"
rel="noopener noreferrer"
      className="mt-6 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-full text-sm font-medium"
    >
      Book 14-Day Retreat
    </a>
  </div>

  {/* 7 DAY PLAN */}
  <div className="bg-white rounded-3xl p-8 shadow-lg border border-black/5">

    <h3 className="text-2xl font-bold text-[var(--primary)]">
      7-Day Rejuvenation Program
    </h3>

    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
      A structured one-week Ayurvedic healing program ideal for
      relaxation, stress relief and balance restoration.
    </p>

    <div className="mt-6 space-y-3 text-sm text-gray-700">

      <div>
        <p className="font-medium text-[var(--primary)]">Rejuvenation Massage</p>
        <p className="text-gray-500">7 Sessions (Daily)</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Leaf Bundle Massage</p>
        <p className="text-gray-500">4 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Shirodhara Therapy</p>
        <p className="text-gray-500">4 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Pizhichil Therapy</p>
        <p className="text-gray-500">3 Sessions</p>
      </div>

      <div>
        <p className="font-medium text-[var(--primary)]">Karnapooranam & Anjanam</p>
        <p className="text-gray-500">2 Sessions Each</p>
      </div>

    </div>

    <div className="mt-6 text-sm text-gray-500">
      Duration: 2 Hours Per Day
    </div>

    <div className="mt-2 text-lg font-semibold text-[var(--primary)]">
      ₹18,000 / USD 205
    </div>

    <a
      href={whatsappLink(enquiryMessage("7-Day Rejuvenation Program"))}
      target="_blank"
rel="noopener noreferrer"
      className="mt-6 inline-block border border-[var(--primary)] text-[var(--primary)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--primary)] hover:text-white transition"
    >
      Book 7-Day Program
    </a>
  </div>

</div>

{/* ===================== SHORT EXPERIENCE PACKAGES ===================== */}
<div className="mt-24">

  <h3 className="text-3xl font-bold text-[var(--primary)] text-center">
    Short Stay Ayurvedic Experiences
  </h3>

  <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-sm">
    Perfect for travelers visiting Munroe Island seeking authentic Kerala Ayurvedic therapies.
  </p>

  <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CARD TEMPLATE */}
    {/* 1 - Foot Massage */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

<div className="relative w-full aspect-[4/3]">
      <Image
  src="/foot-massage.jpg"
  alt="Foot Massage Reflexology therapy at Revive Ayurveda Munroe Island"
  fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
/>
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          Foot Massage Reflexology
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Ayurvedic Foot Reflexology Therapy</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Duration: 30 Minutes
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹1,200 / USD 14
        </div>

        <a
          href={whatsappLink(enquiryMessage("Foot Massage Reflexology"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>


    {/* 2 - Abhyanga */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/abhyanga.jpg"
          alt="Ayurvedic Body Massage and Steam"
        fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          Abhyanga, Steam & Kashayadhara
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Ayurvedic Body Massage (30 Min)</p>
          <p>• Herbal Steam Therapy (10 Min)</p>
          <p>• Kashayadhara (20 Min)</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Duration: 60 Minutes
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹2,000 / USD 25
        </div>

        <a
          href={whatsappLink(enquiryMessage("Abhyanga, Steam & Kashayadhara"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>


    {/* 3 - Elakizhi */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

     <div className="relative w-full aspect-[4/3]">
        <Image
          src="/elakizhi.jpg"
          alt="Elakizhi Leaf Bundle Therapy"
         fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          Elakizhi Therapy Package
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Ayurvedic Body Massage (30 Min)</p>
          <p>• Elakizhi – Leaf Bundle Therapy (20 Min)</p>
          <p>• Herbal Steam (10 Min)</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Duration: 60 Minutes
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹2,500 / USD 30
        </div>

        <a
          href={whatsappLink(enquiryMessage("Elakizhi Therapy Package"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>


    {/* 4 - Relaxation */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

     <div className="relative w-full aspect-[4/3]">
        <Image
          src="/relaxation.jpg"
          alt="Relaxation Ayurvedic Programme"
        fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          Relaxation Programme
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Relaxation Massage</p>
          <p>• Head & Face Massage</p>
          <p>• Shirodhara (Butter Milk)</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Duration: 60 Minutes
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹3,000 / USD 35
        </div>

        <a
          href={whatsappLink(enquiryMessage("Relaxation Programme"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>


    {/* 5 - Rejuvenation Day */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/rejuvenation-day.jpg"
          alt="Rejuvenation Day Plan"
           fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          Rejuvenation Day Plan
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Rejuvenation Massage</p>
          <p>• Leaf Bundle Massage</p>
          <p>• Shirodhara</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Duration: 105 Minutes
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹5,000 / USD 60
        </div>

        <a
          href={whatsappLink(enquiryMessage("Rejuvenation Day Plan"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>


    {/* 6 - 3 Day Plan */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/rejuvenation-3day.jpg"
          alt="3 Day Rejuvenation Experience"
           fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          3-Day Rejuvenation Experience
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Rejuvenation Massage (3 Sessions)</p>
          <p>• Leaf Bundle Massage (2 Sessions)</p>
          <p>• Shirodhara (3 Sessions)</p>
          <p>• Pizhichil (1 Session)</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          2.5 Hours Per Day
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹15,000 / USD 170
        </div>

        <a
          href={whatsappLink(enquiryMessage("3-Day Rejuvenation Experience"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>


    {/* 7 - Couple Package */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">

      <div className="relative w-full aspect-[4/3]">
        <Image
          src="/couple-package.jpg"
          alt="Couple Ayurvedic Wellness Package"
          fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
  quality={75}
  loading="lazy"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-[var(--primary)]">
          Couple Wellness Package
        </h4>

        <div className="mt-3 text-sm text-gray-700 space-y-1">
          <p>• Rejuvenation Massage (30 Min)</p>
          <p>• Ayurvedic Facepack (15 Min)</p>
          <p>• Njavarakizhi (20 Min)</p>
          <p>• Shirodhara (25 Min)</p>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Duration: 90 Minutes
        </div>

        <div className="mt-1 font-semibold text-[var(--primary)]">
          ₹10,000 / USD 120
        </div>

        <a
          href={whatsappLink(enquiryMessage("Couple Wellness Package"))}
          target="_blank"
rel="noopener noreferrer"
          className="mt-5 inline-block text-sm text-[var(--primary)] font-medium"
        >
          Enquire Now →
        </a>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}