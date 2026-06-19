export interface PhysicianOptions {
  name: string;
  specialty: string;
  qualification?: string;
}

export function physicianSchema({
  name,
  specialty,
  qualification,
}: PhysicianOptions) {
  return {
    "@context": "https://schema.org",

    "@type": "Physician",

    name,

    medicalSpecialty: specialty,

    hasCredential: qualification,

    worksFor: {
      "@type": "MedicalClinic",
      name: "IHA Dental",
    },
  };
}