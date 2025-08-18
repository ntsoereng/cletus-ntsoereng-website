import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "cletus-ntsoereng-portfolio",

  projectId: "yvae94fm",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool(),
    // visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
});
