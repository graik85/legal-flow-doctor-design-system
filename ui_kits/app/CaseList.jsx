// Legal Flow Doctor — Case List (Expedientes)
// Exports: CaseList

function CaseList({ onSelectCase }) {
  const { cases } = window.LFDData;
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [typeFilter, setTypeFilter] = React.useState('all');

  const filtered = cases.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.title.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.court.toLowerCase().includes(q);
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    const matchType = typeFilter === 'all' || c.type === typeFilter;
    return matchSearch && matchStatus && matchType;
  });

  const statusStyles = {
    active:  { bg: '#dcfaec', fg: '#166534', dot: '#22a35a', label: 'Activo' },
    urgent:  { bg: '#fee2e2', fg: '#991b1b', dot: '#dc2626', label: 'Urgente' },
    pending: { bg: '#fef9c3', fg: '#974d00', dot: '#d97706', label: 'Pendiente' },
    review:  { bg: '#dbeafe', fg: '#1d4ed8', dot: '#3b82f6', label: 'En revisión' },
    closed:  { bg: '#eceff4', fg: '#5a6170', dot: '#737b8c', label: 'Cerrado' },
    settled: { bg: '#d0f4f0', fg: '#106b61', dot: '#14867a', label: 'Resuelto' },
    drafting:{ bg: '#dfe8f2', fg: '#1d3a61', dot: '#244876', label: 'En trámite' },
  };

  const types = ['all', ...Array.from(new Set(cases.map(c => c.type)))];
  const statuses = ['all', 'active', 'urgent', 'pending', 'review', 'closed', 'settled'];

  const btnBase = { border: 'none', borderRadius: '4px', padding: '4px 10px', fontSize: '13px', fontFamily: 'var(--font-sans)', fontWeight: 600, cursor: 'pointer', transition: 'all 100ms' };

  const StatusCount = ({ status, count }) => {
    const st = statusStyles[status];
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', background: 'white', border: '1px solid var(--border-muted)', borderRadius: '6px', flex: 1 }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: st.dot, flexShrink: 0 }}></span>
        <span style={{ fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', flex: 1 }}>{st.label}</span>
        <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{count}</span>
      </div>
    );
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-subtle)' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-muted)', padding: '14px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--fg-default)' }}>Expedientes</h1>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{cases.length} causas en total — {cases.filter(c => c.status === 'active').length} activas</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ ...btnBase, background: 'var(--bg-subtle)', border: '1px solid var(--border-strong)', color: 'var(--fg-default)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Exportar
              </span>
            </button>
            <button style={{ ...btnBase, background: 'var(--color-teal-600)', color: 'white', padding: '6px 14px', fontSize: '14px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                Nueva Causa
              </span>
            </button>
          </div>
        </div>

        {/* Status summary */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {['active', 'urgent', 'pending', 'review', 'closed'].map(s => (
            <StatusCount key={s} status={s} count={cases.filter(c => c.status === s).length} />
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border-muted)', padding: '10px 28px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, maxWidth: '340px', background: 'var(--bg-subtle)', border: '1px solid var(--border-default)', borderRadius: '6px', padding: '7px 12px' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--fg-muted)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar por carátula, cliente, juzgado, N° expte…" style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', flex: 1 }} />
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>Estado:</span>
          {statuses.map(s => (
            <button key={s} onClick={() => setStatusFilter(s)} style={{ ...btnBase, background: statusFilter === s ? 'var(--color-teal-600)' : 'var(--bg-subtle)', color: statusFilter === s ? 'white' : 'var(--fg-muted)', border: '1px solid ' + (statusFilter === s ? 'var(--color-teal-600)' : 'var(--border-default)'), padding: '3px 9px' }}>
              {s === 'all' ? 'Todos' : (statusStyles[s]?.label || s)}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginLeft: '4px' }}>
          <span style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>Tipo:</span>
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={{ fontSize: '13px', fontFamily: 'var(--font-sans)', border: '1px solid var(--border-default)', borderRadius: '5px', padding: '3px 24px 3px 8px', background: 'var(--bg-subtle)', color: 'var(--fg-default)', outline: 'none', cursor: 'pointer' }}>
            {types.map(t => <option key={t} value={t}>{t === 'all' ? 'Todos los tipos' : t}</option>)}
          </select>
        </div>
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{filtered.length} resultado{filtered.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Table */}
      <div style={{ flex: 1, overflow: 'auto', padding: '16px 28px' }}>
        <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--bg-subtle)' }}>
                {['Expte.', 'Carátula / Juzgado', 'Tipo', 'Cliente', 'Monto', 'Estado', 'Asignado', 'Actualizado'].map(h => (
                  <th key={h} style={{ padding: '9px 14px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--fg-muted)', textAlign: 'left', fontFamily: 'var(--font-sans)', borderBottom: '1px solid var(--border-default)', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => {
                const st = statusStyles[c.status] || statusStyles.active;
                return (
                  <tr key={c.id} onClick={() => onSelectCase(c.id)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectCase(c.id); } }} tabIndex={0} role="link" aria-label={`Abrir expediente ${c.id}`} style={{ cursor: 'pointer', background: i % 2 === 0 ? 'white' : '#fafbfc', transition: 'background 80ms' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--color-teal-50)'}
                    onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'white' : '#fafbfc'}>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-teal-700)', fontWeight: 500 }}>{c.id}</span>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', maxWidth: '260px' }}>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '240px' }}>{c.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.court}</div>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.type}</span>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap', maxWidth: '130px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--fg-default)', fontFamily: 'var(--font-sans)', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>{c.client}</span>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--fg-default)' }}>{c.amount}</span>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, background: st.bg, color: st.fg, fontFamily: 'var(--font-sans)' }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: st.dot }}></span>
                        {st.label}
                      </span>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-navy-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: 'var(--color-navy-700)', flexShrink: 0 }}>{c.assigned.split(' ').map(w => w[0]).join('')}</div>
                        <span style={{ fontSize: '12px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)' }}>{c.assigned.split(' ')[0]}</span>
                      </div>
                    </td>
                    <td style={{ padding: '11px 14px', borderBottom: '1px solid var(--border-muted)', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: '12px', color: 'var(--fg-subtle)', fontFamily: 'var(--font-sans)' }}>{c.lastUpdate}</span>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr><td colSpan="8" style={{ padding: '32px', textAlign: 'center', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', fontSize: '14px' }}>Ninguna causa coincide con los filtros aplicados.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CaseList });
