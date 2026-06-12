import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

type OgCardOptions = {
  eyebrow: string;
  title: string;
  detail?: string;
};

export function renderOgCard({ eyebrow, title, detail }: OgCardOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgb(16,38,63) 0%, rgb(23,55,88) 42%, rgb(46,91,122) 100%)",
          color: "rgb(245,244,241)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(140,190,220,0.28), transparent 32%), radial-gradient(circle at bottom left, rgba(214,210,200,0.14), transparent 28%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -70,
            width: 360,
            height: 360,
            borderRadius: 9999,
            border: "1px solid rgba(245,244,241,0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 54,
            bottom: 58,
            width: 220,
            height: 220,
            borderRadius: 9999,
            border: "1px solid rgba(245,244,241,0.08)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "64px 72px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                  color: "rgb(214,210,200)",
                }}
              >
                {eyebrow}
              </div>
              <div
                style={{
                  display: "flex",
                  width: 132,
                  height: 6,
                  borderRadius: 9999,
                  background: "rgb(140,190,220)",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                borderRadius: 9999,
                border: "1px solid rgba(245,244,241,0.18)",
                color: "rgb(245,244,241)",
                fontSize: 18,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              armacons.com
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 860,
              gap: 22,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
            {detail ? (
              <div
                style={{
                  display: "flex",
                  maxWidth: 900,
                  fontSize: 28,
                  lineHeight: 1.35,
                  color: "rgba(245,244,241,0.9)",
                }}
              >
                {detail}
              </div>
            ) : null}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 20,
              color: "rgb(214,210,200)",
            }}
          >
            <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 18, letterSpacing: 2, textTransform: "uppercase" }}>
                Arma Infrastructure
              </div>
              <div style={{ display: "flex", opacity: 0.9 }}>
                Heavy civil, water, transport and structural infrastructure
              </div>
            </div>
            <div style={{ display: "flex", fontSize: 18 }}>Ankara, Turkey</div>
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
