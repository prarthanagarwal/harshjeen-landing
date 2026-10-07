import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "HarshJeen InfoTech — Thoughtfully built, together." },
    { name: "description", content: "HarshJeen InfoTech is the registered parent company behind Pinky Promise and future digital products. Explore our work and founder Prarthan Agarwal’s portfolio." },
    { property: "og:title", content: "HarshJeen InfoTech — Thoughtfully built, together." },
    { property: "og:description", content: "One home for considered ideas. The company behind Pinky Promise and future digital products." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <div>
      <header className="site-header page-container">
        <a className="brand" href="/" aria-label="HarshJeen InfoTech home"><span className="brand-mark" aria-hidden="true">HJ</span><span>HarshJeen InfoTech</span></a>
        <nav className="header-nav" aria-label="Main navigation">
          <a className="nav-link work-nav" href="#our-work">Our work</a>
          <a className="nav-link" href="#founder">The founder <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main>
        <section className="hero" aria-labelledby="company-title">
          <img className="hero-image" src="/art/harshjeen-hero-soft.webp" alt="Illustrated hillside overlooking a city, with a laptop and book beneath a tree" width={1672} height={941} fetchPriority="high" />
          <div className="page-container hero-copy enter">
            <div className="eyebrow">One home. Many possibilities.</div>
            <h1 id="company-title">HarshJeen<span>InfoTech</span></h1>
            <p className="hero-description">The parent company behind thoughtfully built apps and websites.</p>
            <div className="hero-actions"><Button asChild className="hero-action hero-primary"><a href="#our-work">Explore our work <ArrowDown aria-hidden="true" /></a></Button><Button asChild variant="outline" className="hero-action hero-glass"><a href="https://www.prarthanagarwal.com" target="_blank" rel="noopener noreferrer">Meet the founder <ArrowUpRight aria-hidden="true" /></a></Button></div>
          </div>
        </section>
        <section id="our-work" className="page-container work-section" aria-labelledby="work-title">
          <div className="section-topline"><h2 id="work-title" className="section-label">From our company</h2><span className="section-index">Ideas, made real.</span></div>
          <div className="work-grid promise-feature">
            <a href="https://www.pinky-promise.app" target="_blank" rel="noopener noreferrer" className="site-preview promise-preview" aria-label="Visit the Pinky Promise website (opens in a new tab)">
              <img src="/site-previews/pinky-promise.png" alt="Pinky Promise homepage, introducing a kinder way to keep screen-time promises." width="1200" height="900" loading="lazy" decoding="async" />
            </a>
            <div className="work-copy">
              <div className="app-category"><span className="status-dot" /> An app by HarshJeen InfoTech</div>
              <h2>Pinky Promise</h2>
              <p>A gentler relationship with your screen. Make promises around your screen time on your own, or together with someone you trust.</p>
              <Button asChild variant="editorial"><a href="https://www.pinky-promise.app" target="_blank" rel="noopener noreferrer">Discover Pinky Promise <ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>
        <section id="founder" className="founder-band" aria-labelledby="founder-title"><div className="page-container founder-section">
          <div className="founder-copy"><div className="section-label">The person behind it</div><h2 id="founder-title" className="founder-name">Prarthan Agarwal</h2><p>An independent builder, designer, writer, developer, and filmmaker. Explore the projects and ideas behind the person building HarshJeen InfoTech.</p><Button asChild variant="editorial"><a href="https://www.prarthanagarwal.com" target="_blank" rel="noopener noreferrer">Visit Prarthan’s portfolio <ArrowUpRight aria-hidden="true" /></a></Button></div>
          <a className="site-preview portfolio-preview" href="https://www.prarthanagarwal.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Prarthan Agarwal’s personal portfolio (opens in a new tab)">
            <img src="/site-previews/prarthan-agarwal.png" alt="Prarthan Agarwal’s personal portfolio homepage, with a note about his work and current projects." width="1200" height="900" loading="lazy" decoding="async" />
          </a>
        </div></section>
      </main>
      <footer className="site-footer"><div className="page-container footer-inner"><div><div className="footer-brand">HarshJeen InfoTech</div><p className="footer-note">Independent ideas, under one home.</p></div><div className="footer-meta"><span>© 2026 HarshJeen InfoTech</span><span>GSTIN 24GNXPP5076B1ZI</span></div></div></footer>
    </div>
  );
}
