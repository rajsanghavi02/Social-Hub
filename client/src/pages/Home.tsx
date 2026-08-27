/**
 * SOCIAL HUB DESIGN REMINDER — Clean Editorial Signal:
 * Warm paper-white, ink black, and Social Signal Pink; asymmetric editorial flow,
 * sharp rules and signal strokes, Bodoni Moda for statements, DM Sans for clarity.
 * This is an approval-stage homepage concept, not the final production build.
 */
import { Button } from "@/components/ui/button";
import { getSocialHubPhone, getSocialHubPhoneHref } from "@/lib/contact";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  Phone,
} from "lucide-react";

const suppliedLogo = "/manus-storage/social-hub-supplied-logo_1446de7c.jpg";
const sparkMark = "/manus-storage/social-hub-spark-mark_6f5fa7b1.png";
const heroImage = "/manus-storage/social-hub-hero-editorial_ac5e19e7.jpg";
const contentImage = "/manus-storage/social-hub-content-tile_6dfed556.jpg";
const growthImage = "/manus-storage/social-hub-growth-tile_b901bd01.jpg";

const services = [
  {
    number: "01",
    title: "Social media management",
    description:
      "A consistent, considered presence across Instagram and the channels that matter to your customers.",
  },
  {
    number: "02",
    title: "Content creation",
    description:
      "Photos, reels, videos, and post formats designed to give your brand something worth stopping for.",
  },
  {
    number: "03",
    title: "Collaboration shoots",
    description:
      "Creative planning and on-location production for partnerships, launches, and promotional campaigns.",
  },
  {
    number: "04",
    title: "Multi-account management",
    description:
      "One clear point of coordination for businesses managing more than one audience, location, or account.",
  },
  {
    number: "05",
    title: "Reach & engagement",
    description:
      "Content and channel strategy that helps the right people find your business and join the conversation.",
  },
  {
    number: "06",
    title: "Digital marketing",
    description:
      "A joined-up marketing foundation that turns everyday social activity into meaningful brand momentum.",
  },
];

function ScrollButton({ children }: { children: ReactNode }) {
  return (
    <Button
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      className="cta-button group h-auto rounded-none bg-[#111114] px-5 py-3.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white hover:bg-[#f63e73]"
    >
      {children}
      <ArrowUpRight className="ml-3 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Button>
  );
}

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const phoneNumber = getSocialHubPhone();
  const phoneHref = getSocialHubPhoneHref(phoneNumber);

  useEffect(() => {
    let animationFrame = 0;
    const updateScrollMotion = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      document.documentElement.style.setProperty("--hub-scroll", progress.toFixed(3));
      setHasScrolled((previous) => {
        const next = window.scrollY > 12;
        return previous === next ? previous : next;
      });
      animationFrame = 0;
    };
    const onScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { rootMargin: "0px 0px -11% 0px", threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return (
    <div className="concept-page min-h-screen overflow-hidden bg-[#fdfcf9] text-[#111114]">
      <header className={`concept-header ${hasScrolled ? "is-scrolled" : ""}`}>
        <a href="#top" className="brand-lockup" aria-label="Social Hub home">
          <img src={sparkMark} alt="" className="brand-spark" />
          <span>Social Hub</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <Button
          variant="outline"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="header-contact h-auto rounded-none border-[#111114] px-4 py-2.5 text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[#111114] hover:bg-[#111114] hover:text-white"
        >
          Let&apos;s talk
        </Button>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Social growth partner</p>
            <h1 id="hero-heading">
              Make your next
              <em>scroll</em> count.
            </h1>
            <p className="hero-intro">
              Social Hub brings strategy, content, and account management together—so your brand has a clearer voice and a stronger place online.
            </p>
            <div className="hero-actions">
              <ScrollButton>Start a conversation</ScrollButton>
              <a href="#services" className="text-action">
                Explore what we do <ArrowDown className="size-4" />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Social Hub campaign direction">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Art-directed content production tools in Social Hub brand colours" />
            </div>
            <div className="identity-card">
              <p>Built by</p>
              <img src={suppliedLogo} alt="Her Social Hub logo" />
            </div>
            <img src={sparkMark} alt="" className="floating-spark" />
            <p className="visual-caption">Digital marketing<br />Social media<br />Branding</p>
          </div>

          <div className="hero-note">Designed for brands ready to be recognised, not just seen.</div>
        </section>

        <section className="statement-section" data-reveal aria-label="Social Hub positioning">
          <p className="section-index">The Social Hub difference</p>
          <p className="statement">
            One focused partner to help your social channels look sharper, <em>work harder,</em> and feel truly yours.
          </p>
        </section>

        <section id="services" className="services-section" data-reveal aria-labelledby="services-heading">
          <div className="services-intro">
            <p className="eyebrow"><span /> Our services</p>
            <h2 id="services-heading">Every part of your social presence, working in one direction.</h2>
            <p>
              Whether you need day-to-day account care, a campaign shoot, or broader digital marketing support, Social Hub can shape the work around your business.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article key={service.number} className="service-row">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ArrowUpRight className="service-arrow" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="approach-section" data-reveal aria-labelledby="approach-heading">
          <div className="approach-header">
            <p className="eyebrow light"><span /> How we work</p>
            <h2 id="approach-heading">From a good idea<br />to real momentum.</h2>
          </div>
          <div className="process-rail">
            <div><b>01</b><span>Understand your brand</span><p>Your priorities, audience, and point of view set the direction.</p></div>
            <div><b>02</b><span>Build the creative plan</span><p>We shape the content, campaign, and account rhythm around your goals.</p></div>
            <div><b>03</b><span>Make it move</span><p>Consistent output and hands-on channel care turn the plan into presence.</p></div>
          </div>
        </section>

        <section className="image-led-section" data-reveal aria-label="Content and growth services">
          <div className="image-story content-story">
            <div className="story-copy">
              <p className="eyebrow"><span /> Content with intention</p>
              <h2>More than a post. A recognisable point of view.</h2>
              <p>We turn everyday ideas into social content that is aligned, useful, and unmistakably on-brand.</p>
            </div>
            <img src={contentImage} alt="Editorial Social Hub content creation still life" />
          </div>
          <div className="image-story growth-story">
            <img src={growthImage} alt="Abstract visual representing Social Hub reach and engagement strategy" />
            <div className="story-copy">
              <p className="eyebrow"><span /> Growth, without the guesswork</p>
              <h2>Build a social presence people want to return to.</h2>
              <p>Thoughtful content, meaningful interaction, and clear digital support all help turn attention into connection.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" data-reveal aria-labelledby="contact-heading">
          <div className="contact-spark-wrap"><img src={sparkMark} alt="" /></div>
          <p className="eyebrow light"><span /> Let&apos;s work together</p>
          <h2 id="contact-heading">Let&apos;s map your<br /><em>social momentum.</em></h2>
          <p className="contact-copy">Tell us where your brand is now and where you want it to go. We&apos;ll start the conversation from there.</p>
          <div className="contact-links">
            <a className="contact-link" href={phoneHref} aria-label={`Call Social Hub on ${phoneNumber}`}><Phone className="size-4" /> {phoneNumber || "Phone number to be added"} <small>Placeholder</small></a>
            <a className="contact-link" href="https://www.instagram.com/hersocial.hub?igsi=dTZrOWJsZnppdWlw" target="_blank" rel="noreferrer"><Instagram className="size-4" /> @hersocial.hub <ArrowUpRight className="size-4" /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand-lockup"><img src={sparkMark} alt="" className="brand-spark" /><span>Social Hub</span></div>
        <p>Digital Marketing · Social Media · Branding</p>
        <p>Initial website concept — 2026</p>
      </footer>
    </div>
  );
}
