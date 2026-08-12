import useReveal from '../useReveal.js'

const icons = {
  pulse: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="1" y="1" width="38" height="38" rx="3" stroke="#1B2A4A" strokeWidth="1.2" />
      <path d="M6 22 L14 22 L17 12 L22 30 L25 22 L34 22" stroke="#FF7A33" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="1" y="1" width="38" height="38" rx="3" stroke="#1B2A4A" strokeWidth="1.2" />
      <circle cx="10" cy="12" r="3" stroke="#1B2A4A" strokeWidth="1.4" />
      <circle cx="30" cy="12" r="3" stroke="#1B2A4A" strokeWidth="1.4" />
      <circle cx="20" cy="29" r="3" stroke="#FF7A33" strokeWidth="1.4" />
      <path d="M12.5 14 L18 26.5 M27.5 14 L22 26.5" stroke="#1B2A4A" strokeWidth="1.2" />
    </svg>
  ),
  bell: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="1" y="1" width="38" height="38" rx="3" stroke="#1B2A4A" strokeWidth="1.2" />
      <path d="M20 10c-4 0-6 3-6 7v5l-2.5 4h17L26 22v-5c0-4-2-7-6-7z" stroke="#1B2A4A" strokeWidth="1.3" fill="none" />
      <path d="M17.5 28a2.5 2.5 0 0 0 5 0" stroke="#FF7A33" strokeWidth="1.3" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 40 40" fill="none">
      <rect x="1" y="1" width="38" height="38" rx="3" stroke="#1B2A4A" strokeWidth="1.2" />
      <circle cx="20" cy="20" r="10" stroke="#1B2A4A" strokeWidth="1.3" />
      <ellipse cx="20" cy="20" rx="4" ry="10" stroke="#1B2A4A" strokeWidth="1.1" />
      <line x1="10" y1="20" x2="30" y2="20" stroke="#FF7A33" strokeWidth="1.3" />
    </svg>
  ),
}

const features = [
  {
    icon: 'pulse',
    title: 'Checks every 15 seconds',
    body: 'HTTP, TCP, DNS, SSL expiry, and custom scripted checks — not just a ping to your homepage.',
  },
  {
    icon: 'globe',
    title: '6-region consensus',
    body: 'An outage only pages you once at least two regions agree — no more alerts for one flaky node.',
  },
  {
    icon: 'route',
    title: 'Routes to the right person',
    body: 'Escalation policies follow your on-call schedule, not a group chat everyone has muted.',
  },
  {
    icon: 'bell',
    title: 'Pages that respect sleep',
    body: 'Quiet hours, smart batching, and auto-resolve mean you only wake up for what matters.',
  },
]

export default function Features() {
  const [ref, inView] = useReveal()
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className={`section-head reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <span className="eyebrow">What it does</span>
          <h2>Built for the 3am page, not the demo.</h2>
          <p>Every feature exists to shorten the gap between something breaking and someone fixing it.</p>
        </div>
        <div className="feat-grid">
          {features.map((f, i) => (
            <div className="feat-card" key={f.title}>
              <span className="feat-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="feat-icon">{icons[f.icon]}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
