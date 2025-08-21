import apiClient from "@/services/api/client/apiClient";
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({ ignoreAttributes: false });
const USE_LOCAL_FILE = false; // Toggle for development

export const fetchMovies = async () => {
  let xmlData;
  if (USE_LOCAL_FILE && import.meta.env.DEV) {
    // Load from public folder
    const response = await fetch("./public/dev-programacao-api.xml");

    xmlData = await response.text();
  } else {
    // Use API
    const endpoint = "/schedules/xml/"
    const response = await apiClient.get(endpoint, { responseType: "text" });
    xmlData = response.data;
  }
  const parsed = parser.parse(xmlData);

  return parsed;
};
