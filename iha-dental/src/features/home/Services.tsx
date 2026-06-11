import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  BriefcaseMedical,
  Pill,
  Smile,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Dental Implants",
    description:
      "A permanent, natural-looking solution to missing teeth with titanium precision.",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Smile Design",
    description:
      "Artful reshaping using veneers, bonding, and digital planning tailored to you.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive restoration of teeth, bite, and gum health through coordinated care.",
    icon: BriefcaseMedical,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Pain-minimised endodontic care to restore infected or damaged teeth.",
    icon: Pill,
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter and healthier smile.",
    icon: Smile,
  },
  {
    title: "Veneers",
    description:
      "Ultra-thin ceramic veneers that improve colour, shape, and aesthetics.",
    icon: Star,
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-950">
            Comprehensive care,{" "}
            <span className="italic text-blue-600">crafted</span> for you
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            From routine check-ups to full smile transformations, every
            treatment is performed with precision and genuine care.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? "border-blue-600 bg-blue-600 text-white xl:col-span-2"
                    : "border-slate-200 bg-slate-50 text-slate-900"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    service.featured
                      ? "bg-white/15"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {service.title}
                </h3>

                <p
                  className={`mt-5 leading-8 ${
                    service.featured
                      ? "text-blue-50"
                      : "text-slate-500"
                  }`}
                >
                  {service.description}
                </p>

                <button
                  className={`mt-10 inline-flex items-center gap-2 font-semibold ${
                    service.featured
                      ? "text-white"
                      : "text-blue-600"
                  }`}
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}