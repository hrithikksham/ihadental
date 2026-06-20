
import { ArrowRight } from "lucide-react";
import drAjith from "@/assets/dr-ajith.webp";
import drKanmani from "@/assets/dr-kanmani.webp";

const doctors = [
  {
    name: "Dr. S. Ajith Bose",
    designation: "Maxillofacial Prosthodontist & Implantologist",
    qualification: "BDS, MDS",
    description:
      "Specialist in dental implants, crowns & bridges, complete dentures, and full-mouth rehabilitation with a patient-centered approach.",
    image: drAjith,
  },
  {
    name: "Dr. D. Kanmani",
    designation: "Dental Surgeon",
    qualification: "BDS, MBA",
    description:
      "Focused on comprehensive patient care, treatment coordination, and delivering a seamless clinical experience.",
    image: drKanmani,
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#F8FBFD] to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-6 text-4xl font-normal tracking-tight text-slate-950 lg:text-6xl">
            Meet our{" "}
            <span className="font-display italic text-[#0F4C81]">
              specialists
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Experienced clinicians dedicated to restoring confidence,
            comfort, and long-term oral health through personalized care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(15,76,129,0.15)]"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#EFF8FF] via-white to-[#DFF4FF]">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="inline-flex rounded-full bg-[#EFF8FF] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#0F4C81]">
                  {doctor.qualification}
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-[#0F4C81]">
                  {doctor.designation}
                </p>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  {doctor.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F4C81]">
                  View Profile

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
