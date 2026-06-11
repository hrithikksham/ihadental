import Container from "@/shared/ui/Container";
import Button from "@/shared/ui/Button";
import { CalendarDays, ArrowRight, Circle } from "lucide-react";

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
      className={`absolute rounded-3xl bg-white px-6 py-5 shadow-lg ring-1 ring-black/5 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-bold text-slate-900">{value}</h3>

      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
              • Premium Dental Care · Chennai
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-950 lg:text-7xl">
              Where every smile
              <br />
              finds its{" "}
              <span className="italic text-blue-600">finest form</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-500">
              At Iha Dental, we blend precision dentistry with a calm,
              unhurried environment so every visit feels less like a clinic
              and more like a step toward your healthiest smile.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="px-8 py-4">
                <CalendarDays className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>

              <button className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-medium text-slate-900 transition hover:border-blue-500">
                Explore Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center">
            {/* Decorative background */}
            <div className="absolute inset-0 -right-32 rounded-full bg-blue-50" />

            {/* Main image placeholder */}
            <div className="relative z-10 flex h-[620px] w-[460px] items-center justify-center rounded-[48px] bg-blue-100 shadow-xl">
              <div className="text-center text-slate-400">
                <Circle className="mx-auto mb-4 h-14 w-14" />
                <p>Clinic / Doctor Photo</p>
              </div>
            </div>

            {/* Floating cards */}
            <FloatingCard
              title="Available Today"
              value="10 AM"
              subtitle="Morning slots open"
              className="left-0 top-16"
            />

            <FloatingCard
              title="Specialists"
              value="2"
              subtitle="Expert doctors"
              className="left-10 top-60"
            />

            <FloatingCard
              title="Advanced Equipment"
              value="Digital X-Ray"
              subtitle="Precision diagnostics"
              className="bottom-24 right-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}