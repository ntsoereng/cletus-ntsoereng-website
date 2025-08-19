import Projects from "@/components/global/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects - Cletus Ntsoereng",
  description: "The web development projects I have built over the years",
};

export default async function Project() {
  return (
    <>
      <Projects />
    </>
  );
}
