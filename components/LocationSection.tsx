export default function LocationSection() {
  return (
    <section id="location" className="bg-[var(--background)] py-24">

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* ================= MAP ================= */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl border border-black/5">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d955.933923192179!2d76.6238663895458!3d9.002693105420997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b060766c7bc4cc5%3A0x7e91ec65fcada030!2sRevive%20Ayurveda%20Munroe%20Island!5e1!3m2!1sen!2sin!4v1772356993509!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>

        </div>

        {/* ================= CONTENT ================= */}
        <div>

          <p className="text-sm tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
            Visit Us
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--primary)] leading-tight">
            Easily Reach Revive Ayurveda <br />
            in Munroe Island
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Revive Ayurveda is located in the peaceful backwaters of Munroe
            Island, Kerala — a calm destination easily accessible for travelers
            arriving by train, taxi, or local transport.
          </p>

          {/* LOCATION DETAILS */}
          <div className="mt-8 space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <span>📍</span>
              <p className="text-gray-700">
                Revive Ayurveda, Olatharakadavu, Munroe Island, Kerala
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span>🚆</span>
              <p className="text-gray-700">
                <strong>Munroe Island Railway Station</strong> nearby —
                convenient access for tourists traveling across Kerala.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span>🚕</span>
              <p className="text-gray-700">
                Easy auto & taxi connectivity from Kollam and nearby towns.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span>✈️</span>
              <p className="text-gray-700">
                Nearest Airport: Trivandrum International Airport (approx. 2.5 hrs).
              </p>
            </div>

          </div>

          {/* CTA */}
          <a
            href="https://maps.google.com/?q=Revive+Ayurveda+Munroe+Island"
            target="_blank"
            className="inline-block mt-10 bg-[var(--primary)] text-white px-7 py-3 rounded-full text-sm font-medium shadow-lg hover:opacity-90 transition"
          >
            Open in Google Maps
          </a>

        </div>

      </div>
    </section>
  );
}