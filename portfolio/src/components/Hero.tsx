"use client";
import { useEffect, useRef } from "react";
import { personal, publications, peerReview } from "@/data/cv";
import styles from "./Hero.module.css";

const totalPubs =
  publications.journals.length +
  publications.books.length +
  publications.coAuthored.length +
  publications.theses.length +
  publications.chapters.length +
  publications.articles.length;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-hero]");
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      }, 120 + i * 140);
    });
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      {/* Background vertical text */}
      <div className={styles.bgText} aria-hidden>AYANGUNNA</div>

      <div className={styles.container}>
        {/* Left column */}
        <div className={styles.left}>
          <p className={styles.label} data-hero style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
            Academic Portfolio
          </p>

          <h1 className={styles.name} data-hero style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
            <span className={styles.nameFirst}>James</span>
            <span className={styles.nameLast}>Ayangunna</span>
          </h1>

          <div
            className={styles.roleBlock}
            data-hero
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <span className={styles.roleDot} />
            <span className={styles.roleText}>{personal.designation}</span>
          </div>

          <p
            className={styles.org}
            data-hero
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          >
            {personal.role}
            <br />
            <em>{personal.organisation}</em>
          </p>

          <div
            className={styles.actions}
            data-hero
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <a href="#publications" className={styles.btnPrimary}>Explore Research</a>
            <a href={`mailto:${personal.email}`} className={styles.btnGhost}>Get in Touch</a>
          </div>
        </div>

        {/* Right column — stats + quote */}
        <div className={styles.right}>
          <div
            className={styles.quote}
            data-hero
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <span className={styles.quoteMarks}>&ldquo;</span>
            <p>
              Advancing knowledge through rigorous research and dedicated scholarship in the social sciences.
            </p>
          </div>

          {totalPubs > 0 && (
            <div
              className={styles.stats}
              data-hero
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div className={styles.stat}>
                <span className={styles.statNum}>{totalPubs}+</span>
                <span className={styles.statLabel}>Publications</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>{peerReview?.length ?? 0}</span>
                <span className={styles.statLabel}>Peer Reviews</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>—</span>
                <span className={styles.statLabel}>Yrs Service</span>
              </div>
            </div>
          )}

          {personal.orcid !== "To be provided" && (
            <div
              className={styles.orcid}
              data-hero
              style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            >
              <span className={styles.orcidLabel}>ORCID iD</span>
              <a
                href={`https://orcid.org/${personal.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orcidVal}
              >
                {personal.orcid}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} data-hero style={{ opacity: 0, transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)" }}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
