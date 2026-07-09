import { ImageResponse } from "next/og";

export const alt = "Mx Solution — We multiply ideas into results";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#060606",
          color: "#f5f5f5",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700 }}>
          <span>M</span>
          <span style={{ color: "#7b96f8" }}>x</span>
          <span style={{ marginLeft: 10 }}>Solution</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-3px",
            textTransform: "uppercase",
          }}
        >
          <span>We multiply</span>
          <span style={{ display: "flex" }}>
            <span style={{ color: "#7b96f8" }}>ideas</span>
            <span style={{ color: "#8a8a8a", marginLeft: 24 }}>into</span>
          </span>
          <span>results</span>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#8a8a8a",
            letterSpacing: "2px",
          }}
        >
          <span>WEB · MOBILE · COMMERCE · AI</span>
          <span>mxsolution.in</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
