export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <a className="nav-logo" href="#top" style={{ fontSize: 16 }}>
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none">
              <rect width="26" height="26" rx="5" fill="#14181F" />
              <path d="M4 15 L9 15 L11.5 8 L14.5 19 L17 15 L22 15" stroke="#FF7A33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Pulsegrid
          </a>
          <nav className="footer-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#top">Status</a>
            <a href="#top">Docs</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {year} Pulsegrid, Inc.</span>
          <span>Built for Day 9 — React landing page conversion.</span>
        </div>
      </div>
    </footer>
  )
}
