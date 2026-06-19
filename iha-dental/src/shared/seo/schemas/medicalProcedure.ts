export function medicalProcedureSchema(
  procedureName: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "MedicalProcedure",

    name: procedureName,

    bodyLocation: "Teeth",

    procedureType: "Dental Procedure",
  };
}