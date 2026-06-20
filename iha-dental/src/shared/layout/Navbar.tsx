import { CLINIC } from "@/lib/constants";
import { Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-xl">
            <img
              src={logo}
              alt="IHA Dental"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="text-2xl font-semibold tracking-tight text-slate-950">
            IhaDental
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[15px] font-medium text-slate-600 transition-colors hover:text-[#0F4C81]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`tel:${CLINIC.phone}`}
          className="hidden rounded-full border border-[#D4A437] px-6 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9CD5FF] lg:inline-flex"
        >
          Book Appointment
        </a>

        {/* Mobile CTA */}
        <a href={`tel:${CLINIC.phone}`}
        className="lg:hidden inline-flex items-center gap-2 rounded-full border border-[#D4A437]/40 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A437] hover:shadow-md"
    aria-label="Call IHA Dental">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A437]/10">
          <Phone className="h-4 w-4 text-[#D4A437]" />
        </div>

        <span>Call us</span>
        </a>
      </div>
    </header>
  );
}