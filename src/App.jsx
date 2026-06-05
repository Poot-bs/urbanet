import { useState, useEffect } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const FBIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const IGIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);
const LIIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Logo ───────────────────────────────────────────────────────────────────
const UrbanetLogo = ({ dark = false }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill={dark ? "#fff" : "#1a1a1a"} />
      <path d="M10 13 L16 9 L22 13 L22 20 Q16 24 10 20 Z" fill={dark ? "#1a1a1a" : "#fff"} opacity="0.9" />
      <circle cx="16" cy="14" r="2.5" fill={dark ? "#1a1a1a" : "#fff"} />
    </svg>
    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 20, color: dark ? "#fff" : "#111", letterSpacing: -0.3 }}>
      Urbanet
    </span>
  </div>
);

const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

const services = [
  {
    title: "Property Buying",
    desc: "Find your dream home from our extensive listings of verified properties.",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    title: "Property Selling",
    desc: "Sell your property quickly and efficiently with our market expertise.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    title: "Property Renting",
    desc: "Explore the best rental options that suit your lifestyle and budget.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    title: "Real Estate Consulting",
    desc: "Get professional advice to make informed property decisions.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
];
// ── Hero slides data ───────────────────────────────────────────────────────
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=80",
    title: "Modern Family Home",
    address: "1234 Maple Avenue, Greenfield, TX",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    title: "Luxury Modern Villa",
    address: "567 Pine Crest Road, Austin, TX",
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
    title: "Sleek Minimalist Estate",
    address: "890 Oak Ridge Lane, Dallas, TX",
  },
];

// ── Responsive hook ────────────────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return isMobile;
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function UrbanetHome() {
  const [emailVal, setEmailVal] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const px = isMobile ? "20px" : "48px";

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: "#111", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        a { text-decoration: none; color: inherit; }

        .nav-link {
          font-size: 15px; font-weight: 500; color: #fff;
          cursor: pointer; opacity: 0.85; transition: opacity .2s;
        }
        .nav-link:hover { opacity: 1; }
        .nav-link.active { opacity: 1; font-weight: 600; }

        .mobile-menu-link {
          display: block; font-size: 18px; font-weight: 600;
          color: #fff; padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          cursor: pointer; opacity: 0.9;
        }
        .mobile-menu-link:hover { opacity: 1; }

        .hero-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: #111;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          padding: 12px 22px; border: none; border-radius: 8px;
          cursor: pointer; transition: background .2s, transform .15s;
        }
        .hero-btn:hover { background: #f0f0f0; transform: translateY(-1px); }

        .contact-btn {
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.7); border-radius: 8px;
          padding: 9px 20px; font-size: 14px; font-weight: 600;
          font-family: 'DM Sans', sans-serif; cursor: pointer;
          transition: background .2s, border-color .2s;
        }
        .contact-btn:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

        .arrow-btn {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.5);
          background: transparent; color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: background .2s;
        }
        .arrow-btn:hover { background: rgba(255,255,255,0.15); }

        /* Service cards: horizontal scroll on mobile */
        .services-scroll-wrap {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .services-scroll-wrap::-webkit-scrollbar { display: none; }

        .services-track {
          display: flex;
          gap: 14px;
        }

        .service-card {
          border-radius: 16px; overflow: hidden; position: relative;
          cursor: pointer; transition: transform .25s; flex-shrink: 0;
        }
        .service-card:hover { transform: translateY(-4px); }
        .service-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .service-card-info {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: #fff; border-radius: 14px; margin: 10px; padding: 16px 16px 18px;
        }
        .service-card-title { font-size: 15px; font-weight: 700; color: #111; margin-bottom: 6px; }
        .service-card-desc { font-size: 13px; color: #666; line-height: 1.5; }

        .footer-link {
          font-size: 14px; color: rgba(255,255,255,0.7); cursor: pointer;
          transition: color .15s; display: block; margin-bottom: 12px;
        }
        .footer-link:hover { color: #fff; }

        .footer-heading {
          font-size: 13.5px; font-weight: 700; color: #fff;
          margin-bottom: 18px; letter-spacing: 0.3px;
        }

        .email-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: 'DM Sans', sans-serif; font-size: 14px; color: #111; padding: 0 4px;
        }
        .email-input::placeholder { color: #aaa; }

        .send-btn {
          background: #111; color: #fff; border: none; border-radius: 8px;
          padding: 10px 20px; font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: background .2s;
          white-space: nowrap;
        }
        .send-btn:hover { background: #333; }

        .social-icon-btn {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.35);
          background: transparent; color: rgba(255,255,255,0.85);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color .2s, color .2s;
        }
        .social-icon-btn:hover { border-color: #fff; color: #fff; }

        .play-btn {
          width: 60px; height: 60px; border-radius: 50%;
          background: #fff; border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #111;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
          transition: transform .2s;
        }
        .play-btn:hover { transform: scale(1.08); }

        .hamburger-btn {
          background: transparent; border: none; color: #fff;
          cursor: pointer; display: flex; align-items: center; padding: 4px;
        }
      `}</style>

      {/* ── NAVBAR ───────────────────────────────────────────────────────── */}
      <nav style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 20,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: isMobile ? "18px 20px" : "22px 48px",
      }}>
        <UrbanetLogo dark />

        {/* Desktop nav */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <span className="nav-link active">Home</span>
            <span className="nav-link">About</span>
            <span className="nav-link">Listing</span>
          </div>
        )}

        {/* Desktop CTA / Mobile hamburger */}
        {!isMobile
          ? <button className="contact-btn">Contact Agent</button>
          : (
            <button className="hamburger-btn" onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          )
        }
      </nav>

      {/* ── MOBILE MENU OVERLAY ──────────────────────────────────────────── */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 19,
          background: "rgba(26,32,44,0.97)",
          display: "flex", flexDirection: "column",
          padding: "90px 28px 40px",
        }}>
          {["Home", "About", "Listing"].map(l => (
            <span key={l} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{l}</span>
          ))}
          <button className="contact-btn" style={{ marginTop: 32, alignSelf: "flex-start", fontSize: 15, padding: "12px 28px" }}>
            Contact Agent
          </button>
        </div>
      )}

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        height: isMobile ? 520 : 640,
        background: "linear-gradient(135deg, #4a5568 0%, #2d3748 40%, #1a202c 100%)",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: isMobile ? 100 : 140,
        paddingLeft: px,
        paddingRight: px,
      }}>
        {/* Background images crossfade */}
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={slide.title}
            style={{
              position: "absolute",
              right: 0, top: 0, bottom: 0,
              width: isMobile ? "100%" : "68%",
              height: "100%", objectFit: "cover", objectPosition: "center",
              opacity: currentSlide === idx ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
            }}
          />
        ))}
        {/* Overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: isMobile
            ? "linear-gradient(180deg, rgba(26,32,44,0.85) 0%, rgba(26,32,44,0.75) 60%, rgba(26,32,44,0.55) 100%)"
            : "linear-gradient(90deg, rgba(26,32,44,0.95) 0%, rgba(26,32,44,0.7) 45%, rgba(26,32,44,0.1) 75%, transparent 100%)",
        }} />

        {/* Hero text */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: isMobile ? "100%" : 580 }}>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "clamp(28px, 7vw, 38px)" : "clamp(38px, 4.5vw, 58px)",
            fontWeight: 700, color: "#fff",
            lineHeight: 1.12, marginBottom: 16, letterSpacing: -1,
          }}>
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>Simplifying</em>{" "}Property
            <br />Buying, Selling, And Renting
          </h1>
          <p style={{
            fontSize: isMobile ? 13.5 : 15,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.65,
            marginBottom: isMobile ? 24 : 32,
            maxWidth: isMobile ? "100%" : 480,
          }}>
            Your life evolves, and your home should too. We design flexible living spaces that adapt to your current needs, ensuring comfort, functionality, and style at every stage of life.
          </p>
          <button className="hero-btn">Explore Listings</button>
        </div>

        {/* Property card — desktop only */}
        {!isMobile && (
          <div style={{
            position: "absolute", right: 48, bottom: 80,
            background: "#fff", borderRadius: 14,
            padding: "18px 20px 16px", width: 270,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)", zIndex: 3,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <HomeIcon />
              <span style={{ fontWeight: 700, fontSize: 15 }}>{heroSlides[currentSlide].title}</span>
            </div>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 14, paddingLeft: 28 }}>
              {heroSlides[currentSlide].address}
            </p>
            <button style={{
              width: "100%", background: "#111", color: "#fff", border: "none",
              borderRadius: 8, padding: "10px 0", fontSize: 14, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
            }}>View Detail</button>
          </div>
        )}

        {/* Navigation arrows */}
        <div style={{
          position: "absolute",
          right: isMobile ? px : 48,
          bottom: isMobile ? 24 : 28,
          display: "flex",
          gap: 10,
          zIndex: 3
        }}>
          <button className="arrow-btn" onClick={prevSlide}><ArrowLeft /></button>
          <button className="arrow-btn" onClick={nextSlide}><ArrowRight /></button>
        </div>

        {/* Happy clients — always visible, repositioned on mobile */}
        <div style={{
          position: "absolute",
          left: px,
          bottom: isMobile ? 24 : 32,
          zIndex: 3,
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <div style={{ display: "flex" }}>
            {avatars.map((src, i) => (
              <img key={i} src={src} alt=""
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: "2.5px solid rgba(255,255,255,0.8)",
                  marginLeft: i === 0 ? 0 : -10, objectFit: "cover",
                }}
              />
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>50K+</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)" }}>Happy Clients</div>
          </div>
        </div>
      </section>

      {/* ── CONNECTING SECTION ───────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "48px 20px 0" : "72px 48px 0" }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: isMobile ? 16 : 0,
          marginBottom: isMobile ? 32 : 52,
          maxWidth: 1200,
        }}>
          <h2 style={{
            fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(28px, 3.5vw, 42px)",
            fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.8,
            maxWidth: isMobile ? "100%" : 380,
          }}>
            Connecting People With{isMobile ? " " : <br />}Perfect Properties
          </h2>
          <p style={{
            fontSize: isMobile ? 13.5 : 15,
            color: "#666", lineHeight: 1.65,
            maxWidth: isMobile ? "100%" : 360,
            paddingTop: isMobile ? 0 : 6,
          }}>
            Urbanet is a leading real estate platform dedicated to connecting buyers, sellers, and renters with their perfect property.
          </p>
        </div>

        {/* Video banner */}
        <div style={{
          position: "relative", borderRadius: isMobile ? 14 : 20,
          overflow: "hidden", height: isMobile ? 220 : 420, maxWidth: 1200,
        }}>
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1400&q=80"
            alt="property"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <button className="play-btn"><PlayIcon /></button>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ────────────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "48px 0 48px" : "80px 48px 80px" }}>
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: isMobile ? 10 : 0,
          marginBottom: isMobile ? 28 : 48,
          maxWidth: 1200,
          paddingLeft: isMobile ? "20px" : 0,
          paddingRight: isMobile ? "20px" : 0,
        }}>
          <h2 style={{
            fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(32px, 4vw, 52px)",
            fontWeight: 700, letterSpacing: -1, lineHeight: 1.1,
          }}>
            What We Offer
          </h2>
          <p style={{
            fontSize: isMobile ? 13.5 : 15,
            color: "#888", lineHeight: 1.6,
            maxWidth: isMobile ? "100%" : 320,
            paddingTop: isMobile ? 0 : 10,
          }}>
            We are redefining real estate with innovation and excellence.
          </p>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        {isMobile ? (
          <div className="services-scroll-wrap" style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 8 }}>
            <div className="services-track">
              {services.map((s, i) => (
                <div key={i} className="service-card" style={{ width: 220, height: 300 }}>
                  <img src={s.img} alt={s.title} />
                  <div className="service-card-info">
                    <div className="service-card-title">{s.title}</div>
                    <div className="service-card-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", gap: 18, maxWidth: 1200 }}>
            {services.map((s, i) => (
              <div key={i} className="service-card" style={{ flex: 1, aspectRatio: "3/4" }}>
                <img src={s.img} alt={s.title} />
                <div className="service-card-info">
                  <div className="service-card-title">{s.title}</div>
                  <div className="service-card-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: "#1a1a1a", padding: isMobile ? "40px 20px 0" : "60px 48px 0" }}>
        {isMobile ? (
          /* ── Mobile footer layout ── */
          <div style={{ maxWidth: 1200 }}>
            {/* Logo + tagline */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ marginBottom: 14 }}><UrbanetLogo dark /></div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                Helping You Find the Perfect Home, Every Step of the Way.
              </p>
            </div>

            {/* Two-column link grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px", marginBottom: 32 }}>
              <div>
                <div className="footer-heading">Listing Properties</div>
                {["Apartment", "Houses", "Villa", "Penthouse"].map(l => (
                  <span key={l} className="footer-link">{l}</span>
                ))}
              </div>
              <div>
                <div className="footer-heading">Support</div>
                {["Help Center", "FAQs", "Contact Support"].map(l => (
                  <span key={l} className="footer-link">{l}</span>
                ))}
              </div>
            </div>

            {/* Legal — full width */}
            <div style={{ marginBottom: 32 }}>
              <div className="footer-heading">Legal</div>
              {["Privacy Policy", "Terms of Service"].map(l => (
                <span key={l} className="footer-link">{l}</span>
              ))}
            </div>

            {/* Subscribe */}
            <div style={{ marginBottom: 32 }}>
              <div className="footer-heading">Subscribe for Updates</div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: 16 }}>
                Get the latest news and updates directly in your inbox.
              </p>
              <div style={{
                display: "flex", alignItems: "center",
                background: "#fff", borderRadius: 10,
                padding: "6px 6px 6px 14px", gap: 8,
              }}>
                <input
                  className="email-input"
                  placeholder="Enter your email"
                  value={emailVal}
                  onChange={e => setEmailVal(e.target.value)}
                />
                <button className="send-btn">Send</button>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.12)", marginBottom: 20 }} />

            {/* Bottom bar — stacked on mobile */}
            <div style={{ paddingBottom: 24 }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 0 }}>
                2025 Urbanet. All rights reserved.
              </p>
            </div>
          </div>
        ) : (
          /* ── Desktop footer layout ── */
          <div style={{ maxWidth: 1200 }}>
            <div style={{
              display: "flex", gap: 48, flexWrap: "wrap",
              justifyContent: "space-between", marginBottom: 48,
            }}>
              <div style={{ maxWidth: 240 }}>
                <div style={{ marginBottom: 20 }}><UrbanetLogo dark /></div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  Helping You Find the Perfect Home, Every Step of the Way.
                </p>
              </div>
              <div>
                <div className="footer-heading">Listing Properties</div>
                {["Apartment", "Houses", "Villa", "Penthouse"].map(l => (
                  <span key={l} className="footer-link">{l}</span>
                ))}
              </div>
              <div>
                <div className="footer-heading">Support</div>
                {["Help Center", "FAQs", "Contact Support"].map(l => (
                  <span key={l} className="footer-link">{l}</span>
                ))}
              </div>
              <div>
                <div className="footer-heading">Legal</div>
                {["Privacy Policy", "Terms of Service"].map(l => (
                  <span key={l} className="footer-link">{l}</span>
                ))}
              </div>
              <div style={{ maxWidth: 300 }}>
                <div className="footer-heading">Subscribe for Updates</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginBottom: 20 }}>
                  Get the latest news and updates directly in your inbox.
                </p>
                <div style={{
                  display: "flex", alignItems: "center",
                  background: "#fff", borderRadius: 10,
                  padding: "6px 6px 6px 14px", gap: 8,
                }}>
                  <input
                    className="email-input"
                    placeholder="Enter your email"
                    value={emailVal}
                    onChange={e => setEmailVal(e.target.value)}
                  />
                  <button className="send-btn">Send</button>
                </div>
              </div>
            </div>
            <div style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "22px 0 28px", flexWrap: "wrap", gap: 16,
            }}>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)" }}>
                2025 Urbanet. All rights reserved.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[<XIcon />, <FBIcon />, <IGIcon />, <LIIcon />].map((Icon, i) => (
                  <button key={i} className="social-icon-btn">{Icon}</button>
                ))}
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
