import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

describe("Vercel deployment asset paths", () => {
  it("uses repository-owned public assets instead of managed preview storage", async () => {
    const [home, document] = await Promise.all([
      readFile(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8"),
      readFile(resolve(projectRoot, "client/index.html"), "utf8"),
    ]);

    expect(home).toContain("https://raw.githubusercontent.com/rajsanghavi02/Social-Hub/main/assets");
    expect(home).not.toContain("/manus-storage/");
    expect(document).toContain("https://raw.githubusercontent.com/rajsanghavi02/Social-Hub/main/assets/social-hub-spark-mark.png");
    expect(document).not.toContain("/manus-storage/");
  });
});
