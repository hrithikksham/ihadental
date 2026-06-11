import { useParams } from "@tanstack/react-router";

export default function ServiceDetailPage() {
  const { slug } = useParams({ strict: false });

  return (
    <div>
      <h1>Service</h1>
      <p>{slug}</p>
    </div>
  );
}