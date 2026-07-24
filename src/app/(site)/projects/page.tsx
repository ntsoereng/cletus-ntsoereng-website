import Projects from "@/components/global/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Web Development Projects",
  description:
    "Explore selected websites and digital products designed and developed by Cletus Ntsoereng.",
};

export default async function Project() {
  return (
    <>
      <Projects />
    </>
  );
}
