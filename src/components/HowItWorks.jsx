import useReveal from '../useReveal.js'

const steps = [
  {
    title: 'Point it at an endpoint',
    body: 'Paste a URL, or drop a few lines of YAML for a multi-step check. Pulsegrid starts watching immediately.',
  },
  {
    title: 'Set who gets paged, and when',
    body: 'Build an escalation policy in minutes: primary on-call, backup, then the whole channel if nobody acks.',
  },
  {
    title: 'Get the page, not the noise',
    body: 'One SMS or call with exactly what broke, since when, and a link to the trace — no dashboard hunting.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useReveal()
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className={`section-head reveal ${inView ? 'in-view' : ''}`} ref={ref}>
          <span className="eyebrow">How it works</span>
          <h2>Live in five minutes, on-call ready by lunch.</h2>
        </div>
        <div className="how-list">
          {steps.map((s, i) => (
            <div className="how-step" key={s.title}>
              <span className="how-step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
