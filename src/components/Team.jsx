export default function Team() {
  const team = [
    {
      name: 'Psykolog Moum',
      expertise: 'Depresjon, sorg, personlighetsforstyrrelser, organisasjonspsykologi',
    },
    {
      name: 'Erfarne psykologer',
      expertise: 'Angst, utbrenthet, spiseforstyrrelser, relasjoner',
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Psykologteamet</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">Vårt team består av flere terapeuter med høy faglig kompetanse og lang erfaring fra både privat praksis og organisasjoner.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-gray-200 p-6 bg-white">
              <h3 className="font-semibold text-gray-900">{m.name}</h3>
              <p className="mt-1 text-gray-600 text-sm">{m.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
