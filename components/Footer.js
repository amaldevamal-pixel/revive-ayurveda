
import { whatsappLink } from "@/lib/whatsapp";
import { Instagram } from "lucide-react";
export default function Footer() {

    const footerMessage = `
Hello, I found Revive Ayurveda Munroe Island through your website.

I would like to enquire about Ayurvedic treatments, packages and availability.

Please share details and booking information.
`;
  return (
    <footer className="bg-[var(--primary)] text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold">
              Revive Ayurveda
            </h3>

            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Authentic Kerala Ayurvedic treatments in the peaceful
              backwaters of Munroe Island. Natural healing guided by
              traditional wisdom and personalized care.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>

         <ul className="space-y-2 text-sm text-white/80">
  <li><a href="#" className="hover:text-white">Home</a></li>
  <li><a href="#packages" className="hover:text-white">Packages</a></li>
  <li><a href="#whyus" className="hover:text-white">Why Us</a></li>
  <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
  <li><a href="#location" className="hover:text-white">Location</a></li>
</ul>
          </div>

          {/* CONTACT */}
        {/* CONTACT */}
<div>
  <h4 className="font-semibold mb-4">Contact</h4>

  <ul className="space-y-3 text-sm text-white/80">

    <li>
      📍 Olatharakadavu,<br />
      Munroe Island, Kerala 691502
    </li>

    <li>
      📞 <a href="tel:+91XXXXXXXXXX" className="hover:text-white">
        +91 9895832323
      </a>
    </li>

      <li>
      📞 <a href="tel:+91XXXXXXXXXX" className="hover:text-white">
        +91 8848021506
      </a>
    </li>

    <li>
      📧 <a
        href="mailto:care@reviveayurveda.in"
        className="hover:text-white underline-offset-2 hover:underline"
      >
        care@reviveayurveda.in
      </a>
    </li>

<a
  href="https://www.instagram.com/reviveayurvedamundro?utm_source=qr&igsh=a2hmNGwwdWNnN3pw"
  target="_blank"
  rel="me noopener noreferrer"
  className="
    flex items-center gap-2
    px-3 py-2
    rounded-full
    bg-white/10
    backdrop-blur
    text-white
    hover:bg-gradient-to-r
    hover:from-pink-500
    hover:to-purple-500
    transition-all duration-300
  "
>
  <Instagram size={18} />
  <span className="text-sm">Instagram</span>
</a>

  </ul>
</div>

          {/* VISIT INFO */}
          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>Daily: 9:00 AM – 7:00 PM</li>
              <li>Walking guests welcome</li>
              <li>Registration before 6:00 PM</li>
              <li>After 7 PM by appointment</li>
            </ul>

            <a
              href={whatsappLink(footerMessage)}
              target="_blank"
              className="inline-block mt-6 bg-white text-[var(--primary)] px-5 py-2 rounded-full text-sm font-medium"
            >
              WhatsApp Now
            </a>



          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">

          <p>
            © {new Date().getFullYear()} Revive Ayurveda Munroe Island. All rights reserved.
          </p>

          <p>
            Designed for authentic Ayurvedic wellness experiences in Kerala.
          </p>

        </div>

      </div>
      
    </footer>
  );
}