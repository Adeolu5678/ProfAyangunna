"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Peer Review", href: "#peer-review" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoName}>J. Ayangunna</span>
          <span className={styles.logoTitle}>Professor · Social Sciences</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`${styles.link} ${active === l.href ? styles.linkActive : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ""}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ""}`} />
        </button>
      </div>
    </nav>
  );
}
