import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logo from "../../assets/logo.png"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAFAFA]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Navigation Pill */}
        <div className="flex items-center rounded-full border border-neutral-800 bg-white px-5 py-3 shadow-sm">
          {/* Logo */}
          <Link to="/" className="mr-4 inline-flex items-center">
            <img src={logo} alt="IHA Dental" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[1.15rem] font-medium text-neutral-900 transition-colors duration-200 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile */}
          <button className="ml-2 md:hidden">
            <Menu className="h-6 w-6 text-neutral-900" />
          </button>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="rounded-full border border-neutral-800 bg-white px-9 py-4 text-xl font-medium text-neutral-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50 hover:shadow-md"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}