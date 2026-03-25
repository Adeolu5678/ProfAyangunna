"use client";
import { experience } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Experience.module.css";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className={`${styles.section} section`} ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label reveal">Career</p>
          <h2 className={`section-title reveal reveal-delay-1`}>Professional<br />Experience</h2>
          <span className="accent-line reveal reveal-delay-2" />
        </div>

        <div className={styles.timeline}>
          {experience.map((e, i) => (
            <div
              key={i}
              className={`${styles.item} ${e.current ? styles.current : ""} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Connector */}
              <div className={styles.track}>
                <div className={`${styles.dot} ${e.current ? styles.dotCurrent : ""}`} />
                {i < experience.length - 1 && <div className={styles.line} />}
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.contentTop}>
                  <div>
                    <h3 className={styles.role}>{e.role}</h3>
                    <p className={styles.org}>{e.organisation}</p>
                    {e.division && <p className={styles.div}>{e.division}</p>}
                  </div>
                  <span className={`${styles.period} ${e.current ? styles.periodCurrent : ""}`}>
                    {e.period}
                    {e.current && <span className={styles.badge}>Current</span>}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
