"use client";
import { personal, referees } from "@/data/cv";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      {/* CTA strip */}
      <div className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Open to Collaboration</h2>
              <p className={styles.ctaBody}>
                Research partnerships, speaking engagements, and academic collaborations welcome.
              </p>
            </div>
            <a href={`mailto:${personal.email}`} className={styles.ctaBtn}>
              Get in Touch ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Identity */}
            <div className={styles.identity}>
              <h3 className={styles.name}>Prof. James Ayangunna</h3>
              <p className={styles.designation}>{personal.designation}</p>
              <p className={styles.org}>{personal.role}<br />{personal.organisation}</p>
              <div className={styles.contact}>
                <a href={`mailto:${personal.email}`} className={styles.contactLink}>{personal.email}</a>
                {personal.phone.map((p, i) => (
                  <a key={i} href={`tel:${p.replace(/\s/g, "")}`} className={styles.contactLink}>{p}</a>
                ))}
              </div>
              {personal.orcid !== "To be provided" && (
                <div className={styles.orcidRow}>
                  <span className={styles.orcidLabel}>ORCID</span>
                  <a href={`https://orcid.org/${personal.orcid}`} target="_blank" rel="noopener noreferrer" className={styles.orcidLink}>
                    {personal.orcid}
                  </a>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className={styles.navCol}>
              <p className={styles.colLabel}>Navigate</p>
              {["#about", "#publications", "#peer-review", "#experience", "#education"].map((href) => (
                <a key={href} href={href} className={styles.footerLink}>
                  {href.replace("#", "").replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                </a>
              ))}
            </div>

            {/* Referees */}
            {referees.length > 0 && (
              <div className={styles.refCol}>
                <p className={styles.colLabel}>Academic Referees</p>
                {referees.map((r, i) => (
                  <div key={i} className={styles.referee}>
                    <p className={styles.refName}>{r.name}</p>
                    <p className={styles.refTitle}>{r.title}</p>
                    <p className={styles.refOrg}>{r.organisation}</p>
                    <a href={`mailto:${r.email}`} className={styles.refEmail}>{r.email}</a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom bar */}
          <div className={styles.bottom}>
            <p className={styles.bottomText}>
              © {new Date().getFullYear()} Professor James Ayangunna. All rights reserved.
            </p>
            <p className={styles.bottomText}>
              {personal.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
