import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

describe("readable typography scale", () => {
  it("keeps the service catalogue and supporting text above the previous undersized scale", async () => {
    const styles = await readFile(resolve(projectRoot, "client/src/index.css"), "utf8");

    expect(styles).toContain('font-size: clamp(1.35rem, 2vw, 1.9rem);');
    expect(styles).toContain('font-family: "Bodoni Moda", Georgia, serif;');
    expect(styles).toContain(".service-row h3 { font-size: 1.18rem;");
    expect(styles).toContain(".service-row p { color: #5b5b62; font-size: .92rem;");
    expect(styles).toContain(".process-rail p { color: rgba(255,255,255,.68); font-size: .94rem;");
    expect(styles).toContain(".story-copy > p:last-child { font-size: 1.02rem;");
    expect(styles).toContain(".section-index { font-size: clamp(1rem, 1.25vw, 1.28rem);");
  });

  it("retains a mobile-specific readable scale for compact controls and introduction copy", async () => {
    const styles = await readFile(resolve(projectRoot, "client/src/index.css"), "utf8");

    expect(styles).toContain(".header-contact { padding: .62rem .74rem; font-size: .64rem; }");
    expect(styles).toContain(".hero-intro { font-size: 1rem; }");
    expect(styles).toContain(".service-row { grid-template-columns: 2.75rem 1fr 1.2rem; gap: .7rem; }");
  });
});
