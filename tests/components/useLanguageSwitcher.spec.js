// tests/components/useLanguageSwitcher.spec.js
import { describe, expect, test, vi, beforeEach } from "vitest";

// Mock the useI18n composable
vi.mock("@/composables/useI18n", () => ({
  useI18n: () => ({
    locale: { value: "pt" },
    t: (key) => key,
    ta: (key, fallback) => fallback || key,
  }),
}));

// Mock localStorage
globalThis.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  // Add storage for realistic behavior
  _storage: {},
};

// Make it work like real localStorage
globalThis.localStorage.getItem.mockImplementation((key) => {
  return globalThis.localStorage._storage[key] || null;
});

globalThis.localStorage.setItem.mockImplementation((key, value) => {
  globalThis.localStorage._storage[key] = value;
});

describe("useLanguageSwitcher", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    globalThis.localStorage._storage = {};
  });

  test("should switch language", async () => {
    const { useLanguageSwitcher } = await import(
      "@/components/app/useLanguageSwitcher"
    );
    const { switchLanguage, currentLanguage } = useLanguageSwitcher();

    await switchLanguage("en");

    expect(currentLanguage.value).toBe("en");
  });

  test("Should initialize with correct default language - PT", async () => {
    const { useLanguageSwitcher } = await import(
      "@/components/app/useLanguageSwitcher"
    );
    const { currentLanguage } = useLanguageSwitcher();
    expect(currentLanguage.value).toBe("pt");
  });

  test("Should initialize with language from localStorage if available", async () => {
    localStorage.setItem("preferredLanguage", "en");

    const { useLanguageSwitcher } = await import(
      "@/components/app/useLanguageSwitcher"
    );
    const { currentLanguage } = useLanguageSwitcher();
    expect(currentLanguage.value).toBe("en");
  });
});

//  Should update localStorage when switching language
//  Should update i18n locale when switching language
