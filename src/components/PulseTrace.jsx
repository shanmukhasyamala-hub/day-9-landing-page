import { useEffect, useRef, useState } from 'react'

// The signature element: a schematic "signal trace" that draws itself in on
// load, like an oscilloscope reading of an API that briefly flatlines and
// gets caught — the core premise of the product, rendered literally.
export default function PulseTrace() {
  const pathRef = useRef(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setDrawn(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const d =
    'M0,60 L40,60 L52,60 L60,20 L68,60 L80,60 L120,60 L132,60 L138,90 L146,30 L152,60 L160,60 L220,60 L232,60 L240,58 L248,62 L256,58 L264,60 L320,60 L332,60 L340,10 L348,60 L400,60'

  return (
    <svg className="trace-svg" viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="60" x2="400" y2="60" stroke="#D8D5CC" strokeWidth="1" />
      <text x="4" y="14" className="trace-axis-text">RESPONSE TIME</text>
      <text x="345" y="14" className="trace-axis-text">LAST 60S</text>

      <path
        ref={pathRef}
        d={d}
        className="trace-line"
        pathLength="1000"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: drawn ? 0 : 1000,
          transition: 'stroke-dashoffset 1.6s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      />

      {/* the flagged incident spike */}
      <circle cx="146" cy="30" r="4" className="trace-spike-dot">
        <animate attributeName="r" values="4;6;4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      <g style={{ opacity: drawn ? 1 : 0, transition: 'opacity 0.5s ease 1.3s' }}>
        <line x1="146" y1="30" x2="146" y2="14" stroke="#FF7A33" strokeWidth="1" />
        <rect x="96" y="0" className="trace-callout-bg" width="100" height="16" rx="2" />
        <text x="146" y="11" textAnchor="middle" className="trace-callout-text">
          FLAGGED · 340ms
        </text>
      </g>
    </svg>
  )
}
