import { DatabaseProvider } from "@altanlabs/database";

const config = {
  API_BASE_URL: "https://api.altan.ai/galaxia/hook/mo6VsG",
  SAMPLE_TABLES: {
    waitlist: "4ff1558e-4247-40d3-b4d5-3ce2d4cc5616"
  }
};

export const databaseProvider = new DatabaseProvider(config);