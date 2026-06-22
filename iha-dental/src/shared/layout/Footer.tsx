import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/logo.webp";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Brand Centerpiece */}
        <div className="border-t border-neutral-200 pt-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-6 md:gap-8">
              <img
                src={logo}
                alt="IHA Dental Logo"
                className="h-28 w-28 object-contain md:h-40 md:w-40 lg:h-52 lg:w-52"
              />

              <h1 className="select-none text-6xl font-black leading-none tracking-[-0.08em] text-neutral-950 md:text-[6rem] lg:text-[8.5rem]">
                IhaDental
              </h1>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 border-t border-neutral-200 pt-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* About */}
          <div>
            <p className="max-w-sm text-neutral-600 leading-7">
              Premium dental care focused on comfort, precision,
              and long-term oral health for every patient.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Creating confident smiles.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/ihadental"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-200 p-3 transition-all duration-300 hover:bg-neutral-100 hover:scale-105"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61590874553431"
                className="rounded-full border border-neutral-200 p-3 transition-all duration-300 hover:bg-neutral-100 hover:scale-105"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-neutral-900">
              Contact
            </h4>

            <div className="space-y-3 text-neutral-600">
              <p>+91 93630 06440</p>
              <p>ihadentalhospital@gmail.com</p>
              <p>
                290/19, Anna Salai,
                <br />
                Patteeswaram,
                <br />
                Kumbakonam 612703
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-neutral-900">
              Clinic Hours
            </h4>

            <div className="space-y-3 text-neutral-600">
              <p>Monday – Saturday</p>
              <p>10:00 AM – 2:00 PM</p>
              <p>5:00 PM – 9:00 PM</p>

              <p className="pt-2 text-sm text-neutral-400">
                Sunday Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} IHA Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}