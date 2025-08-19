import apiClient from "./api_client";
import { XMLParser } from "fast-xml-parser";

const CACHE_KEY = "movies";
const CACHE_TTL = 1000 * 60 * 60; // 1 hour
const parser = new XMLParser({ ignoreAttributes: false });
const USE_LOCAL_FILE = true; // Toggle for development

export const fetchMovies = async (endpoint = "/schedules/xml/programacao") => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log("CACHED!");
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!");

    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      return data;
    }
  }

  let xmlData;
  if (USE_LOCAL_FILE && import.meta.env.DEV) {
    // Load from public folder
    const response = await fetch("./public/dev-programacao-api.xml");

    xmlData = await response.text();
  } else {
    // Use API
    const response = await apiClient.get(endpoint, { responseType: "text" });
    xmlData = response.data;
  }
  const parsed = parser.parse(xmlData);
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ data: parsed, timestamp: Date.now() }),
  );
  return parsed;
};
