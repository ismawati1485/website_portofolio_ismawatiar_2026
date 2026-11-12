import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "@/data/projects";

describe("Projects and Screenshots Data", () => {
  it("contains exactly 4 projects", () => {
    expect(projects).toHaveLength(4);
  });

  it("PELNI has exactly 10 screenshots and files exist", () => {
    const pelni = projects.find((p) => p.theme === "ship");
    expect(pelni).toBeDefined();
    expect(pelni?.screenshots).toHaveLength(10);
    pelni?.screenshots.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      const relativePath = s.src.replace(/^\//, "");
      const fullPath = path.resolve(process.cwd(), "public", relativePath);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
    expect(pelni?.screenshots[1]?.description).toBe(
      "Menampilkan ringkasan data maintenance kapal secara tahunan untuk membantu pemantauan pekerjaan.",
    );
    expect(pelni?.screenshots[2]?.description).toBe(
      "Menampilkan perbandingan target dan realisasi pekerjaan dalam RKAP.",
    );
    expect(pelni?.screenshots[6]?.description).toBe(
      "Mengelola dan memantau proyek pekerjaan atau service kapal.",
    );
  });

  it("IBI has exactly 15 screenshots and files exist", () => {
    const ibi = projects.find((p) => p.theme === "erp");
    expect(ibi).toBeDefined();
    expect(ibi?.screenshots).toHaveLength(15);
    ibi?.screenshots.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      const relativePath = s.src.replace(/^\//, "");
      const fullPath = path.resolve(process.cwd(), "public", relativePath);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
    expect(ibi?.screenshots[3]?.description).toBe(
      "Menampilkan customer dengan kontribusi penjualan tertinggi.",
    );
    expect(ibi?.screenshots[13]?.description).toBe("Menampilkan tren PPN dan PPh terutang.");
  });

  it("BDK has exactly 11 screenshots and files exist", () => {
    const bdk = projects.find((p) => p.theme === "meeting");
    expect(bdk).toBeDefined();
    expect(bdk?.screenshots).toHaveLength(11);
    bdk?.screenshots.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      const relativePath = s.src.replace(/^\//, "");
      const fullPath = path.resolve(process.cwd(), "public", relativePath);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  });

  it("CVRP has exactly 4 screenshots and files exist", () => {
    const cvrp = projects.find((p) => p.theme === "research");
    expect(cvrp).toBeDefined();
    expect(cvrp?.screenshots).toHaveLength(4);
    cvrp?.screenshots.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      const relativePath = s.src.replace(/^\//, "");
      const fullPath = path.resolve(process.cwd(), "public", relativePath);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  });

  it("Profile photo ISMA.JPG exists in src/assets", () => {
    const photoPath = path.resolve(process.cwd(), "src/assets/ISMA.JPG");
    expect(fs.existsSync(photoPath)).toBe(true);
  });

  it("Index route references ISMA.JPG and Download CV", () => {
    const indexSource = fs.readFileSync(
      path.resolve(process.cwd(), "src/routes/index.tsx"),
      "utf-8",
    );
    expect(indexSource).toContain("@/assets/ISMA.JPG");
    expect(indexSource).toContain("/cv/Ismawati_Ainol_Robbi_CV.pdf");
    expect(indexSource).toContain('download="Ismawati_Ainol_Robbi_CV.pdf"');
  });

  it("Contains experience for PELNI Services and education with IPK", () => {
    const indexSource = fs.readFileSync(
      path.resolve(process.cwd(), "src/routes/index.tsx"),
      "utf-8",
    );
    expect(indexSource).toContain("Freelance Full Stack Developer");
    expect(indexSource).toContain("PT. Pelita Indonesia Djaya (PELNI Services)");
    expect(indexSource).toContain("Oktober 2026 — Sekarang");
    expect(indexSource).toContain("IPK: 3.90 / 4.00");
  });

  it("Contains required contact placeholders and GANTI INI comments", () => {
    const indexSource = fs.readFileSync(
      path.resolve(process.cwd(), "src/routes/index.tsx"),
      "utf-8",
    );
    expect(indexSource).toContain("// GANTI INI - EMAIL");
    expect(indexSource).toContain("EMAIL_KAMU");
    expect(indexSource).toContain("// GANTI INI - WHATSAPP");
    expect(indexSource).toContain("WHATSAPP_NUMBER");
    expect(indexSource).toContain("// GANTI INI - GITHUB");
    expect(indexSource).toContain("GITHUB_URL");
    expect(indexSource).toContain("// GANTI INI - LINKEDIN");
    expect(indexSource).toContain("LINKEDIN_URL");
    expect(indexSource).toContain("https://wa.me/");
  });

  it("Has removed Lovable logo and favicon", () => {
    const rootSource = fs.readFileSync(
      path.resolve(process.cwd(), "src/routes/__root.tsx"),
      "utf-8",
    );
    expect(rootSource).not.toContain("/favicon.ico");
    expect(rootSource).not.toContain("@Lovable");
    expect(fs.existsSync(path.resolve(process.cwd(), "public/favicon.ico"))).toBe(false);
  });

  it("Feature description font size is enlarged", () => {
    const cssSource = fs.readFileSync(path.resolve(process.cwd(), "src/styles.css"), "utf-8");
    expect(cssSource).toContain(".gallery-feature-desc");
    expect(cssSource).toContain("font-size: 0.88rem;");
  });
});
