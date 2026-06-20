
import gallery1 from "@/assets/clinic-01.jpg";
import gallery2 from "@/assets/clinic-02.jpg";
import gallery3 from "@/assets/clinic-03.webp";

const galleryImages = [
  {
    image: gallery1,
    title: "Reception & Waiting Lounge",
    description:
      "A calm, modern environment where patient wellbeing, comfort, and personalized care come first.",
  },
  {
    image: gallery2,
    title: "Advanced Treatment Room",
    description:
      "Modern equipment, digital precision, and evidence-based techniques working together to deliver exceptional patient care.",
  },
  {
    image: gallery3,
    title: "Clinical Excellence",
    description:
      "Professional certifications, specialized implantology training, and a dedication to clinical precision define every treatment we provide.",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#F8FBFD] to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#0F4C81]">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            Inside IHA Dental
          </div>

          <h2 className="mt-6 text-4xl font-normal tracking-tight text-slate-950 lg:text-6xl">
            A space designed for{" "}
            <span className="font-display italic text-[#0F4C81]">
              comfort
            </span>{" "}
            and confidence
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Every corner of our clinic reflects our commitment to
            patient comfort, clinical excellence, and a stress-free
            dental experience.
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {galleryImages.map((item, index) => (
            <article
              key={item.title}
              className={`
                group overflow-hidden rounded-[32px]
                border border-slate-200 bg-white
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_-20px_rgba(15,76,129,0.15)]

                ${
                  index === 0
                    ? "lg:col-span-12"
                    : "lg:col-span-6"
                }
              `}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
            Thoughtfully designed interiors, advanced technology,
            and a patient-first approach come together to create
            a dental experience built around comfort and trust.
          </p>
        </div>
      </div>
    </section>
  );
}
