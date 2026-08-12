import useReveal from '../useReveal.js'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    desc: 'For side projects that just need a heartbeat.',
    feats: ['5 monitors', '5-minute checks', 'Email alerts', '7-day history'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Team',
    price: '$29',
    period: '/mo',
    desc: 'For the team that owns production and its pager.',
    feats: ['50 monitors', '15-second checks', 'SMS + call escalation', 'On-call schedules', '90-day history'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    desc: 'For multi-region infrastructure with SLAs to hit.',
    feats: ['Unlimited monitors', '6-region consensus', 'Status pages', 'SSO + audit log', '1-year history'],
    cta: 'Talk to sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [ref, inView] = useReveal()
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className={`section-head reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <span className="eyebrow">Pricing</span>
          <h2>Priced for a team, not per seat.</h2>
          <p>No per-user tax for adding your whole on-call rotation. Every plan includes unlimited team members.</p>
        </div>
        <div className="price-grid">
          {tiers.map((t) => (
            <div className={`price-card ${t.highlight ? 'highlight' : ''}`} key={t.name}>
              <span className="price-tier">{t.name}</span>
              <div className="price-amount">
                {t.price}
                <span>{t.period}</span>
              </div>
              <p className="price-desc">{t.desc}</p>
              <ul className="price-feats">
                {t.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#top" className={`btn ${t.highlight ? 'btn-primary' : 'btn-ghost'}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
