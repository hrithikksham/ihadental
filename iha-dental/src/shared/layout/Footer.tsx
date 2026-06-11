import { Link } from "@tanstack/react-router";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Top Divider */}
        <div className="border-t border-neutral-200 pt-10">
          <h1 className="select-none text-center text-[4rem] font-black leading-none tracking-[-0.08em] text-neutral-950 md:text-[8rem] lg:text-[10rem]">
            IhaDental
          </h1>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-neutral-200 pt-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          {/* Newsletter */}
          <div className="pr-6 md:border-r md:border-neutral-200">
            <h3 className="mb-6 text-lg font-medium text-neutral-900">
              Newsletter
            </h3>

            <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent text-neutral-700 outline-none placeholder:text-neutral-400"
              />

              <button className="text-lg">→</button>
            </div>

            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Stay updated with our latest dental insights.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#" className="rounded-full border p-2 hover:bg-neutral-100">
                <FaInstagram size={18} />
              </a>

              <a href="#" className="rounded-full border p-2 hover:bg-neutral-100">
                <FaFacebook size={18} />
              </a>

              <a href="#" className="rounded-full border p-2 hover:bg-neutral-100">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-neutral-900">
              Quick Links
            </h4>

            <div className="space-y-3 text-neutral-600">
              <Link to="/">Home</Link>
              <br />
              <Link to="/services">Services</Link>
              <br />
              <Link to="/doctors">Doctors</Link>
              <br />
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-neutral-900">
              Treatments
            </h4>

            <div className="space-y-3 text-neutral-600">
              <p>Dental Implants</p>
              <p>Smile Design</p>
              <p>Root Canal</p>
              <p>Teeth Whitening</p>
              <p>Veneers</p>
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
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-5 text-lg font-medium text-neutral-900">
              Clinic Hours
            </h4>

            <div className="space-y-3 text-neutral-600">
              <p>Mon – Sat</p>
              <p>10:00 AM – 2:00 PM</p>
              <p>5:00 PM – 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} Iha Dental. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/contact">Book Appointment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}