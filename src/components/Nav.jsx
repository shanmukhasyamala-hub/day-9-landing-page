export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="nav-logo" href="#top">
          <svg className="nav-mark" viewBox="0 0 26 26" fill="none">
            <rect width="26" height="26" rx="5" fill="#14181F" />
            <path
              d="M4 15 L9 15 L11.5 8 L14.5 19 L17 15 L22 15"
              stroke="#FF7A33"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Pulsegrid
        </a>
        <nav className="nav-links nav-links-mobile-hide">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="nav-cta">
          <a href="#pricing" className="nav-links" style={{ display: 'inline' }}>
            Sign in
          </a>
          <a href="#pricing" className="btn btn-primary">
            Start free
          </a>
        </div>
      </div>
    </header>
  )
}
