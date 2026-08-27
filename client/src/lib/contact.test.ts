import { afterEach, describe, expect, it, vi } from "vitest";
import { getSocialHubPhone, getSocialHubPhoneHref } from "./contact";

describe("Social Hub public phone configuration", () => {
  afterEach(() => vi.unstubAllEnvs());

  it("reads the public phone number from the configured environment value", () => {
    vi.stubEnv("VITE_SOCIAL_HUB_PHONE", "+91 1234567890");

    expect(getSocialHubPhone()).toBe("+91 1234567890");
  });

  it("creates a safe click-to-call link without spaces", () => {
    expect(getSocialHubPhoneHref("+91 1234567890")).toBe("tel:+911234567890");
  });
});

