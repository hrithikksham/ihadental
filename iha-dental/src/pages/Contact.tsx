import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/constants";

const treatments = [
"General Consultation",
"Dental Implants",
"Smile Design",
"Root Canal Treatment",
"Teeth Whitening",
"Veneers",
"Full Mouth Rehabilitation",
];

export default function Contact() {
const [form, setForm] = useState({
name: "",
phone: "",
treatment: "General Consultation",
preferredDate: "",
message: "",
});

const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>
) => {
setForm((prev) => ({
...prev,
[e.target.name]: e.target.value,
}));
};

const handleWhatsAppBooking = () => {
const whatsappMessage = `
Hello IHA Dental,

Name: ${form.name}
Phone Number: ${form.phone}

Treatment Interested In: ${form.treatment}
Preferred Appointment Date: ${form.preferredDate}

Concern / Notes:
${form.message}

Thank you.
`;
window.open(
  `https://wa.me/${CLINIC.phone.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`,
  "_blank"
);


};

return ( <section
   id="contact"
   className="relative overflow-hidden py-24 lg:py-32"
 >
{/* Background */} <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#F8FBFD] to-white" />

```
  <div className="relative mx-auto max-w-7xl px-6">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#0F4C81]">
        <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
        Contact Us
      </div>

      <h2 className="mt-6 text-4xl font-normal tracking-tight text-slate-950 lg:text-6xl">
        Begin your journey to a{" "}
        <span className="font-display italic text-[#0F4C81]">
          healthier smile
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-500">
        Schedule a consultation with our team and we'll help
        you find the right treatment plan for your dental needs.
      </p>
    </div>

    {/* Form Card */}
    <div className="mx-auto mt-16 max-w-4xl">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-20px_rgba(15,76,129,0.08)] lg:p-10">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
          Book an Appointment
        </h3>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <input
            name="name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-[#0F4C81]"
          />

          <input
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-[#0F4C81]"
          />

          <select
            name="treatment"
            value={form.treatment}
            onChange={handleChange}
            className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-[#0F4C81]"
          >
            {treatments.map((treatment) => (
              <option key={treatment}>
                {treatment}
              </option>
            ))}
          </select>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-600">
              Preferred Appointment Date
            </label>

            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-[#0F4C81]"
            />
          </div>
        </div>

        <textarea
          name="message"
          rows={5}
          placeholder="Briefly describe your dental concern or the treatment you're interested in..."
          value={form.message}
          onChange={handleChange}
          className="mt-5 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition-all focus:border-[#0F4C81]"
        />

        <button
          onClick={handleWhatsAppBooking}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle size={18} />
          Request via WhatsApp
        </button>
      </div>
    </div>
  </div>
</section>


);
}
