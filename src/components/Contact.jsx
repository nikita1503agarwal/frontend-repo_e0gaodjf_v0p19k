import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sender...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const form = new FormData(e.currentTarget)
      const payload = Object.fromEntries(form.entries())

      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Nettverksfeil')
      setStatus('Takk for henvendelsen! Vi kontakter deg snart.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Noe gikk galt. Prøv igjen senere.')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Bestill time eller ta kontakt</h2>
            <p className="mt-3 text-gray-600">Ingen henvisning nødvendig. Vi tilbyr timer i Smestad Helsesenter og videokonsultasjoner.</p>
            <div className="mt-6 text-gray-700 space-y-2">
              <p><span className="font-medium">Adresse:</span> Sørkedalsveien 90A, 0377 Oslo</p>
              <p><span className="font-medium">Nettside:</span> smestadpsykologene.no</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Navn</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-post</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Telefon</label>
              <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Hva gjelder det?</label>
              <select name="topic" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600">
                <option>Behandling</option>
                <option>Parterapi</option>
                <option>Coaching</option>
                <option>Utredning/diagnostisering</option>
                <option>Bedriftspsykolog</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Melding</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">
              Send henvendelse
            </button>
            {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
