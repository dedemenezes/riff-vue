import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { vi } from "vitest";
import axios from "axios";
import apiClient from "@/services/api/client/apiClient";

// Mock axios completely
vi.mock("axios", () => {
  return {
    default: {
      create: () => axios,
      get: vi.fn(),
      post: vi.fn(),
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() },
      },
      defaults: {
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: { common: {} },
      },
    },
  };
});

describe("apiClient", () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  afterEach(() => {});

  test("should set base url", () => {
    expect(apiClient.defaults.baseURL).toBe(import.meta.env.VITE_API_BASE_URL);
  });

  // test("should attach Authorization header if token exists", async () => {
  //   vi.stubEnv("VITE_TMDB_TOKEN", "test-token");

  //   const interceptorFn = axios.interceptors.request.use.mock.calls[0][0];

  //   const config = { headers: {} };
  //   const updatedConfig = interceptorFn(config);

  //   expect(updatedConfig.headers.Authorization).toBe("Bearer test-token");
  // });
});
