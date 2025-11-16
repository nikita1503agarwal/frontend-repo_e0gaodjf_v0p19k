export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-gray-900">
              Terapi for varig endring
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Siden 2009 har vi hjulpet mennesker og virksomheter med psykologisk ekspertise.
              Vi tilbyr individuelle samtaler, parterapi, utredning og bedriftspsykologi – fysisk i Smestad Helsesenter eller via video.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">
                Bestill time
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50">
                Se tjenester
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">Ingen henvisning nødvendig</p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-lg border border-blue-100 p-6">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Behandling</p>
                  <p>Angst, depresjon, utbrenthet, spiseforstyrrelser m.m.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Parterapi</p>
                  <p>Styrk kommunikasjon og trygghet i relasjonen</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Utredning</p>
                  <p>Diagnostisering og grundig kartlegging</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Bedriftspsykolog</p>
                  <p>Coaching, lederutvikling og stressmestring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
