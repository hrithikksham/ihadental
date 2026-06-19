import Container from "@/shared/ui/Container";
import { ArrowRight } from "lucide-react";
import clinicMain from "@/assets/clinic-main.webp";

function FloatingCard({
  title,
  value,
  subtitle,
  className = "",
}: {
  title: string;
  value: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-30 hidden rounded-3xl bg-white px-6 py-5 shadow-[0_8px_32px_-8px_rgba(15,76,129,0.12)] ring-1 ring-slate-200 lg:block ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-semibold text-slate-900">
        {value}
      </h3>

      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-40">
      {/* Background Blobs */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-300/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-200/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div>
            <h1 className="mt-8 max-w-3xl text-5xl font-normal leading-[1.05] tracking-tight text-slate-950 lg:text-7xl">
              Where every smile
              <br />
              finds its{" "}
              <span className="font-display italic text-[#0F4C81]">
                finest form
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-500">
              At IHA Dental, precision dentistry meets a calm, unhurried
              environment — so every visit feels less like a clinic and more
              like a step toward your healthiest smile.
            </p>

            <div className="mt-10">
              <button className="inline-flex items-center rounded-full border border-slate-200 bg-white px-8 py-5 text-base font-medium text-slate-900 transition-all duration-300 hover:border-[#0F4C81] hover:bg-slate-50">
                Explore Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Hero Image */}
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#EFF8FF] via-white to-[#DFF4FF] shadow-[0_20px_60px_-20px_rgba(15,76,129,0.18)] lg:ml-auto lg:mr-0">
                <img
                  src={clinicMain}
                  alt="IHA Dental Clinic"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Desktop Floating Cards */}
              <FloatingCard
                title="Patient First"
                value="Care"
                subtitle="Personalized treatment plans"
                className="-left-8 top-12"
              />

              <FloatingCard
                title="Advanced"
                value="Technology"
                subtitle="Modern diagnostics & equipment"
                className="-left-4 top-60"
              />

              <FloatingCard
                title="Comfort"
                value="Focused"
                subtitle="Designed for stress-free visits"
                className="-right-6 top-20"
              />

              {/* Mobile Cards */}
              <div className="mt-6 grid gap-3 lg:hidden">
                <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Patient First
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    Care
                  </h3>
                  <p className="text-sm text-slate-500">
                    Personalized treatment plans
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Advanced
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    Technology
                  </h3>
                  <p className="text-sm text-slate-500">
                    Modern diagnostics & equipment
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                    Comfort
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">
                    Focused
                  </h3>
                  <p className="text-sm text-slate-500">
                    Designed for stress-free visits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}