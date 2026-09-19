// Legal Flow Doctor — Case Detail (Expediente)
// Exports: CaseDetail

function CaseDetail({ caseId, onBack }) {
  const { cases, caseHistory, caseDocuments, parties, todayEvents } = window.LFDData;
  const [activeTab, setActiveTab] = React.useState('general');
  const c = cases.find(x => x.id === caseId) || cases[0];

  const statusStyles = {
    active:  { bg: '#dcfaec', fg: '#166634', dot: '#22a35a', label: 'Activo' },
    urgent:  { bg: '#fee2e2', fg: '#991b1b', dot: '#dc2626', label: 'Urgente' },
    pending: { bg: '#fef9c3', fg: '#974d00', dot: '#d97706', label: 'Pendiente' },
    review:  { bg: '#dbeafe', fg: '#1d4ed8', dot: '#3b82f6', label: 'En revisión' },
    closed:  { bg: '#eceff4', fg: '#5a6170', dot: '#737b8c', label: 'Cerrado' },
    settled: { bg: '#d0f4f0', fg: '#106b61', dot: '#14867a', label: 'Resuelto' },
    review:  { bg: '#dbeafe', fg: '#1d4ed8', dot: '#3b82f6', label: 'In Review' },
    closed:  { bg: '#eceff4', fg: '#5a6170', dot: '#737b8c', label: 'Closed' },
    settled: { bg: '#d0f4f0', fg: '#106b61', dot: '#14867a', label: 'Settled' },
  };

  const TABS = ['general', 'documents', 'parties', 'history', 'agenda'];
  const tabLabel = { general: 'General', documents: 'Documentos', parties: 'Partes', history: 'Historial', agenda: 'Agenda' };

  const st = statusStyles[c.status] || statusStyles.active;

  const Field = ({ label, value, mono }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
      <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{label}</span>
      <span style={{ fontSize: '14px', color: 'var(--fg-default)', fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', fontWeight: 500 }}>{value || '—'}</span>
    </div>
  );

  const fileIcons = { pdf: '#dc2626', doc: '#244876', zip: '#a8752a' };
  const caseEvents = todayEvents.filter(e => e.caseId === c.id);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-subtle)' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-muted)' }}>
        <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-muted)' }}>
          <button onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '14px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Expedientes
          </button>
          <span style={{ color: 'var(--fg-subtle)', fontSize: '14px' }}>/</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-teal-700)', fontWeight: 500 }}>{c.id}</span>
        </div>
        <div style={{ padding: '16px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, background: st.bg, color: st.fg, fontFamily: 'var(--font-sans)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: st.dot }}></span>
                  {st.label}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.type}</span>
                <span style={{ fontSize: '13px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)' }}>·</span>
                <span style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.jurisdiction}</span>
              </div>
              <h2 style={{ margin: '0 0 4px', fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--fg-default)', lineHeight: 1.3 }}>{c.title}</h2>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.court} · Iniciado {c.filed} · Actualizado {c.lastUpdate}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginLeft: '16px', flexShrink: 0 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', borderRadius: '6px', border: '1px solid var(--border-strong)', background: 'white', color: 'var(--fg-default)', fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                Editar
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', borderRadius: '6px', border: 'none', background: 'var(--color-teal-600)', color: 'white', fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                Agregar documento
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0', paddingLeft: '28px' }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: '10px 18px', fontSize: '14px', fontFamily: 'var(--font-sans)', fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? 'var(--color-teal-700)' : 'var(--fg-muted)',
              background: 'none', border: 'none', borderBottom: activeTab === tab ? '2px solid var(--color-teal-600)' : '2px solid transparent',
              cursor: 'pointer', transition: 'all 100ms', whiteSpace: 'nowrap',
            }}>{tabLabel[tab]}</button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>

        {/* General Tab */}
        {activeTab === 'general' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Datos del Expediente</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                  <Field label="N° Expediente" value={c.id} mono />
                  <Field label="Iniciado" value={c.filed} />
                  <Field label="Jurisdicción" value={c.jurisdiction} />
                  <Field label="Juzgado" value={c.court} />
                  <Field label="Tipo de causa" value={c.type} />
                  <Field label="Monto reclamado" value={c.amount} mono />
                  <Field label="Cliente" value={c.client} />
                  <Field label="Asignado a" value={c.assigned} />
                  <Field label="Última actualización" value={c.lastUpdate} />
                </div>
              </div>
              <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Notas Internas</div>
                <div style={{ background: 'var(--bg-subtle)', borderRadius: '6px', border: '1px solid var(--border-muted)', padding: '12px', fontSize: '14px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', lineHeight: 1.6, minHeight: '80px' }}>
                  Sin notas. Agregá una nota para registrar observaciones internas sobre esta causa.
                </div>
                <button style={{ marginTop: '10px', fontSize: '13px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-sans)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>+ Agregar nota</button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Resumen</div>
                {[['Documentos', caseDocuments.length], ['Partes', parties.length], ['Movimientos', caseHistory.length], ['Vencimientos', '2']].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border-muted)', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{l}</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--color-teal-50)', border: '1px solid var(--color-teal-200)', borderRadius: '8px', padding: '14px 16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-teal-800)', fontFamily: 'var(--font-sans)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>⚡ Próxima Acción</div>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-teal-900)', fontFamily: 'var(--font-sans)', lineHeight: 1.5 }}>Vencimiento de presentación <strong>mañana</strong>. La contestación de demanda debe presentarse antes de las 11:00 hs.</p>
                <button style={{ marginTop: '10px', fontSize: '13px', background: 'var(--color-teal-600)', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 12px', fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer' }}>Abrir editor de documentos</button>
              </div>
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>Documentos ({caseDocuments.length})</span>
              <button style={{ fontSize: '13px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-sans)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>+ Subir archivo</button>
            </div>
            {caseDocuments.map((doc, i) => (
              <div key={i} style={{ padding: '12px 18px', borderBottom: i < caseDocuments.length - 1 ? '1px solid var(--border-muted)' : 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-subtle)'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                <div style={{ width: '32px', height: '36px', borderRadius: '4px', background: fileIcons[doc.type] + '14', border: `1px solid ${fileIcons[doc.type]}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: fileIcons[doc.type], fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{doc.type}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginTop: '2px' }}>{doc.size} · Subido el {doc.date} por {doc.user}</div>
                </div>
                <button style={{ fontSize: '12px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-sans)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Descargar</button>
              </div>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-muted)' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>Historial de movimientos</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              {caseHistory.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', padding: '12px 18px', borderBottom: i < caseHistory.length - 1 ? '1px solid var(--border-muted)' : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? 'var(--color-teal-500)' : 'var(--color-gray-300)', border: i === 0 ? '2px solid var(--color-teal-200)' : 'none', marginTop: '4px' }}></div>
                    {i < caseHistory.length - 1 && <div style={{ width: '1px', flex: 1, background: 'var(--border-muted)', margin: '4px 0 0' }}></div>}
                  </div>
                  <div style={{ flex: 1, paddingBottom: i < caseHistory.length - 1 ? '4px' : '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{h.action}</span>
                      <span style={{ fontSize: '12px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{h.date} {h.time}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginTop: '2px' }}>{h.detail}</div>
                    <div style={{ fontSize: '12px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)', marginTop: '3px' }}>por {h.user}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Parties Tab */}
        {activeTab === 'parties' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {parties.map((p, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '16px 20px', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: i === 0 ? 'var(--color-teal-100)' : i === 1 ? 'var(--color-navy-100)' : 'var(--color-gold-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px', fontWeight: 700, color: i === 0 ? 'var(--color-teal-800)' : i === 1 ? 'var(--color-navy-800)' : 'var(--color-gold-700)', fontFamily: 'var(--font-sans)' }}>{p.role.slice(0, 2).toUpperCase()}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{p.name}</span>
                    <span style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', background: 'var(--bg-muted)', padding: '1px 7px', borderRadius: '4px' }}>{p.role}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                    <div><span style={{ fontSize: '12px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>Tipo</span><span style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{p.type}</span></div>
                    <div><span style={{ fontSize: '12px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>CUIT</span><span style={{ fontSize: '13px', color: 'var(--fg-default)', fontFamily: 'var(--font-mono)' }}>{p.cuit}</span></div>
                    <div><span style={{ fontSize: '12px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>Contacto</span><span style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{p.contact}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Agenda Tab */}
        {activeTab === 'agenda' && (
          <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>Eventos vinculados a esta causa:</p>
            {caseEvents.length === 0
              ? <div style={{ textAlign: 'center', padding: '32px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}>Sin eventos programados hoy para esta causa.</div>
              : caseEvents.map((ev, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: '1px solid var(--border-muted)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 700, color: 'var(--fg-default)', minWidth: '42px' }}>{ev.time}</span>
                  <span style={{ fontSize: '14px', color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{ev.title}</span>
                </div>
              ))
            }
            <button style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-sans)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>+ Agendar evento</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { CaseDetail });
