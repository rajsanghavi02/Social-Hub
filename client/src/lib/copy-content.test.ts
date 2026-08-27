import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

describe("Her Social Hub public copy", () => {
  it("uses the approved natural hero wording and preserves the intended brand names", async () => {
    const home = await readFile(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");

    expect(home).toContain(
      "Her Social Hub brings strategy, content, and account management together so your brand has a clearer voice and a stronger place online.",
    );
    expect(home).not.toContain("together—so");
    expect(home).toContain('alt="Her Social Hub logo"');
    expect(home).toContain("<span>Her Social Hub</span>");
    expect(home).toContain("The Her Social Hub difference");
    expect(home).toContain("Initial website concept, 2026");
  });

  it("uses natural punctuation in public page metadata", async () => {
    const document = await readFile(resolve(projectRoot, "client/index.html"), "utf8");

    expect(document).toContain("Her Social Hub: digital marketing");
    expect(document).toContain("<title>Her Social Hub: Digital Marketing</title>");
    expect(document).not.toContain("—");
  });
});
