import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

describe("service spark markers", () => {
  it("replaces repeated service-card numbers with the approved Mini Social Spark marker", async () => {
    const home = await readFile(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");

    expect(home).toContain('className="service-spark"');
    expect(home).toContain('<article key={service.id} className="service-row"');
    expect(home).not.toContain('className="service-number"');
    expect(home).not.toContain('number: "01"');
    expect(home).not.toContain('number: "06"');
  });

  it("keeps the marker compact while preserving the desktop and mobile service grids", async () => {
    const styles = await readFile(resolve(projectRoot, "client/src/index.css"), "utf8");

    expect(styles).toContain(".service-spark { width: 1.2rem; height: 1.2rem;");
    expect(styles).toContain(".service-row { display: grid; grid-template-columns: 2.45rem");
    expect(styles).toContain(".service-row { grid-template-columns: 2.15rem 1fr 1.2rem; gap: .7rem; }");
  });
});
