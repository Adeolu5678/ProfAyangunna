"use client";
import { education } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Education.module.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className={`${styles.section} section`} ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left header */}
          <div className={styles.left}>
            <p className="section-label reveal">Academic Formation</p>
            <h2 className={`section-title reveal reveal-delay-1`}>
              Education &amp;<br />Qualifications
            </h2>
            <span className="accent-line reveal reveal-delay-2" />
            <p className={`${styles.body} reveal reveal-delay-2`}>
              A distinguished academic trajectory spanning decades of dedicated scholarship and research in the social sciences.
            </p>
          </div>

          {/* Right: education items */}
          <div className={styles.right}>
            {education.map((e, i) => (
              <div
                key={i}
                className={`${styles.item} ${e.highlight ? styles.highlighted : ""} reveal`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {e.highlight && (
                  <div className={styles.highlightBadge}>Doctoral Studies</div>
                )}
                <div className={styles.periodRow}>
                  <span className={styles.period}>{e.period}</span>
                  {e.highlight && <span className={styles.phdTag}>PhD</span>}
                </div>
                <h3 className={styles.degree}>{e.degree}</h3>
                <p className={styles.institution}>{e.institution}</p>
                {e.affiliation && <p className={styles.affiliation}>{e.affiliation}</p>}
                <p className={styles.location}>{e.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
