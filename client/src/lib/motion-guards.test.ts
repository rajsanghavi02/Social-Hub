import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();
const homePath = resolve(projectRoot, "client/src/pages/Home.tsx");
const stylesheetPath = resolve(projectRoot, "client/src/index.css");

describe("Social Hub motion safeguards", () => {
  it("keeps reveal hooks on the service, process, and visual storytelling sections", async () => {
    const home = await readFile(homePath, "utf8");

    expect(home).toContain('className="service-row" data-reveal');
    expect(home).toContain('className="image-story content-story motion-image-story" data-reveal');
    expect(home).toContain('className="image-story growth-story motion-image-story" data-reveal');
  });

  it("limits visual motion to efficient properties and respects reduced-motion preferences", async () => {
    const stylesheet = await readFile(stylesheetPath, "utf8");

    expect(stylesheet).toContain("prefers-reduced-motion: reduce");
    expect(stylesheet).toContain("will-change: opacity, transform");
    expect(stylesheet).toContain("motion-image-story");
    expect(stylesheet).toContain("card-settle");
  });
});
