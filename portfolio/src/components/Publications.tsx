"use client";
import { useState } from "react";
import { publications } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Publications.module.css";

type PubTab = "journals" | "books" | "articles" | "theses";

export default function Publications() {
  const [tab, setTab] = useState<PubTab>("journals");
  const ref = useReveal();

  const tabs: { key: PubTab; label: string; count: number }[] = [
    { key: "journals", label: "Journal Articles", count: publications.journals.length },
    { key: "books", label: "Books", count: publications.books.length + publications.coAuthored.length },
    { key: "articles", label: "Articles & Chapters", count: publications.articles.length + publications.chapters.length },
    { key: "theses", label: "Theses", count: publications.theses.length },
  ];

  return (
    <section id="publications" className={`${styles.pubs} section`} ref={ref as React.Ref<HTMLElement>}>
      <div className="container">
        {/* Header — uses useReveal normally (always visible) */}
        <div className={styles.header}>
          <p className="section-label reveal">Scholarly Output</p>
          <h2 className={`section-title reveal reveal-delay-1`}>Publications</h2>
          <p className={`${styles.subtitle} reveal reveal-delay-2`}>
            A corpus of peer-reviewed journals, authored books, conference articles, and doctoral research spanning the social sciences.
          </p>
        </div>

        {/* Tab Nav */}
        <div className={`${styles.tabNav} reveal reveal-delay-2`} role="tablist">
          {tabs.filter(t => t.count > 0 || t.key === "journals").map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={`${styles.tabBtn} ${tab === t.key ? styles.tabActive : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
              <span className={styles.tabCount}>{t.count}</span>
            </button>
          ))}
        </div>

        {/* ── Tab Panels ─────────────────────────────────────────
            Key prop forces a remount on tab change so the CSS
            @keyframes tabFadeIn always replays — no IntersectionObserver needed.
        ──────────────────────────────────────────────────────── */}

        {/* Journals */}
        {tab === "journals" && (
          <div key="journals" className={`${styles.list} ${styles.tabPanel}`}>
            {[...publications.journals].sort((a, b) => b.year - a.year).map((j, i) => (
              <article
                key={i}
                className={styles.pubItem}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{j.year}</span>
                  {j.doi && (
                    <a
                      href={j.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.doiLink}
                    >
                      DOI ↗
                    </a>
                  )}
                </div>
                <div className={styles.pubContent}>
                  {j.doi ? (
                    <a
                      href={j.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.pubTitleLink}
                    >
                      {j.title}
                    </a>
                  ) : (
                    <h3 className={styles.pubTitle}>{j.title}</h3>
                  )}
                  <p className={styles.pubAuthors}>{j.authors}</p>
                  <p className={styles.pubJournal}>
                    <em>{j.journal}</em>
                    {j.details && ` — ${j.details}`}
                    {j.month && `. ${j.month}`}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Books */}
        {tab === "books" && (
          <div key="books" className={`${styles.booksGrid} ${styles.tabPanel}`}>
            <div className={styles.booksSubgroup}>
              <p className={styles.subgroupLabel}>Sole Author</p>
              {[...publications.books].sort((a, b) => b.year - a.year).map((b, i) => (
                <article
                  key={i}
                  className={styles.bookCard}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <span className={styles.bookYear}>{b.year}</span>
                  <div>
                    <h3 className={styles.bookTitle}>{b.title}</h3>
                    <p className={styles.bookPublisher}>{b.location}: {b.publisher}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.booksSubgroup}>
              <p className={styles.subgroupLabel}>Co-Authored</p>
              {[...publications.coAuthored].sort((a, b) => b.year - a.year).map((b, i) => (
                <article
                  key={i}
                  className={styles.bookCard}
                  style={{ animationDelay: `${(i + publications.books.length) * 0.08}s` }}
                >
                  <span className={styles.bookYear}>{b.year}</span>
                  <div>
                    <h3 className={styles.bookTitle}>{b.title}</h3>
                    <p className={styles.bookAuthors}>{b.authors}</p>
                    <p className={styles.bookPublisher}>{b.location}: {b.publisher}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Articles & Chapters */}
        {tab === "articles" && (
          <div key="articles" className={`${styles.list} ${styles.tabPanel}`}>
            {[...publications.chapters].sort((a, b) => b.year - a.year).map((c, i) => (
              <article
                key={`ch-${i}`}
                className={`${styles.pubItem} ${styles.pubItemChap}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{c.year}</span>
                  <span className={styles.pubTag}>Chapter</span>
                </div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>{c.title}</h3>
                  <p className={styles.pubJournal}>
                    In <em>{c.book}</em>. {c.editor}. {c.location}: {c.publisher}
                  </p>
                </div>
              </article>
            ))}
            {[...publications.articles].sort((a, b) => b.year - a.year).map((a, i) => (
              <article
                key={`ar-${i}`}
                className={styles.pubItem}
                style={{ animationDelay: `${(i + publications.chapters.length) * 0.05}s` }}
              >
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{a.year}</span>
                </div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>{a.title}</h3>
                  <p className={styles.pubJournal}>
                    <em>{a.venue}</em>
                    {a.pages && `, pp. ${a.pages}`}
                    {a.month && `. ${a.month}`}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Theses */}
        {tab === "theses" && (
          <div key="theses" className={`${styles.thesesList} ${styles.tabPanel}`}>
            {[...publications.theses].sort((a, b) => b.year - a.year).map((t, i) => (
              <article
                key={i}
                className={styles.thesisItem}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.thesisLeft}>
                  <span className={styles.thesisYear}>{t.year}</span>
                  <span className={styles.thesisType}>{t.type}</span>
                </div>
                <div className={styles.thesisRight}>
                  <h3 className={styles.thesisTitle}>{t.title}</h3>
                  <p className={styles.thesisInst}>{t.institution}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
