export default function Conditions() {
  const conditions = [
    'Angst',
    'Depresjon',
    'Utbrenthet',
    'Spiseforstyrrelser',
    'Sorg og kriser',
    'Personlighetsforstyrrelser',
    'Relasjonsvansker',
    'Stress og belastning',
  ]

  return (
    <section id="conditions" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Problemområder vi behandler</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {conditions.map((c) => (
            <div key={c} className="rounded-lg bg-white p-4 border border-gray-200 text-gray-800">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
