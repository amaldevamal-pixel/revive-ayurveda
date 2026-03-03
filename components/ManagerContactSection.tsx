import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export default function ManagerContactSection() {

  const managerMessage = `
Hello, I found Revive Ayurveda Munroe Island through your website.

I would like to speak with the Centre Manager regarding treatments and booking assistance.

Please share availability and further details.
`;

  return (
    <section id="contact" className="bg-[var(--background)] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg p-8 lg:p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Manager */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

              <div className="relative w-28 h-28 shrink-0">
                <Image
                  src="/manager.jpg"
                  alt="Centre Manager - Revive Ayurveda"
                  fill
                  sizes="112px"
                  className="rounded-full object-cover object-[center_40%] shadow-md"
                />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xs tracking-[0.25em] text-[var(--accent)] uppercase">
                  Centre Manager
                </p>

                <h3 className="text-2xl lg:text-3xl font-semibold text-[var(--primary)] mt-1">
                  Mr. Sreenath Udayan
                </h3>

                <p className="text-gray-600 mt-2">
                  Operations & Guest Relations
                </p>

                <p className="text-sm text-gray-500 mt-3 max-w-md">
                  Overseeing daily operations and guest coordination to ensure
                  authentic Kerala Ayurvedic experiences with personalized care.
                </p>
              </div>

            </div>

            {/* RIGHT — Contact */}
            <div className="border-t lg:border-t-0 lg:border-l border-black/10 pt-8 lg:pt-0 lg:pl-10">

              <h4 className="font-semibold text-[var(--primary)] text-lg mb-5">
                Contact Details
              </h4>

              <div className="space-y-4 text-gray-700 text-sm">

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-[var(--accent)]" />
                  <p>
                    Olatharakadavu,<br />
                    Munroe Island, Kerala 691502
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[var(--accent)]" />
                  <a href="tel:+919895832323" className="hover:text-[var(--primary)] transition">
                    +91 9895832323
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[var(--accent)]" />
                  <a href="tel:+918848021506" className="hover:text-[var(--primary)] transition">
                    +91 8848021506
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[var(--accent)]" />
                  <a
                    href="mailto:care@reviveayurveda.in"
                    className="hover:text-[var(--primary)] transition"
                  >
                    care@reviveayurveda.in
                  </a>
                </div>

              </div>

              {/* WhatsApp Button (Using Shared Utility) */}
              <div className="mt-8">
                <a
                  href={whatsappLink(managerMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
                >
                  WhatsApp Manager
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}