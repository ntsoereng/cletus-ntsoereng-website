import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "yvae94fm",
  dataset: "production",
  apiVersion: "2025-08-17",
  useCdn: false,
};

const client = createClient(config);

export default client;
