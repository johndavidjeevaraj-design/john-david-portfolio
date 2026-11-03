import { ImageResponse } from "next/og";

export const alt = "John David Jeevaraj — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background:
            "radial-gradient(ellipse at 82% 20%, #253020 0%, #111510 34%, #090b09 75%)",
          color: "#f3f4ed",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 4,
            color: "#b7c1ad",
          }}
        >
          <span>JD<span style={{ color: "#c5ff54" }}>.</span></span>
          <span>PORTFOLIO / 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 22,
              color: "#c5ff54",
              fontSize: 17,
              letterSpacing: 5,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: 99,
                background: "#c5ff54",
              }}
            />
            FULL STACK DEVELOPER
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.04,
              letterSpacing: -4,
              fontWeight: 800,
            }}
          >
            <span>JOHN DAVID</span>
            <span style={{ color: "#c5ff54" }}>JEEVARAJ.</span>
          </div>

          <div
            style={{
              marginTop: 28,
              color: "#a7ada2",
              fontSize: 22,
              letterSpacing: 0.2,
            }}
          >
            Building digital products with code & creativity.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #42483c",
            paddingTop: 22,
            color: "#b7c1ad",
            fontSize: 16,
            letterSpacing: 2,
          }}
        >
          <span>HOSUR, INDIA</span>
          <span style={{ color: "#c5ff54" }}>DESIGN / ENGINEERING / DEVELOPMENT ↗</span>
        </div>

        <div
          style={{
            position: "absolute",
            right: 84,
            top: 165,
            width: 220,
            height: 220,
            border: "1px solid rgba(197,255,84,0.16)",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 150,
              height: 150,
              border: "1px solid rgba(197,255,84,0.3)",
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(197,255,84,0.24)",
              fontSize: 74,
              fontWeight: 800,
            }}
          >
            JD
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
