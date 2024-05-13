import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";
import { db } from "@/db";
interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  if (!id || typeof id !== "string") {
    return notFound();
  }
  const config = await db.configuration.findUnique({
    where: { id },
  });
  if (!config) {
    return notFound();
  }
  return <DesignPreview configuration={config} />;
};
export default Page;
