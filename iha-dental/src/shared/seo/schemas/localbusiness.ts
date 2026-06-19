export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "LocalBusiness",

    name: "IHA Dental",

    url: "https://ihadental.com",

    telephone: "+91 9363006440",

    address: {
      "@type": "PostalAddress",
      streetAddress: "290/19 Anna Salai",
      addressLocality: "Patteeswaram",
      addressRegion: "Tamil Nadu",
      postalCode: "612703",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: "11.009",

      longitude: "79.373",
    },
  };
}