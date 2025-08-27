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

export const fetchMovies = async () => {
  try {
    let xmlData;
    // Use API
    const endpoint = "/schedules/xml/programacao";
    const response = await apiClient.get(endpoint, { responseType: "text" });
    xmlData = response.data;

    validateXMLStructure(xmlData);
    validateXMLSize(xmlData);
    validateXMLContent(xmlData);
    const parsed = parser.parse(xmlData);

    return parsed;
  } catch (error) {
    console.error('XML parsing error:', error.message);

    if (error.message.includes("malicious")) {
      throw new Error('Invalid XML format received');
    }

    if (error.message.includes("too large")) {
      throw new Error('XML too large');
    }

    if (error.message.includes('data type') || error.message.includes("format")) {
      throw new Error('Invalid XML data received');
    }

    throw new Error('Failed to fetch movie data');
  }
};
