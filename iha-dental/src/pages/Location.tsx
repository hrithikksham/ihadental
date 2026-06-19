import { MapPin, Navigation } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/h1sYQc6ZUCVdzGzR8";

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#F8FBFD] to-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#0F4C81]">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
            Visit Our Clinic
          </div>

          <h2 className="mt-6 text-4xl font-normal tracking-tight text-slate-950 lg:text-6xl">
            Easy to{" "}
            <span className="font-display italic text-[#0F4C81]">
              find
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Located in the heart of Patteeswaram, Kumbakonam,
            with convenient access for patients across the region.
          </p>
        </div>

        {/* Card */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,76,129,0.08)]">
          {/* Map */}
          <div className="h-[420px] w-full">
            <iframe
              title="IHA Dental Location"
              src="https://www.google.com/maps?q=290/19,Anna+Salai,Patteeswaram,Kumbakonam,Tamil+Nadu+612703&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#0F4C81]">
                <MapPin size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.15em]">
                  IHA Dental
                </span>
              </div>

              <p className="mt-3 text-lg font-medium text-slate-950">
                290/19, Anna Salai
              </p>

              <p className="mt-1 text-slate-500">
                Patteeswaram, Kumbakonam,
                Tamil Nadu 612703
              </p>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0000] border px-8 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}