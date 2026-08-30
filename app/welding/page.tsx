import { ServicePage } from "@/components/ServicePage";
import { serviceMetadata, services } from "@/lib/services";

const service = services.welding;

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
