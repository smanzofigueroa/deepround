'use client'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', startup: '', monto: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setEnviando(true)
    try {
      await fetch('/api/contacto', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setEnviado(true)
    } catch (err) {
      alert('Error al enviar. Intenta de nuevo.')
    }
    setEnviando(false)
  }

  return (
    <main style={{minHeight: '100vh', fontFamily: 'sans-serif'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eee'}}>
        <div style={{fontSize: '20px', fontWeight: '600'}}>Deep<span style={{color: '#059669'}}>Round</span></div>
        <div style={{display: 'flex', gap: '32px', fontSize: '14px', color: '#6b7280'}}>
          <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>Cómo funciona</a>
          <a href="#campanas" style={{textDecoration: 'none', color: 'inherit'}}>Campañas</a>
          <a href="#invertir" style={{textDecoration: 'none', color: 'inherit'}}>Invertir</a>
        </div>
        <div style={{display: 'flex', gap: '12px'}}>
          <button style={{padding: '8px 16px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#6b7280'}}>Ingresar</button>
          <button style={{padding: '8px 16px', background: '#059669', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Registrarse</button>
        </div>
      </nav>

      <section style={{maxWidth: '800px', margin: '0 auto', padding: '80px 40px', textAlign: 'center'}}>
        <div style={{display: 'inline-block', fontSize: '12px', padding: '4px 12px', background: '#ecfdf5', color: '#059669', borderRadius: '20px', marginBottom: '24px'}}>Primera plataforma deeptech de inversión en Chile</div>
        <h1 style={{fontSize: '48px', fontWeight: '600', color: '#111', lineHeight: '1.2', marginBottom: '24px'}}>Invierte en el futuro de <span style={{color: '#059669'}}>energía y tecnología</span></h1>
        <p style={{fontSize: '18px', color: '#6b7280', marginBottom: '40px'}}>Conectamos inversores con startups deeptech en amoniaco verde, baterías e inteligencia artificial. Desde $500 USD.</p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
          <a href="#invertir" style={{padding: '12px 24px', background: '#059669', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', cursor: 'pointer', textDecoration: 'none'}}>Me interesa invertir</a>
          <a href="#campanas" style={{padding: '12px 24px', background: 'white', color: '#6b7280', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '15px', cursor: 'pointer', textDecoration: 'none'}}>Ver campañas</a>
        </div>
      </section>

      <section style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '48px 40px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', textAlign: 'center'}}>
          <div><div style={{fontSize: '36px', fontWeight: '600', color: '#111'}}>$500</div><div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Inversión mínima</div></div>
          <div><div style={{fontSize: '36px', fontWeight: '600', color: '#111'}}>3</div><div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Campañas activas</div></div>
          <div><div style={{fontSize: '36px', fontWeight: '600', color: '#111'}}>TRL 3+</div><div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Tecnología validada</div></div>
        </div>
      </section>

      <section id="campanas" style={{maxWidth: '900px', margin: '0 auto', padding: '80px 40px'}}>
        <h2 style={{fontSize: '28px', fontWeight: '600', color: '#111', marginBottom: '12px'}}>Campañas activas</h2>
        <p style={{color: '#6b7280', marginBottom: '40px'}}>Startups deeptech chilenas buscando inversión privada. TRL 3 validado.</p>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px'}}>
          {[
            { nombre: 'AmonioVerde SpA', sector: 'Amoniaco Verde', meta: '$800,000', recaudado: '42%', color: '#ecfdf5', tag: 'Energía' },
            { nombre: 'LiCell Batteries SpA', sector: 'Baterías Ion Litio', meta: '$600,000', recaudado: '28%', color: '#eff6ff', tag: 'Almacenamiento' },
            { nombre: 'NeuralOps IA SpA', sector: 'Inteligencia Artificial', meta: '$400,000', recaudado: '65%', color: '#f5f3ff', tag: 'IA Industrial' },
          ].map((s) => (
            <div key={s.nombre} style={{border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden'}}>
              <div style={{background: s.color, padding: '20px'}}>
                <span style={{fontSize: '11px', fontWeight: '500', color: '#059669', background: 'white', padding: '2px 10px', borderRadius: '20px'}}>{s.tag}</span>
                <div style={{fontSize: '15px', fontWeight: '500', color: '#111', marginTop: '12px'}}>{s.nombre}</div>
                <div style={{fontSize: '13px', color: '#6b7280', marginTop: '4px'}}>{s.sector}</div>
              </div>
              <div style={{padding: '16px'}}>
                <div style={{height: '4px', background: '#f3f4f6', borderRadius: '2px', marginBottom: '8px'}}>
                  <div style={{height: '4px', background: '#059669', borderRadius: '2px', width: s.recaudado}}></div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6b7280'}}>
                  <span>Meta: <strong style={{color: '#111'}}>{s.meta}</strong></span>
                  <span style={{color: '#059669', fontWeight: '500'}}>{s.recaudado}</span>
                </div>
                <div style={{fontSize: '12px', color: '#9ca3af', marginTop: '4px'}}>TRL 3 · Inversión mínima $500 USD</div>
                <a href="#invertir" style={{display: 'block', marginTop: '12px', padding: '8px', background: '#059669', color: 'white', borderRadius: '8px', textAlign: 'center', fontSize: '13px', textDecoration: 'none'}}>Me interesa invertir</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="invertir" style={{background: '#f9fafb', padding: '80px 40px'}}>
        <div style={{maxWidth: '560px', margin: '0 auto'}}>
          <h2 style={{fontSize: '28px', fontWeight: '600', color: '#111', marginBottom: '8px', textAlign: 'center'}}>Me interesa invertir</h2>
          <p style={{color: '#6b7280', marginBottom: '32px', textAlign: 'center'}}>Déjanos tus datos y te contactamos en menos de 24 horas para explicarte el proceso completo.</p>

          {enviado ? (
            <div style={{background: '#ecfdf5', border: '1px solid #6ee7b7', borderRadius: '12px', padding: '32px', textAlign: 'center'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>✅</div>
              <div style={{fontSize: '18px', fontWeight: '500', color: '#059669', marginBottom: '8px'}}>¡Recibido!</div>
              <div style={{color: '#6b7280'}}>Te contactaremos en menos de 24 horas. Revisa tu email.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{background: 'white', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb'}}>
              {[
                { label: 'Nombre completo *', key: 'nombre', type: 'text', placeholder: 'Tu nombre' },
                { label: 'Email *', key: 'email', type: 'email', placeholder: 'tu@email.com' },
                { label: 'Teléfono', key: 'telefono', type: 'tel', placeholder: '+56 9 XXXX XXXX' },
              ].map(f => (
                <div key={f.key} style={{marginBottom: '16px'}}>
                  <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} required={f.label.includes('*')}
                    value={(form as any)[f.key]}
                    onChange={e => setForm({...form, [f.key]: e.target.value})}
                    style={{width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box'}} />
                </div>
              ))}

              <div style={{marginBottom: '16px'}}>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>Startup de interés</label>
                <select value={form.startup} onChange={e => setForm({...form, startup: e.target.value})}
                  style={{width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none'}}>
                  <option value="">Selecciona una startup</option>
                  <option value="AmonioVerde SpA">AmonioVerde SpA — Amoniaco Verde</option>
                  <option value="LiCell Batteries SpA">LiCell Batteries SpA — Baterías Ion Litio</option>
                  <option value="NeuralOps IA SpA">NeuralOps IA SpA — Inteligencia Artificial</option>
                  <option value="Todas">Me interesan todas</option>
                </select>
              </div>

              <div style={{marginBottom: '16px'}}>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>Monto aproximado a invertir (USD)</label>
                <select value={form.monto} onChange={e => setForm({...form, monto: e.target.value})}
                  style={{width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none'}}>
                  <option value="">Selecciona un rango</option>
                  <option value="$500 - $1,000">$500 — $1,000 USD</option>
                  <option value="$1,000 - $5,000">$1,000 — $5,000 USD</option>
                  <option value="$5,000 - $25,000">$5,000 — $25,000 USD</option>
                  <option value="Más de $25,000">Más de $25,000 USD</option>
                </select>
              </div>

              <div style={{marginBottom: '24px'}}>
                <label style={{display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px'}}>Mensaje (opcional)</label>
                <textarea placeholder="Cuéntanos sobre tu perfil o preguntas que tengas..." value={form.mensaje}
                  onChange={e => setForm({...form, mensaje: e.target.value})}
                  style={{width: '100%', padding: '10px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '14px', outline: 'none', minHeight: '80px', resize: 'vertical', boxSizing: 'border-box'}} />
              </div>

              <button type="submit" disabled={enviando}
                style={{width: '100%', padding: '12px', background: enviando ? '#9ca3af' : '#059669', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '500', cursor: enviando ? 'not-allowed' : 'pointer'}}>
                {enviando ? 'Enviando...' : 'Quiero invertir en DeepRound →'}
              </button>

              <p style={{fontSize: '12px', color: '#9ca3af', textAlign: 'center', marginTop: '12px'}}>
                Sin compromiso. Te contactamos para explicarte el proceso completo.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer style={{borderTop: '1px solid #eee', padding: '32px 40px', textAlign: 'center', fontSize: '14px', color: '#9ca3af'}}>
        © 2025 DeepRound · Santiago, Chile · <a href="mailto:contacto@deepround.cl" style={{color: '#6b7280'}}>contacto@deepround.cl</a>
      </footer>
    </main>
  )
}