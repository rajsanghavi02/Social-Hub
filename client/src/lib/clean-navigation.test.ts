import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const homePath = resolve(process.cwd(), "client/src/pages/Home.tsx");

describe("clean in-page navigation", () => {
  it("keeps smooth section navigation while clearing anchor fragments from the current URL", async () => {
    const home = await readFile(homePath, "utf8");

    expect(home).toContain('scrollIntoView({ behavior: "smooth" })');
    expect(home).toContain("window.history.replaceState");
    expect(home).toContain('handleInPageNavigation(event, "services")');
    expect(home).toContain('handleInPageNavigation(event, "contact")');
  });
});
