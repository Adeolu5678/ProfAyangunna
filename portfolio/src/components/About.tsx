"use client";
import { personal, awards, memberships } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./About.module.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={`${styles.about} section`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: section heading */}
          <div className={styles.headingCol}>
            <p className={`section-label reveal`}>Who I Am</p>
            <h2 className={`section-title reveal reveal-delay-1`}>
              Professor &<br />Researcher
            </h2>
            <span className={`accent-line reveal reveal-delay-2`} />
            <div className={`${styles.credentials} reveal reveal-delay-2`}>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Specialisation</span>
                <span className={styles.credVal}>Social Sciences</span>
              </div>
              {personal.orcid !== "To be provided" && (
                <div className={styles.credential}>
                  <span className={styles.credLabel}>ORCID iD</span>
                  <a href={`https://orcid.org/${personal.orcid}`} target="_blank" rel="noopener noreferrer" className={styles.credLink}>
                    {personal.orcid}
                  </a>
                </div>
              )}
              <div className={styles.credential}>
                <span className={styles.credLabel}>Languages</span>
                <span className={styles.credVal}>{personal.languages.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Right: Research interest + pull quotes */}
          <div className={styles.contentCol}>
            <p className={`${styles.lead} reveal`}>
              {personal.researchInterest}
            </p>

            <p className={`${styles.body} reveal reveal-delay-1`}>
              Professor James Ayangunna is a distinguished academic at the University of Ibadan, 
              Department of Social Sciences. Full biography to be provided.
            </p>

            {/* Awards */}
            {awards.length > 0 && (
              <div className={`${styles.awards} reveal reveal-delay-2`}>
                <p className={styles.awardsTitle}>Recognition</p>
                <div className={styles.awardsList}>
                  {awards.map((a, i) => (
                    <div key={i} className={styles.award}>
                      <span className={styles.awardYear}>{a.year}</span>
                      <div>
                        <span className={styles.awardName}>{a.title}</span>
                        <span className={styles.awardBody}>{a.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Memberships */}
            {memberships.length > 0 && (
              <div className={`${styles.memberships} reveal reveal-delay-3`}>
                {memberships.map((m, i) => (
                  <div key={i} className={styles.membership}>
                    <span className={styles.membershipDot} />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
