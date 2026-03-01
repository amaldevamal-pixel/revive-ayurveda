export default function WhyUsSection() {
  return (
    <section id="whyus" className="bg-[var(--background)] py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
            Why Choose Revive Ayurveda
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary)]">
            Authentic Healing Experience in Munroe Island
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Combining traditional Kerala Ayurvedic wisdom with personalized care,
            we provide a peaceful and genuine healing experience for travelers
            seeking relaxation and rejuvenation.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card */}
          <div className="why-card">
            <div className="why-icon">🌿</div>
            <h3>Authentic Kerala Ayurveda</h3>
            <p>
              Traditional therapies performed using classical Ayurvedic
              methods and herbal oils prepared according to ancient practices.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">👨‍⚕️</div>
            <h3>Certified Ayurvedic Doctor</h3>
            <p>
              Treatments supervised by a qualified BAMS Ayurvedic physician
              ensuring safe and personalized healing.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🧘</div>
            <h3>Personalized Treatments</h3>
            <p>
              Every guest receives consultation-based therapies tailored to
              body type, lifestyle, and wellness goals.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🌴</div>
            <h3>Peaceful Island Environment</h3>
            <p>
              Located in serene Munroe Island surrounded by backwaters —
              ideal for relaxation and stress recovery.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">💬</div>
            <h3>Tourist Friendly Experience</h3>
            <p>
              Comfortable environment for international travelers with
              clear guidance and welcoming hospitality.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">✨</div>
            <h3>Holistic Wellness Approach</h3>
            <p>
              Focus on long-term balance combining massage, detox,
              rejuvenation, and mental relaxation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}