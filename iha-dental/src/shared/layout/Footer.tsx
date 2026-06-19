import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Brand */}
        <div className="border-t border-neutral-200 pt-10">
          <h1 className="select-none text-center text-[4rem] font-black leading-none tracking-[-0.08em] text-neutral-950 md:text-[8rem] lg:text-[10rem]">
            IhaDental
          </h1>
        </div>

        {/* Footer Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-neutral-200 pt-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* About */}
          <div>
            <p className="max-w-sm text-neutral-600">
              Premium dental care focused on comfort, precision,
              and long-term oral health for every patient.
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Creating confident smiles.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/ihadental"
                className="rounded-full border border-neutral-200 p-2 transition hover:bg-neutral-100"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-neutral-200 p-2 transition hover:bg-neutral-100"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-neutral-200 p-2 transition hover:bg-neutral-100"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-neutral-900">
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
            <h4 className="mb-5 text-lg font-medium text-neutral-900">
              Clinic Hours
            </h4>

            <div className="space-y-3 text-neutral-600">
              <p>Monday – Saturday</p>
              <p>10:00 AM – 2:00 PM</p>
              <p>5:00 PM – 9:00 PM</p>
              <p className="text-sm text-neutral-400">
                Sunday Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} IHA Dental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}