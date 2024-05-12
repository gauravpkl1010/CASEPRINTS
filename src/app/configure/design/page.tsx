import { notFound } from "next/navigation";
import { db } from "@/db";
import DesignConfigurator from "./designConfigurator";
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
    where: {
      id,
    },
  });
  if (!config) {
    return notFound();
  }
  const { imageUrl, height, width } = config;

  return (
    <DesignConfigurator
      configId={config.id}
      imageUrl={imageUrl}
      imageDimensions={{ width, height }}
    />
  );
};

export default Page;
