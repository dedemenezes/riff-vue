import { describe, test, expect } from "vitest";
import { validateXMLStructure, validateXMLSize } from "@/services/validation/xmlValidation"

describe("XML Validation", () => {
  // Test XXE prevention
  test('should reject XML with external entities', () => {
    const maliciousXML = `<?xml version="1.0"?>
      <!DOCTYPE root [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
      <root>&xxe;</root>`;

    expect(() => validateXMLStructure(maliciousXML).toThrow('Potentially malicious XML detected'));
  });

  // Test XML bomb prevention
  test('should reject XML bombs', () => {
    const xmlBomb = `<?xml version="1.0"?>
      <!DOCTYPE lolz [<!ENTITY lol "&lol;&lol;&lol;&lol;&lol;">]>
      <root>&lol;</root>`;

    expect(() => validateXMLStructure(xmlBomb).toThrow('Potentially malicious XML detected'));
  });

  // Test size limits
  test('should reject oversized XML', () => {
    const largeXML = '<root>' + 'x'.repeat(2 * 1024 * 1024) + '</root>';
    expect(() => validateXMLSize(largeXML).toThrow('XML too large'));
  });
})
