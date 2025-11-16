export default function Services() {
  const services = [
    { title: 'Behandling', desc: 'Individuell terapi for angst, depresjon, utbrenthet og spiseforstyrrelser.' },
    { title: 'Coaching', desc: 'Målrettet utvikling for prestasjon og trivsel.' },
    { title: 'Parterapi', desc: 'Styrk relasjonen, kommunikasjonen og tryggheten.' },
    { title: 'Utredning/diagnostisering', desc: 'Grundig kartlegging for å avklare diagnose og behov.' },
    { title: 'Bedriftspsykolog', desc: 'Lederutvikling, konflikthåndtering, stressmestring og støtte til ansatte.' },
  ]

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Tjenester</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
