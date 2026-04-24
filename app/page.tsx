
export default function Home() {
  return (
    <main style={{minHeight: '100vh', fontFamily: 'sans-serif'}}>
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #eee'}}>
        <div style={{fontSize: '20px', fontWeight: '600'}}>Deep<span style={{color: '#059669'}}>Round</span></div>
        <div style={{display: 'flex', gap: '32px', fontSize: '14px', color: '#6b7280'}}>
          <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>Cómo funciona</a>
          <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>Campañas</a>
          <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>Para startups</a>
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
          <button style={{padding: '12px 24px', background: '#059669', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', cursor: 'pointer'}}>Ver campañas activas</button>
          <button style={{padding: '12px 24px', background: 'white', color: '#6b7280', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '15px', cursor: 'pointer'}}>Soy una startup</button>
        </div>
      </section>
      <section style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '48px 40px'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', textAlign: 'center'}}>
          <div><div style={{fontSize: '36px', fontWeight: '600', color: '#111'}}>$500</div><div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Inversión mínima</div></div>
          <div><div style={{fontSize: '36px', fontWeight: '600', color: '#111'}}>3</div><div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Campañas activas</div></div>
          <div><div style={{fontSize: '36px', fontWeight: '600', color: '#111'}}>TRL 3+</div><div style={{fontSize: '14px', color: '#6b7280', marginTop: '4px'}}>Tecnología validada</div></div>
        </div>
      </section>
      <section style={{maxWidth: '800px', margin: '0 auto', padding: '80px 40px'}}>
        <h2 style={{fontSize: '28px', fontWeight: '600', color: '#111', marginBottom: '12px'}}>Sectores de inversión</h2>
        <p style={{color: '#6b7280', marginBottom: '40px'}}>Tres tecnologías que definen la próxima década en Latinoamérica.</p>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px'}}>
          <div style={{padding: '24px', border: '1px solid #eee', borderRadius: '12px'}}>
            <div style={{width: '40px', height: '40px', background: '#ecfdf5', borderRadius: '8px', marginBottom: '16px'}}></div>
            <h3 style={{fontWeight: '500', color: '#111', marginBottom: '8px'}}>Amoniaco verde</h3>
            <p style={{fontSize: '14px', color: '#6b7280'}}>Descarbonización de fertilizantes y combustible marino.</p>
          </div>
          <div style={{padding: '24px', border: '1px solid #eee', borderRadius: '12px'}}>
            <div style={{width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', marginBottom: '16px'}}></div>
            <h3 style={{fontWeight: '500', color: '#111', marginBottom: '8px'}}>Baterías ion litio</h3>
            <p style={{fontSize: '14px', color: '#6b7280'}}>Electromovilidad y almacenamiento energético.</p>
          </div>
          <div style={{padding: '24px', border: '1px solid #eee', borderRadius: '12px'}}>
            <div style={{width: '40px', height: '40px', background: '#f5f3ff', borderRadius: '8px', marginBottom: '16px'}}></div>
            <h3 style={{fontWeight: '500', color: '#111', marginBottom: '8px'}}>Inteligencia artificial</h3>
            <p style={{fontSize: '14px', color: '#6b7280'}}>Aplicaciones industriales con impacto real.</p>
          </div>
        </div>
      </section>
      <footer style={{borderTop: '1px solid #eee', padding: '32px 40px', textAlign: 'center', fontSize: '14px', color: '#9ca3af'}}>© 2025 DeepRound · Plataforma regulada · Santiago, Chile</footer>
    </main>
  )
}