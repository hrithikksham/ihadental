import screw from "@/assets/screw.webp";

import {
  FaTooth,
  FaTeeth,
  FaRegFaceSmile,
  FaWandMagicSparkles,
  FaShieldHeart,
} from "react-icons/fa6";

const services = [
  {
    title: "Dental Implants",
    description:
      "A permanent, natural-looking solution to replace missing teeth with confidence and comfort.",
    image: screw,
    featured: true,
  },
  {
    title: "Smile Design",
    description:
      "Digitally planned smile transformations tailored to your facial aesthetics and goals.",
    icon: FaWandMagicSparkles,
    featured: true,
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive restoration of oral function, bite alignment, and smile aesthetics.",
    icon: FaTeeth,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Advanced endodontic care designed to save infected teeth while minimizing discomfort.",
    icon: FaShieldHeart,
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a noticeably brighter and healthier smile.",
    icon: FaRegFaceSmile,
  },
  {
    title: "Veneers",
    description:
      "Ultra-thin ceramic veneers crafted to enhance shape, colour, and overall appearance.",
    icon: FaTooth,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#F8FBFD] to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#0F4C81]">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            Our Services
          </div>

          <h2 className="mt-6 text-4xl font-normal tracking-tight text-slate-950 lg:text-6xl">
            Comprehensive care,{" "}
            <span className="font-display italic text-[#0F4C81]">
              crafted
            </span>{" "}
            for you
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            From preventive dentistry to full smile transformations,
            every treatment is delivered with precision, comfort,
            and long-term oral health in mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-6 lg:grid-cols-12">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(15,76,129,0.15)]
              ${
                service.featured
                  ? "bg-gradient-to-br from-[#EFF8FF] to-[#DFF4FF] lg:col-span-6"
                  : "lg:col-span-3"
              }`}
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF8FF] text-[#0F4C81]">
                {"image" in service ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <service.icon size={24} />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-slate-950">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-base leading-7 text-slate-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}