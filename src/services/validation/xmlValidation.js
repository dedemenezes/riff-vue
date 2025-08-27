export const validateXMLContent = (xmlData) => {
  // Basic XML validation
  if (xmlData === "") {
    return;
  }

  if (!xmlData || typeof xmlData !== "string") {
    throw new Error("Invalid XML data type");
  }

  if (!xmlData.trim().startsWith("<?xml") && !xmlData.trim().startsWith("<")) {
    throw new Error("Invalid XML format");
  }
};

export const validateXMLSize = (xmlData) => {
  const MAX_SIZE = 1024 * 1024; // 1MB limit
  if (xmlData.length > MAX_SIZE) {
    throw new Error("XML too large");
  }
};

export const validateXMLStructure = (xmlData) => {
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<!DOCTYPE.*\[/i, // DOCTYPE with entities
    /<!ENTITY/i, // Entity definitions
    /SYSTEM\s+["']/i, // External system entities
    /file:\/\//i, // File protocol
    /http:\/\/localhost/i, // Localhost requests
    /&\w+;/g, // Entity references
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(xmlData)) {
      throw new Error("Potentially malicious XML detected");
    }
  }
};
