import { ImageResponse } from "next/og";

export const alt = "Mx Solution — We solve business problems with technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The hero, as a share card: the same headline with the same accent line,
 * beside the same window mockup.
 *
 * Colours are the resolved brand tokens rather than var() references —
 * Satori renders this outside the document, so it never sees the
 * stylesheet. If globals.css changes, these change with it by hand.
 */
const INK = "#181716";
const MUTED = "#575452";
const SURFACE = "#F5F5F4";
const TINT = "#E7EDFE";
const BLUE = "#134DEC";
const TRAFFIC = ["#FF5F57", "#FEBC2E", "#28C840"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          backgroundColor: "#ffffff",
          color: INK,
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        {/* ── The words ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 600,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600 }}>
            Mx Solution
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-2px",
            }}
          >
            <span>We solve business</span>
            <span>problems with</span>
            <span style={{ color: BLUE }}>technology.</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 20,
              color: MUTED,
            }}
          >
            <span>Websites · Software · Automation · Search</span>
            <span>mxsolution.in</span>
          </div>
        </div>

        {/* ── The window ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 440,
            height: 360,
            borderRadius: 20,
            border: `2px solid ${INK}`,
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              height: 46,
              padding: "0 18px",
              borderBottom: `2px solid ${INK}`,
            }}
          >
            {TRAFFIC.map((colour) => (
              <div
                key={colour}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 6,
                  backgroundColor: colour,
                }}
              />
            ))}
            <div
              style={{
                width: 190,
                height: 16,
                marginLeft: 12,
                borderRadius: 8,
                backgroundColor: SURFACE,
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: 22,
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              <div
                style={{
                  width: 236,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: TINT,
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: 100,
                  borderRadius: 10,
                  backgroundColor: SURFACE,
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                width: 200,
                height: 12,
                marginTop: 20,
                borderRadius: 6,
                backgroundColor: SURFACE,
              }}
            />
            <div
              style={{
                display: "flex",
                width: 140,
                height: 12,
                marginTop: 9,
                borderRadius: 6,
                backgroundColor: SURFACE,
              }}
            />

            <div
              style={{
                display: "flex",
                width: 116,
                height: 32,
                marginTop: 18,
                borderRadius: 16,
                backgroundColor: BLUE,
              }}
            />

            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 56,
                    borderRadius: 10,
                    backgroundColor: SURFACE,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
