// Legal Flow Doctor — Dashboard View
// Exports: Dashboard

function StatCard({ label, value, sub, color, icon }) {
  return (
    <div style={{
      background: 'white', borderRadius: '8px', padding: '16px 18px',
      border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-sm)',
      display: 'flex', flexDirection: 'column', gap: '4px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</span>
        <span style={{ color, opacity: 0.85 }}>{icon}</span>
      </div>
      <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', lineHeight: 1.1 }}>{value}</div>
      {sub && <div style={{ fontSize: '11px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{sub}</div>}
    </div>
  );
}

function Dashboard({ onNavigate }) {
  const { stats, todayEvents, cases, upcomingEvents } = window.LFDData;
  const recentCases = cases.slice(0, 5);

  const statusStyles = {
    active:  { bg: '#dcfaec', fg: '#166534', dot: '#22a35a' },
    urgent:  { bg: '#fee2e2', fg: '#991b1b', dot: '#dc2626' },
    pending: { bg: '#fef9c3', fg: '#974d00', dot: '#d97706' },
    review:  { bg: '#dbeafe', fg: '#1d4ed8', dot: '#3b82f6' },
    closed:  { bg: '#eceff4', fg: '#5a6170', dot: '#737b8c' },
    settled: { bg: '#d0f4f0', fg: '#106b61', dot: '#14867a' },
  };

  const eventTypeStyle = { hearing: '#244876', deadline: '#dc2626', meeting: '#14867a' };
  const eventTypeLabel = { hearing: 'Hearing', deadline: 'Deadline', meeting: 'Meeting' };

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: 'var(--bg-subtle)' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-muted)', padding: '14px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--fg-default)' }}>Inicio</h1>
          <p style={{ margin: 0, fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>Jueves, 19 de junio de 2026 · {stats.hearingsThisMonth} audiencias este mes</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => onNavigate('cases')} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', borderRadius: '6px', border: '1.5px solid var(--color-teal-400)', background: 'transparent', color: 'var(--color-teal-700)', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            Nueva Causa
          </button>
        </div>
      </div>

      <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* PJN Alert Banner */}
        {window.LFDData.movimientos && window.LFDData.movimientos.filter(m=>!m.read).length > 0 && (
          <div style={{ background:'var(--color-navy-900)', borderRadius:'8px', padding:'12px 18px', display:'flex', alignItems:'center', gap:'12px' }}>
            <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:'var(--color-teal-400)', flexShrink:0 }} />
            <span style={{ flex:1, fontSize:'13px', color:'white', fontFamily:'var(--font-sans)', fontWeight:500 }}>
              <strong style={{ color:'var(--color-teal-300)' }}>{window.LFDData.movimientos.filter(m=>!m.read).length} movimientos nuevos</strong> en tus expedientes — PJN sincronizado hace 4 min
            </span>
            <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.45)', fontFamily:'var(--font-sans)' }}>PJN · MEV · CABA ✓</span>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
          <StatCard label="Total Expedientes" value={stats.totalCases} sub={`+${stats.newThisWeek} esta semana`} color="var(--color-navy-600)"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>} />
          <StatCard label="Causas activas" value={stats.activeCases} sub="74,5% del total" color="var(--color-teal-600)"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>} />
          <StatCard label="Urgentes" value={stats.urgentCases} sub="Requieren atención inmediata" color="var(--color-danger-500)"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>} />
          <StatCard label="Firmas pendientes" value={stats.pendingSignatures} sub="Documentos por firmar" color="var(--color-gold-500)"
            icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 19.6 8 22l-4-1 1-4 6.4-6.4"/></svg>} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '16px' }}>
          {/* Recent Cases */}
          <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>Expedientes recientes</span>
              <button onClick={() => onNavigate('cases')} style={{ fontSize: '12px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-sans)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Ver todas →</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--bg-subtle)' }}>
                  {['Expte.', 'Carátula', 'Tipo', 'Estado', 'Asignado'].map(h => (
                    <th key={h} style={{ padding: '8px 14px', fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg-muted)', textAlign: 'left', fontFamily: 'var(--font-sans)', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentCases.map((c, i) => {
                  const st = statusStyles[c.status] || statusStyles.active;
                  return (
                    <tr key={c.id} onClick={() => onNavigate('case-detail')} style={{ cursor: 'pointer', background: i % 2 === 0 ? 'white' : 'var(--bg-subtle)', transition: 'background 100ms' }}>
                      <td style={{ padding: '10px 14px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-teal-700)', whiteSpace: 'nowrap', borderBottom: '1px solid var(--border-muted)' }}>{c.id}</td>
                      <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-muted)', maxWidth: '220px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</div>
                        <div style={{ fontSize: '10px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginTop: '1px' }}>{c.court}</div>
                      </td>
                      <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: '11px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.type}</span>
                      </td>
                      <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 8px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, background: st.bg, color: st.fg, fontFamily: 'var(--font-sans)' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: st.dot }}></span>
                          {c.status.charAt(0).toUpperCase() + c.status.slice(1)}
                        </span>
                      </td>
                      <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-teal-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: 'var(--color-teal-800)', flexShrink: 0 }}>{c.assigned.split(' ').map(w => w[0]).join('')}</div>
                          <span style={{ fontSize: '11px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.assigned.split(' ')[0]}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Today's Agenda */}
          <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>Movimientos</span>
              <button onClick={() => onNavigate('agenda')} style={{ fontSize: '12px', color: 'var(--color-teal-700)', fontFamily: 'var(--font-sans)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Ver agenda →</button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {window.LFDData.movimientos.map((mv, i) => (
                <div key={mv.id} style={{ padding: '10px 18px', borderBottom: i < window.LFDData.movimientos.length - 1 ? '1px solid var(--border-muted)' : 'none', display: 'flex', gap: '10px', alignItems: 'flex-start', background: mv.read ? 'transparent' : 'var(--color-teal-50)' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', marginTop: '5px', flexShrink: 0, background: mv.read ? 'var(--color-gray-200)' : mv.type === 'deadline' ? 'var(--color-danger-400)' : 'var(--color-teal-400)' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{mv.action}</span>
                      <span style={{ fontSize: '10px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{mv.time}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginTop: '1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{mv.detail}</div>
                    <div style={{ display: 'flex', gap: '6px', marginTop: '3px', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-teal-700)' }}>{mv.caseId}</span>
                      <span style={{ fontSize: '9px', fontWeight: 700, padding: '1px 5px', borderRadius: '3px', background: mv.source === 'PJN' ? 'var(--color-navy-100)' : 'var(--color-gray-100)', color: mv.source === 'PJN' ? 'var(--color-navy-700)' : 'var(--fg-muted)', fontFamily: 'var(--font-mono)' }}>{mv.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 18px', borderTop: '1px solid var(--border-muted)', background: 'var(--bg-subtle)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Próximos vencimientos</div>
              {window.LFDData.vencimientos.filter(v=>!v.done&&v.date>='2026-06-19').slice(0,3).map((v, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                  <span style={{ fontSize: '11px', color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginRight: '8px' }}>{v.title}</span>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: v.priority === 'high' ? 'var(--color-danger-600)' : 'var(--fg-muted)', whiteSpace: 'nowrap', fontFamily: 'var(--font-sans)' }}>{v.date.slice(8)} {['','','','','','','jun','jul','ago'][parseInt(v.date.slice(5,7))]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });
