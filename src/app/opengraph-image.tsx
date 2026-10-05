import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — luxury interior designers in Pune & Mumbai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#FAF7F2", color: "#1F1F1F", fontFamily: "Georgia, serif" }}>
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#B08D57", textTransform: "uppercase", display: "flex" }}>Luxury Interiors • Turnkey Solutions</div>
        <div style={{ fontSize: 96, marginTop: 24, lineHeight: 1.05, display: "flex" }}>{site.name}</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#6f675f", display: "flex" }}>{site.yearsExperience}+ years · {site.projectsCount} projects · {site.cities.join(" • ")}</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 16, background: "#B08D57", display: "flex" }} />
      </div>
    ),
    size,
  );
}
