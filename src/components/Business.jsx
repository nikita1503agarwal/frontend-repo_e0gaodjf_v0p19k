export default function Business() {
  const items = [
    'Coaching og lederutvikling',
    'Konflikthåndtering og mekling',
    'Stressmestring og forebygging',
    'Psykologtjenester for ansatte',
  ]

  return (
    <section id="business" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">For bedrifter</h2>
            <p className="mt-3 text-gray-600">Vi bistår virksomheter med målrettet psykologkompetanse – fra lederstøtte til helsefremmende arbeidsmiljø.</p>
            <ul className="mt-6 grid gap-3 text-gray-800">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-600"></span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="font-medium text-gray-900">Slik jobber vi</p>
            <p className="mt-2 text-gray-600 text-sm">Kartlegging av behov, tydelige mål, skreddersydd opplegg og kontinuerlig evaluering. Vi tilbyr fleksible løsninger for både ledere og ansatte.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
