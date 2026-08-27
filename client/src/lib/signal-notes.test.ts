import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

describe("Her Social Hub Signal Notes", () => {
  it("adds the approved three-part editorial principles beside the positioning statement", async () => {
    const home = await readFile(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");

    expect(home).toContain('className="signal-notes"');
    expect(home).toContain("Strategy first");
    expect(home).toContain("Content with purpose");
    expect(home).toContain("Consistency that compounds");
    expect(home).toContain("One focused partner to help your social channels look sharper");
  });

  it("uses a stacked editorial desktop treatment and a compact three-column mobile treatment", async () => {
    const styles = await readFile(resolve(projectRoot, "client/src/index.css"), "utf8");

    expect(styles).toContain(".signal-notes { list-style: none;");
    expect(styles).toContain(".signal-notes b { color: #f63e73;");
    expect(styles).toContain(".signal-notes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); max-width: none; }");
  });
});
