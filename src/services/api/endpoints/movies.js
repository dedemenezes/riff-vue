import apiClient from "@/services/api/client/apiClient";
import { XMLParser } from "fast-xml-parser";
import { validateXMLStructure, validateXMLContent,  validateXMLSize } from "@/services/validation/xmlValidation";

const parser = new XMLParser({
  ignoreAttributes: false,

  processEntities: false,        // Don't process entities
  allowBooleanAttributes: false, // Strict attribute parsing
  parseAttributeValue: false,    // Don't parse attribute values

  stopNodes: ["*.entity"],       // Stop processing at entity nodes

  trimValues: true,              // Trim whitespace
  parseTrueNumberOnly: true,     // Only parse actual numbers

  ignoreNameSpace: true,         // Ignore namespaces
  parseTagValue: true,           // Parse tag values strictly
  parseNodeValue: true,          // Parse node values strictly
});

const USE_LOCAL_FILE = false; // Toggle for development

export const fetchMovies = async () => {
  let xmlData;
  if (USE_LOCAL_FILE && import.meta.env.DEV) {
    // Load from public folder
    const response = await fetch("./public/dev-programacao-api.xml");

    xmlData = await response.text();
  } else {
    // Use API
    const endpoint = "/schedules/xml/programacao";
    const response = await apiClient.get(endpoint, { responseType: "text" });
    xmlData = response.data;
  }

  validateXMLStructure(xmlData)
  validateXMLSize(xmlData);
  validateXMLContent(xmlData);
  const parsed = parser.parse(xmlData);

  // Ideallu we shouod sanitize
  // console.log(parsed);

  return parsed;
};
