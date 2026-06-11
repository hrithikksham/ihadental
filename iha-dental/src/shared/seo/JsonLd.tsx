import { useEffect } from "react";

type Props = {
  data: Record<string, unknown>;
  id?: string;
};

export default function JsonLd({
  data,
  id = "jsonld",
}: Props) {
  useEffect(() => {
    const existing = document.getElementById(id);
    existing?.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(data);

    document.head.appendChild(script);

    return () => script.remove();
  }, [data, id]);

  return null;
}