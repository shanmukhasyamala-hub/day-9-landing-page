import PulseTrace from './PulseTrace.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">Uptime monitoring for engineering teams</span>
          <h1>
            Know about the outage
            <br />
            before <em>your customers</em> do.
          </h1>
          <p className="hero-sub">
            Pulsegrid checks your endpoints every 15 seconds, correlates failures across
            regions, and pages the right person in under 30 seconds — not the whole team.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">Start free 14-day trial</a>
            <a href="#how" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero-meta">
            NO CREDIT CARD · 5-MINUTE SETUP · CANCEL ANYTIME
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-head">
            <span><span className="status-dot" />api.yourapp.com</span>
            <span>99.982% · 30D</span>
          </div>
          <div style={{ padding: '18px 18px 6px' }}>
            <PulseTrace />
          </div>
          <div className="hero-terminal">
            <div><span className="dim">$</span> pulsegrid watch api.yourapp.com --interval 15s</div>
            <div><span className="prompt">✓</span> monitor created <span className="dim">// checking every 15s from 6 regions</span></div>
            <div><span className="prompt">⚠</span> 03:14:02 latency spike detected (340ms, us-east)</div>
            <div><span className="ok">✓</span> 03:14:19 paged @dana via SMS — ack&apos;d in 41s</div>
          </div>
        </div>
      </div>
    </section>
  )
}
