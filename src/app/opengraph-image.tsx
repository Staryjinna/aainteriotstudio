import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — premium traditional & modular interiors in Chennai`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: 70, background: "#FAF7F2", color: "#2A2522", fontFamily: "Georgia, serif" }}>
        <img src={src} alt="" width={420} height={323} />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 60 }}>
          <div style={{ fontSize: 28, letterSpacing: 5, color: "#8A5324", textTransform: "uppercase", display: "flex" }}>Chennai</div>
          <div style={{ fontSize: 64, marginTop: 18, lineHeight: 1.1, display: "flex" }}>Tradition, beautifully modern.</div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#6B625B", display: "flex" }}>Vaasakal · Pooja rooms · Modular kitchens</div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 16, background: "#A0642F", display: "flex" }} />
      </div>
    ),
    size,
  );
}
