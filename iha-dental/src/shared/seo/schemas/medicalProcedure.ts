export function medicalProcedureSchema(
  procedure: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "MedicalProcedure",

    name: procedure,
  };
}