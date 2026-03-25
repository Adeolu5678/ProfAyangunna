"use client";
import { peerReview } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./PeerReview.module.css";

const journals = [...new Set(peerReview.map((r) => r.journal))];

export default function PeerReview() {
  const ref = useReveal();

  if (peerReview.length === 0) return null;

  return (
    <section id="peer-review" className={`${styles.section} section`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left heading */}
          <div className={styles.heading}>
            <p className="section-label reveal">Editorial Service</p>
            <h2 className={`section-title reveal reveal-delay-1`}>
              Peer Review<br />Activity
            </h2>
            <span className="accent-line reveal reveal-delay-2" />
            <p className={`${styles.body} reveal reveal-delay-2`}>
              A distinguished academic trajectory spanning decades of dedicated scholarship and research in the social sciences.
            </p>
            <div className={`${styles.journalsList} reveal reveal-delay-3`}>
              <p className={styles.journalsLabel}>Journals Served</p>
              {journals.map((j, i) => (
                <div key={i} className={styles.journalTag}>{j}</div>
              ))}
            </div>
          </div>

          {/* Right: review cards */}
          <div className={styles.cards}>
            {peerReview.map((r, i) => (
              <div
                key={i}
                className={`${styles.card} reveal`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.cardContent}>
                  <p className={styles.reviewTitle}>{r.title}</p>
                  <p className={styles.reviewJournal}>{r.journal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
