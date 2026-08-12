const teams = ['Northwind Cloud', 'Fernway', 'Basecamp Freight', 'Ledger&Co', 'Orbital Labs', 'Havenly']

export default function Trust() {
  return (
    <section className="trust">
      <div className="wrap">
        <div className="trust-label">Watching production for teams at</div>
        <div className="trust-row">
          {teams.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
