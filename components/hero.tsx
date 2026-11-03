
"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  useMetalTextReflection,
  setCursorLightConfig,
  setGlowConfig,
} from "metal-fx";

// metal-fx mounts a WebGL canvas only on the client. Load it with ssr:false so
// the server and the first client render both emit the plain-text fallback,
// then swap to <MetalText> after hydration (no hydration mismatch).
const MetalText = dynamic(
  () => import("metal-fx").then((m) => m.MetalText),
  { ssr: false, loading: () => <span>NEXT.</span> }
);

export default function Hero() {
  const whatsRef = useRef<HTMLSpanElement | null>(null);
  useMetalTextReflection(whatsRef);

  useEffect(() => {
    setCursorLightConfig({ cursor: false });
    setGlowConfig({
      haloOpMul: 1.7,
      peakOp: 0.95,
      baseOp: 0.32,
      pointGain: 3.2,
    });
  }, []);
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />

      {/* NAVIGATION */}
      <header className="hero-nav">
        <a href="#home" className="hero-logo" aria-label="Home">
          JD<span>.</span>
        </a>

        <span className="hero-nav-center">
          FULL STACK DEVELOPER
        </span>

        <nav className="hero-nav-links" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#certifications">CERTIFICATIONS</a>

          <a href="#contact" className="hero-contact-link">
            LET&apos;S TALK <span>↗</span>
          </a>
        </nav>
      </header>

      {/* HERO CONTENT */}
      <div className="hero-main">
        <div className="hero-intro">
          <span className="hero-index">
            PORTFOLIO — 2026
          </span>

          <span className="hero-location">
            HOSUR, INDIA <i />
          </span>
        </div>

        <div className="hero-heading-wrap">
          <div className="hero-heading">
            <span className="hero-kicker">
              FULL STACK / ENGINEERING / CREATIVE TECHNOLOGY
            </span>

            <h1>
              BUILDING
              <br />
              <span className="hero-heading-second">
                <span ref={whatsRef}>WHAT&apos;S</span>{" "}
                <MetalText
                  font="800 1em/0.84 Manrope, sans-serif"
                  color="#E2E2E2"
                  theme="dark"
                  strength={0.95}
                  glow
                  glowGain={3.2}
                  reflectionTargets={[{ ref: whatsRef, strength: 0.64 }]}
                >
                  NEXT.
                </MetalText>
              </span>
            </h1>
          </div>

          {/* ABSTRACT ORBITAL ART */}
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-orbit orbit-one" />
            <div className="hero-art-orbit orbit-two" />
            <div className="hero-art-orbit orbit-three" />

            <div className="hero-art-core">
              <div className="hero-art-core-inner" />
            </div>

            <span className="hero-art-cross cross-one">+</span>
            <span className="hero-art-cross cross-two">+</span>

            <span className="hero-art-label">
              IDEAS → REALITY
            </span>

            <span className="hero-art-number">
              01 / 03
            </span>
          </div>

          {/* SIDE NOTE */}
          <div className="hero-side-note">
            <span className="hero-side-line" />

            <p>
              DIGITAL PRODUCTS
              <br />
              &amp; WEB APPLICATIONS
            </p>
          </div>
        </div>

        {/* HERO FOOTER */}
        <div className="hero-bottom">
          <p className="hero-description">
            I&apos;m John David Jeevaraj — an Information Technology
            graduate and full-stack developer focused on building{" "}
            <strong>
              functional digital products and meaningful web experiences.
            </strong>
          </p>

          <a href="#work" className="hero-explore">
            <span className="hero-explore-icon">↓</span>

            <span>
              EXPLORE
              <small>SCROLL TO DISCOVER</small>
            </span>
          </a>

          <div className="hero-availability">
            <span className="availability-dot" />
            OPEN TO FULL STACK OPPORTUNITIES
          </div>
        </div>
      </div>

      {/* MOVING SKILLS STRIP */}
      <div
        className="hero-ticker"
        aria-label="Areas of expertise and interest"
      >
        <div className="hero-ticker-track">
          {[0, 1].map((group) => (
            <div
              className="hero-ticker-group"
              key={group}
              aria-hidden={group === 1}
            >
              <span>FULL STACK DEVELOPMENT</span>
              <i>✳</i>
              <span>WEB ENGINEERING</span>
              <i>✳</i>
              <span>UI / UX DESIGN</span>
              <i>✳</i>
              <span>CREATIVE TECHNOLOGY</span>
              <i>✳</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
