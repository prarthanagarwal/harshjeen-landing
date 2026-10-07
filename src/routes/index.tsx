import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/hillside-hero.png.asset.json";

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
          <img className="hero-image" src={heroAsset.url} alt="An illustrated green hillside and winding path beneath a blue sky and billowing white cloud" width={1200} height={675} fetchPriority="high" />
          <div className="page-container hero-copy enter">
            <div className="eyebrow">One home. Many possibilities.</div>
            <h1 id="company-title">HarshJeen<span>InfoTech</span></h1>
            <p className="hero-description">A home for thoughtfully built digital products.<br />Independent ideas, brought together under one company.</p>
            <div className="hero-actions"><Button asChild className="hero-action hero-primary"><a href="#our-work">Explore our work <ArrowDown aria-hidden="true" /></a></Button><Button asChild variant="outline" className="hero-action hero-glass"><a href="https://www.prarthanagarwal.com" target="_blank" rel="noopener noreferrer">Meet the founder <ArrowUpRight aria-hidden="true" /></a></Button></div>
          </div>
        </section>
        <section id="our-work" className="page-container work-section" aria-labelledby="work-title">
          <div className="section-topline"><h2 id="work-title" className="section-label">From our company</h2><span className="section-index">Ideas, made real.</span></div>
          <div className="work-grid">
            <a href="https://www.pinky-promise.app" target="_blank" rel="noopener noreferrer" className="promise-art" aria-label="Visit Pinky Promise (opens in a new tab)">
              <span className="promise-symbol" aria-hidden="true">p.</span><span className="promise-wordmark">pinky promise.</span><span className="promise-domain">Less scrolling. More living.</span>
            </a>
            <div className="work-copy">
              <div className="app-category"><span className="status-dot" /> An app by HarshJeen InfoTech</div>
              <h2>Pinky Promise</h2>
              <p>A gentler relationship with your screen. An iPhone app that helps you make promises around your screen time — on your own, or together.</p>
              <Button asChild variant="editorial"><a href="https://www.pinky-promise.app" target="_blank" rel="noopener noreferrer">Discover Pinky Promise <ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </div>
        </section>
        <section id="founder" className="founder-band" aria-labelledby="founder-title"><div className="page-container founder-section">
          <div><div className="section-label">The person behind it</div><h2 id="founder-title" className="founder-name">Prarthan Agarwal</h2></div>
          <div className="founder-copy"><p>An independent builder, turning ideas into digital experiences. Explore the work and perspective behind HarshJeen InfoTech.</p><Button asChild variant="editorial"><a href="https://www.prarthanagarwal.com" target="_blank" rel="noopener noreferrer">Visit personal portfolio <ArrowUpRight aria-hidden="true" /></a></Button></div>
        </div></section>
      </main>
      <footer className="site-footer"><div className="page-container footer-inner"><div><div className="footer-brand">HarshJeen InfoTech</div><div className="footer-note">© 2026 · A home for what comes next.</div></div><div className="gst">GSTIN <span>24GNXPP5076B1ZI</span></div></div></footer>
    </div>
  );
}
