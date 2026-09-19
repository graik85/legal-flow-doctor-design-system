// Legal Flow Doctor — Buscador de Jurisprudencia con IA
// Exports: Jurisprudencia

const SAMPLE_RESULTS = [
  {
    id: 'j1',
    title: 'García c/ Municipalidad de Buenos Aires s/ Daños y Perjuicios',
    court: 'Cámara Nacional de Apelaciones en lo Civil, Sala B',
    date: '2024-09-12',
    excerpt: 'La responsabilidad del Estado por los daños causados por el deficiente estado de la vía pública debe ser analizada conforme los arts. 1757 y 1758 del Código Civil y Comercial. La falta de señalización adecuada constituye factor de atribución objetivo.',
    relevance: 97,
    source: 'PJN',
    cites: 12,
    topics: ['Daños y perjuicios', 'Responsabilidad del Estado', 'Vía pública'],
  },
  {
    id: 'j2',
    title: 'Municipalidad de CABA c/ Empresa Constructora s/ Ejecución',
    court: 'Juzgado Contencioso Administrativo Federal N° 3',
    date: '2024-07-03',
    excerpt: 'En materia de contratos administrativos, la Municipalidad goza de prerrogativas exorbitantes que le permiten modificar unilateralmente el contrato ante razones de interés público debidamente fundadas, conforme doctrina de la CSJN.',
    relevance: 84,
    source: 'CSJN',
    cites: 8,
    topics: ['Contratos administrativos', 'Prerrogativas', 'CABA'],
  },
  {
    id: 'j3',
    title: 'López y otros c/ Municipalidad s/ Amparo colectivo',
    court: 'Cámara Federal de Apelaciones de La Plata',
    date: '2023-11-28',
    excerpt: 'El amparo colectivo resulta procedente cuando la afectación incide sobre una pluralidad de personas determinables, aunque no sean parte del proceso. El acceso a la información pública municipal no puede ser restringido sin causa fundada.',
    relevance: 79,
    source: 'PJN',
    cites: 21,
    topics: ['Amparo', 'Acción colectiva', 'Información pública'],
  },
  {
    id: 'j4',
    title: 'Rodríguez c/ Municipalidad de Lanús s/ Responsabilidad extracontractual',
    court: 'Suprema Corte de Justicia de Buenos Aires',
    date: '2023-08-15',
    excerpt: 'La omisión de mantenimiento de instalaciones públicas configura falta de servicio en los términos del art. 1112 del Código Civil (actual art. 1764 CCyCN), generando responsabilidad directa del Estado municipal.',
    relevance: 76,
    source: 'SCBA',
    cites: 5,
    topics: ['Falta de servicio', 'Estado municipal', 'Responsabilidad extracontractual'],
  },
];

function Jurisprudencia() {
  const [query, setQuery]       = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading]   = React.useState(false);
  const [results, setResults]   = React.useState([]);
  const [activeResult, setActiveResult] = React.useState(null);

  const SUGGESTIONS = [
    'Responsabilidad del Estado por vía pública deficiente',
    'Despido sin causa — cálculo de indemnización',
    'Nulidad de acto administrativo por vicios de forma',
    'Prescripción en contratos comerciales — plazo',
  ];

  const handleSearch = (q) => {
    const text = q || query;
    if (!text.trim()) return;
    setQuery(text);
    setLoading(true);
    setSubmitted(true);
    setResults([]);
    setTimeout(() => {
      setLoading(false);
      setResults(SAMPLE_RESULTS);
    }, 1400);
  };

  const sourceColors = { PJN:'#244876', CSJN:'#8b5e18', SCBA:'#106b61' };
  const sourceBg     = { PJN:'#dfe8f2', CSJN:'#faf0d8', SCBA:'#d0f4f0' };

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', background:'var(--bg-subtle)' }}>
      {/* Header */}
      <div style={{ background:'white', borderBottom:'1px solid var(--border-muted)', padding:'14px 28px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <h1 style={{ margin:0, fontSize:'18px', fontFamily:'var(--font-serif)', fontWeight:600, color:'var(--fg-default)' }}>Buscador de Jurisprudencia</h1>
            <p style={{ margin:0, fontSize:'13px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)' }}>+500.000 fuentes judiciales argentinas indexadas con IA · PJN · CSJN · SCBA · Cámaras provinciales</p>
          </div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'6px', padding:'4px 10px', borderRadius:'999px', background:'var(--color-teal-50)', border:'1px solid var(--color-teal-200)' }}>
            <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'var(--color-teal-500)' }} />
            <span style={{ fontSize:'12px', fontWeight:600, color:'var(--color-teal-700)', fontFamily:'var(--font-sans)' }}>IA activa</span>
          </div>
        </div>
      </div>

      <div style={{ flex:1, overflowY:'auto' }}>
        {/* Search bar */}
        <div style={{ background: submitted?'var(--bg-subtle)':'var(--color-navy-900)', padding: submitted?'16px 28px':'48px 28px', transition:'all 400ms' }}>
          {!submitted && (
            <div style={{ textAlign:'center', marginBottom:'24px' }}>
              <p style={{ margin:0, fontSize:'14px', color:'rgba(255,255,255,0.5)', fontFamily:'var(--font-sans)' }}>Describí tu caso en lenguaje natural — la IA encuentra los precedentes más relevantes</p>
            </div>
          )}
          <div style={{ maxWidth:'720px', margin:'0 auto' }}>
            <div style={{ display:'flex', gap:'8px' }}>
              <div style={{ flex:1, display:'flex', alignItems:'center', gap:'10px', background: submitted?'white':'rgba(255,255,255,0.10)', border:'1.5px solid '+(submitted?'var(--border-strong)':'rgba(255,255,255,0.2)'), borderRadius:'8px', padding:'10px 16px', transition:'all 300ms' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={submitted?'var(--fg-muted)':'rgba(255,255,255,0.5)'} strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input
                  value={query}
                  onChange={e=>setQuery(e.target.value)}
                  onKeyDown={e=>e.key==='Enter'&&handleSearch()}
                  placeholder="Ej: responsabilidad del Estado por daño en vía pública CABA"
                  style={{ flex:1, border:'none', background:'transparent', outline:'none', fontSize:'14px', fontFamily:'var(--font-sans)', color: submitted?'var(--fg-default)':'white' }}
                />
                {query && <button onClick={()=>{setQuery('');setSubmitted(false);setResults([]);}} style={{ background:'none', border:'none', cursor:'pointer', color: submitted?'var(--fg-subtle)':'rgba(255,255,255,0.4)', fontSize:'16px', lineHeight:1 }}>×</button>}
              </div>
              <button onClick={()=>handleSearch()} style={{ padding:'10px 20px', borderRadius:'8px', border:'none', background:'var(--color-teal-600)', color:'white', fontSize:'14px', fontWeight:600, fontFamily:'var(--font-sans)', cursor:'pointer', whiteSpace:'nowrap' }}>
                Buscar con IA
              </button>
            </div>
            {!submitted && (
              <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginTop:'16px', justifyContent:'center' }}>
                {SUGGESTIONS.map((s,i) => (
                  <button key={i} onClick={()=>handleSearch(s)} style={{ padding:'5px 13px', borderRadius:'999px', border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.07)', color:'rgba(255,255,255,0.65)', fontSize:'13px', fontFamily:'var(--font-sans)', cursor:'pointer' }}>{s}</button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ padding:'20px 28px', display:'flex', gap:'16px' }}>
          {/* Loading */}
          {loading && (
            <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'16px', padding:'60px 0' }}>
              <div style={{ width:'40px', height:'40px', borderRadius:'50%', border:'3px solid var(--color-teal-100)', borderTopColor:'var(--color-teal-500)', animation:'lfd-spin 0.8s linear infinite' }} />
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:'14px', fontWeight:600, color:'var(--fg-default)', fontFamily:'var(--font-sans)', marginBottom:'6px' }}>Analizando jurisprudencia…</div>
                <div style={{ fontSize:'13px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)' }}>Consultando +500.000 fuentes · PJN · CSJN · Cámaras</div>
              </div>
            </div>
          )}

          {/* Results */}
          {!loading && results.length > 0 && (
            <>
              <div style={{ flex:1, display:'flex', flexDirection:'column', gap:'10px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'4px' }}>
                  <span style={{ fontSize:'13px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)' }}>{results.length} resultados más relevantes para: <strong style={{ color:'var(--fg-default)' }}>"{query}"</strong></span>
                  <span style={{ fontSize:'12px', color:'var(--color-teal-700)', fontFamily:'var(--font-sans)', fontWeight:600 }}>Ordenar por: Relevancia ↓</span>
                </div>
                {results.map(r => (
                  <div key={r.id} onClick={()=>setActiveResult(activeResult?.id===r.id?null:r)} onKeyDown={e=>{ if (e.key==='Enter'||e.key===' ') { e.preventDefault(); setActiveResult(activeResult?.id===r.id?null:r); } }} tabIndex={0} role="button" aria-expanded={activeResult?.id===r.id}
                    style={{ background:'white', border:'1px solid '+(activeResult?.id===r.id?'var(--color-teal-400)':'var(--border-default)'), borderRadius:'8px', padding:'16px 18px', cursor:'pointer', boxShadow: activeResult?.id===r.id?'var(--shadow-md)':'var(--shadow-sm)', transition:'all 200ms' }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'12px', marginBottom:'8px' }}>
                      <h3 style={{ margin:0, fontSize:'14px', fontFamily:'var(--font-serif)', fontWeight:600, color:'var(--fg-default)', lineHeight:1.4, flex:1 }}>{r.title}</h3>
                      <div style={{ display:'flex', alignItems:'center', gap:'6px', flexShrink:0 }}>
                        <span style={{ fontSize:'12px', fontWeight:700, color: r.relevance>=90?'var(--color-teal-700)':r.relevance>=75?'var(--color-navy-700)':'var(--fg-muted)', fontFamily:'var(--font-sans)', background: r.relevance>=90?'var(--color-teal-50)':r.relevance>=75?'var(--color-navy-50)':'var(--bg-subtle)', padding:'2px 8px', borderRadius:'999px', border:'1px solid '+(r.relevance>=90?'var(--color-teal-200)':r.relevance>=75?'var(--color-navy-100)':'var(--border-muted)') }}>{r.relevance}% relevante</span>
                      </div>
                    </div>
                    <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'8px' }}>
                      <span style={{ fontSize:'12px', padding:'2px 8px', borderRadius:'4px', background:sourceBg[r.source]||'var(--bg-subtle)', color:sourceColors[r.source]||'var(--fg-muted)', fontFamily:'var(--font-mono)', fontWeight:600 }}>{r.source}</span>
                      <span style={{ fontSize:'12px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)' }}>{r.court}</span>
                      <span style={{ fontSize:'12px', color:'var(--fg-subtle)', fontFamily:'var(--font-sans)' }}>· {r.date}</span>
                      <span style={{ fontSize:'12px', color:'var(--fg-subtle)', fontFamily:'var(--font-sans)' }}>· {r.cites} citas</span>
                    </div>
                    <p style={{ margin:0, fontSize:'14px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)', lineHeight:1.6 }}>{r.excerpt}</p>
                    <div style={{ display:'flex', gap:'6px', flexWrap:'wrap', marginTop:'10px' }}>
                      {r.topics.map(t => (
                        <span key={t} style={{ fontSize:'12px', padding:'2px 8px', borderRadius:'4px', background:'var(--color-navy-50)', color:'var(--color-navy-700)', fontFamily:'var(--font-sans)', border:'1px solid var(--color-navy-100)' }}>{t}</span>
                      ))}
                    </div>
                    {activeResult?.id===r.id && (
                      <div style={{ marginTop:'14px', paddingTop:'14px', borderTop:'1px solid var(--border-muted)', display:'flex', gap:'8px' }}>
                        <button style={{ padding:'6px 14px', borderRadius:'5px', border:'none', background:'var(--color-teal-600)', color:'white', fontSize:'13px', fontFamily:'var(--font-sans)', fontWeight:600, cursor:'pointer' }}>Ver fallo completo</button>
                        <button style={{ padding:'6px 14px', borderRadius:'5px', border:'1px solid var(--border-strong)', background:'white', color:'var(--fg-default)', fontSize:'13px', fontFamily:'var(--font-sans)', fontWeight:600, cursor:'pointer' }}>Citar en escrito</button>
                        <button style={{ padding:'6px 14px', borderRadius:'5px', border:'1px solid var(--border-strong)', background:'white', color:'var(--fg-default)', fontSize:'13px', fontFamily:'var(--font-sans)', fontWeight:600, cursor:'pointer' }}>Guardar</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Sidebar filters */}
              <div style={{ width:'220px', flexShrink:0, display:'flex', flexDirection:'column', gap:'12px' }}>
                <div style={{ background:'white', border:'1px solid var(--border-default)', borderRadius:'8px', padding:'14px', boxShadow:'var(--shadow-sm)' }}>
                  <div style={{ fontSize:'12px', fontWeight:700, color:'var(--fg-muted)', fontFamily:'var(--font-sans)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:'10px' }}>Filtrar por fuente</div>
                  {[['PJN','Poder Judicial Nación', 892],['CSJN','Corte Suprema',124],['SCBA','Sup. Corte Bs As',341],['Cámaras','Cámaras Nac.',2100]].map(([code,label,count])=>(
                    <label key={code} style={{ display:'flex', alignItems:'center', gap:'8px', padding:'5px 0', cursor:'pointer', borderBottom:'1px solid var(--border-muted)' }}>
                      <input type="checkbox" defaultChecked style={{ accentColor:'var(--color-teal-600)' }} />
                      <span style={{ flex:1, fontSize:'13px', color:'var(--fg-default)', fontFamily:'var(--font-sans)' }}>{label}</span>
                      <span style={{ fontSize:'12px', color:'var(--fg-subtle)', fontFamily:'var(--font-mono)' }}>{count}</span>
                    </label>
                  ))}
                </div>
                <div style={{ background:'var(--color-teal-50)', border:'1px solid var(--color-teal-200)', borderRadius:'8px', padding:'14px' }}>
                  <div style={{ fontSize:'12px', fontWeight:700, color:'var(--color-teal-800)', fontFamily:'var(--font-sans)', marginBottom:'8px' }}>💡 Consejo IA</div>
                  <p style={{ margin:0, fontSize:'13px', color:'var(--color-teal-900)', fontFamily:'var(--font-sans)', lineHeight:1.5 }}>Agregá la jurisdicción y el fuero para resultados más precisos. Ej: <em>"daños CABA fuero civil 2023-2024"</em></p>
                </div>
              </div>
            </>
          )}

          {/* Empty / initial */}
          {!loading && !submitted && (
            <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'12px', padding:'40px 0' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-300)" strokeWidth="1.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v3"/><circle cx="11" cy="14" r="0.5" fill="var(--color-gray-300)"/></svg>
              <div style={{ fontSize:'14px', color:'var(--fg-subtle)', fontFamily:'var(--font-sans)', textAlign:'center' }}>Ingresá una consulta para buscar jurisprudencia con IA</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Jurisprudencia });
