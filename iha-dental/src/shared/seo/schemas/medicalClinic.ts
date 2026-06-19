export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",

    name: "IHA Dental",

    image: "/logo.png",

    telephone: "+91 9363006440",

    email: "ihadentalhospital@gmail.com",

    url: "https://ihadental.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "290/19 Anna Salai",
      addressLocality: "Patteeswaram",
      addressRegion: "Tamil Nadu",
      postalCode: "612703",
      addressCountry: "IN",
    },

    medicalSpecialty: "Dentistry",
  };
}