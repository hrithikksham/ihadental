export interface PhysicianOptions {
  name: string;
  specialty: string;
  qualification?: string;
  image?: string;
  profileUrl?: string;
  worksFor?: string;
}

export function physicianSchema({
  name,
  specialty,
  qualification,
  image,
  profileUrl,
  worksFor = "IHA Dental Clinic",
}: PhysicianOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",

    name,

    medicalSpecialty: specialty,

    hasCredential: qualification,

    image,

    url: profileUrl,

    worksFor: {
      "@type": "MedicalClinic",
      name: worksFor,
    },
  };
}