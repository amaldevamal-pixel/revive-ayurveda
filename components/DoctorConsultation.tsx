export default function DoctorConsultation() {
  return (
    <section className="bg-[var(--background)] py-16 lg:py-24">

     <div className="max-w-6xl mx-auto px-6">
  <div className="
    bg-white/70 backdrop-blur-sm
    rounded-3xl shadow-lg
    p-6 sm:p-8 lg:p-10
  ">

    {/* MOBILE LAYOUT */}
    <div className="lg:hidden space-y-6">

      {/* Doctor Info */}
      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-[var(--background)] flex items-center justify-center text-xl">
          🩺
        </div>

        <div>
          <p className="text-xs tracking-[0.25em] text-[var(--accent)] uppercase">
            Doctor Consultation
          </p>

          <h3 className="text-xl font-semibold text-[var(--primary)]">
            Dr. Gopu P.R
          </h3>

          <p className="text-sm text-gray-600">
            BAMS – Ayurvedic Physician
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        Traditional Kerala Ayurvedic consultation focused on natural healing,
        body balance, and personalized wellness treatments for travelers
        and long-stay guests.
      </p>

      {/* Divider */}
      <div className="border-t border-black/10"></div>

      {/* Opening Hours */}
      <div>
        <h4 className="font-semibold text-[var(--primary)] mb-2">
          Opening Hours
        </h4>

        <div className="text-sm text-gray-600 space-y-1">
          <p>Daily: 9:00 AM – 7:00 PM</p>
          <p>Walking guests are welcome</p>
          <p>Registration before 6:00 PM</p>
          <p>After 7 PM by appointments only</p>
        </div>
      </div>

    </div>

    {/* DESKTOP LAYOUT (unchanged style) */}
    <div className="hidden lg:grid grid-cols-2 gap-10 items-center">

      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-[var(--background)] flex items-center justify-center text-2xl">
          🩺
        </div>

        <div>
          <p className="text-sm tracking-[0.25em] text-[var(--accent)] uppercase">
            Doctor Consultation
          </p>

          <h3 className="text-3xl font-semibold text-[var(--primary)]">
            Dr. Gopu P.R
          </h3>

          <p className="text-gray-600">
            BAMS – Ayurvedic Physician
          </p>

          <p className="mt-2 text-gray-500 text-sm max-w-md">
            Traditional Kerala Ayurvedic consultation focused on natural healing,
            body balance, and personalized wellness treatments.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="border-l border-black/10 pl-10">
        <h4 className="font-semibold text-[var(--primary)] mb-3">
          Opening Hours
        </h4>

        <div className="text-sm text-gray-600 space-y-2">
          <p>Daily: 9:00 AM – 7:00 PM</p>
          <p>Walking guests are welcome</p>
          <p>Registration before 6:00 PM</p>
          <p>After 7 PM by appointments only</p>
        </div>
      </div>

    </div>

  </div>
</div>
    </section>
  );
}