import useReveal from '../useReveal.js'

const rows = [
  { t: '02:41', label: 'checkout-api — recovered', badge: 'ok' },
  { t: '02:38', label: 'checkout-api — latency above 500ms, us-east', badge: 'warn' },
  { t: 'Yesterday', label: 'webhook-relay — recovered in 52s', badge: 'ok' },
  { t: '2 days ago', label: 'auth-service — SSL cert renewed automatically', badge: 'ok' },
]

export default function DashboardPreview() {
  const [ref, inView] = useReveal()
  return (
    <section className="section">
      <div className="wrap">
        <div className={`section-head reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <span className="eyebrow">What you'll see</span>
          <h2>One screen, the whole picture.</h2>
          <p>Every monitor, every incident, every ack — laid out like the systems it's watching.</p>
        </div>

        <div className="dash">
          <div className="dash-head">
            <span>Overview — production</span>
            <span>Updated 4s ago</span>
          </div>
          <div className="dash-body">
            <div className="dash-metric">
              <div className="dash-metric-label">Uptime, 30 days</div>
              <div className="dash-metric-value teal">99.982%</div>
            </div>
            <div className="dash-metric">
              <div className="dash-metric-label">Median detection time</div>
              <div className="dash-metric-value">18s</div>
            </div>
            <div className="dash-metric">
              <div className="dash-metric-label">Open incidents</div>
              <div className="dash-metric-value amber">1</div>
            </div>
          </div>
          <div className="dash-timeline">
            {rows.map((r) => (
              <div className="dash-row" key={r.t + r.label}>
                <span className={`badge ${r.badge}`} />
                <span className="t">{r.t}</span>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
