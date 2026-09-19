// Legal Flow Doctor — Agenda & Vencimientos
// Exports: Agenda

const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DAYS_SHORT = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

function Agenda({ onNavigate }) {
  const { vencimientos, todayEvents, cases } = window.LFDData;
  const [currentMonth, setCurrentMonth] = React.useState(5); // June = 5
  const [currentYear]  = React.useState(2026);
  const [activeView, setActiveView]     = React.useState('mes');
  const [selectedDay, setSelectedDay]   = React.useState(19);

  // Build calendar grid for current month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrev  = new Date(currentYear, currentMonth, 0).getDate();

  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--)
    cells.push({ day: daysInPrev - i, current: false });
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, current: true });
  while (cells.length % 7 !== 0)
    cells.push({ day: cells.length - daysInMonth - firstDay + 1, current: false });

  // Map vencimientos to dates
  const vByDate = {};
  vencimientos.forEach(v => {
    const d = parseInt(v.date.split('-')[2]);
    const m = parseInt(v.date.split('-')[1]) - 1;
    if (m === currentMonth) {
      if (!vByDate[d]) vByDate[d] = [];
      vByDate[d].push(v);
    }
  });

  const selectedDateStr = `2026-${String(currentMonth+1).padStart(2,'0')}-${String(selectedDay).padStart(2,'0')}`;
  const selectedVenc = vencimientos.filter(v => v.date === selectedDateStr);
  const isToday = d => d === 19 && currentMonth === 5 && currentYear === 2026;

  const priorityColor = { high: '#dc2626', normal: '#244876' };
  const priorityBg    = { high: '#fee2e2', normal: '#dfe8f2' };
  const priorityLabel = { high: 'Urgente', normal: 'Normal' };

  const statusColors = {
    active:  { bg: '#dcfaec', fg: '#166534', dot: '#22a35a', label: 'Activo' },
    urgent:  { bg: '#fee2e2', fg: '#991b1b', dot: '#dc2626', label: 'Urgente' },
    pending: { bg: '#fef9c3', fg: '#974d00', dot: '#d97706', label: 'Pendiente' },
    review:  { bg: '#dbeafe', fg: '#1d4ed8', dot: '#3b82f6', label: 'En revisión' },
    closed:  { bg: '#eceff4', fg: '#5a6170', dot: '#737b8c', label: 'Cerrado' },
    settled: { bg: '#d0f4f0', fg: '#106b61', dot: '#14867a', label: 'Resuelto' },
  };

  const upcoming = vencimientos
    .filter(v => !v.done && v.date >= '2026-06-19')
    .sort((a,b) => a.date.localeCompare(b.date))
    .slice(0, 8);

  return (
    <div style={{ flex:1, display:'flex', flexDirection:'column', overflow:'hidden', background:'var(--bg-subtle)' }}>
      {/* Header */}
      <div style={{ background:'white', borderBottom:'1px solid var(--border-muted)', padding:'14px 28px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div>
          <h1 style={{ margin:0, fontSize:'18px', fontFamily:'var(--font-serif)', fontWeight:600, color:'var(--fg-default)' }}>Agenda</h1>
          <p style={{ margin:0, fontSize:'13px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)' }}>
            {vencimientos.filter(v=>!v.done && v.date>='2026-06-19').length} vencimientos próximos · {todayEvents.length} eventos hoy
          </p>
        </div>
        <div style={{ display:'flex', gap:'8px', alignItems:'center' }}>
          {['mes','lista'].map(v => (
            <button key={v} onClick={()=>setActiveView(v)} style={{ padding:'5px 14px', borderRadius:'5px', border:'1.5px solid '+(activeView===v?'var(--color-teal-500)':'var(--border-default)'), background: activeView===v?'var(--color-teal-50)':'white', color: activeView===v?'var(--color-teal-700)':'var(--fg-muted)', fontSize:'13px', fontFamily:'var(--font-sans)', fontWeight:600, cursor:'pointer' }}>
              {v==='mes'?'Vista mes':'Lista'}
            </button>
          ))}
          <button style={{ display:'flex', alignItems:'center', gap:'6px', padding:'7px 14px', borderRadius:'6px', border:'none', background:'var(--color-teal-600)', color:'white', fontSize:'13px', fontFamily:'var(--font-sans)', fontWeight:600, cursor:'pointer' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
            Nuevo vencimiento
          </button>
        </div>
      </div>

      <div style={{ flex:1, overflowY:'auto', padding:'20px 28px', display:'flex', gap:'16px' }}>

        {/* Calendar + side panel */}
        {activeView === 'mes' && (
          <>
            {/* Calendar */}
            <div style={{ flex:1, display:'flex', flexDirection:'column', gap:'12px' }}>
              {/* Month nav */}
              <div style={{ background:'white', borderRadius:'8px', border:'1px solid var(--border-default)', boxShadow:'var(--shadow-sm)', overflow:'hidden' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 18px', borderBottom:'1px solid var(--border-muted)' }}>
                  <button onClick={()=>setCurrentMonth(m=>Math.max(0,m-1))} style={{ width:'28px', height:'28px', borderRadius:'5px', border:'1px solid var(--border-default)', background:'white', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--fg-muted)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <span style={{ fontSize:'15px', fontFamily:'var(--font-serif)', fontWeight:600, color:'var(--fg-default)' }}>{MONTHS[currentMonth]} {currentYear}</span>
                  <button onClick={()=>setCurrentMonth(m=>Math.min(11,m+1))} style={{ width:'28px', height:'28px', borderRadius:'5px', border:'1px solid var(--border-default)', background:'white', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--fg-muted)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
                {/* Day headers */}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', padding:'8px 12px 4px' }}>
                  {DAYS_SHORT.map(d => (
                    <div key={d} style={{ textAlign:'center', fontSize:'12px', fontWeight:700, color:'var(--fg-subtle)', fontFamily:'var(--font-sans)', letterSpacing:'0.06em', textTransform:'uppercase', padding:'4px 0' }}>{d}</div>
                  ))}
                </div>
                {/* Calendar grid */}
                <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', padding:'0 12px 12px', gap:'2px' }}>
                  {cells.map((cell,i) => {
                    const hasEvents = cell.current && vByDate[cell.day];
                    const isSelected = cell.current && cell.day === selectedDay;
                    const today = isToday(cell.day) && cell.current;
                    return (
                      <div key={i} onClick={()=>cell.current && setSelectedDay(cell.day)} onKeyDown={e=>{ if ((e.key==='Enter'||e.key===' ') && cell.current) { e.preventDefault(); setSelectedDay(cell.day); } }} tabIndex={cell.current ? 0 : -1} role="button" aria-label={cell.current ? `Ver el día ${cell.day}` : undefined}
                        style={{ borderRadius:'7px', padding:'6px 4px', minHeight:'56px', cursor:cell.current?'pointer':'default', background: isSelected?'var(--color-teal-600)': today?'var(--color-navy-900)':'transparent', transition:'background 100ms', position:'relative' }}>
                        <div style={{ textAlign:'center', fontSize:'14px', fontWeight: today||isSelected?700:400, color: isSelected||today?'white': cell.current?'var(--fg-default)':'var(--fg-subtle)', fontFamily:'var(--font-sans)', marginBottom:'4px' }}>{cell.day}</div>
                        {hasEvents && (
                          <div style={{ display:'flex', flexWrap:'wrap', gap:'2px', justifyContent:'center' }}>
                            {vByDate[cell.day].slice(0,3).map((v,vi) => (
                              <div key={vi} style={{ width:'7px', height:'7px', borderRadius:'50%', background: isSelected?'rgba(255,255,255,0.7)': v.done?'var(--color-gray-300)':v.priority==='high'?'var(--color-danger-400)':'var(--color-teal-400)' }} />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Today's events */}
              <div style={{ background:'white', border:'1px solid var(--border-default)', borderRadius:'8px', boxShadow:'var(--shadow-sm)', overflow:'hidden' }}>
                <div style={{ padding:'12px 18px', borderBottom:'1px solid var(--border-muted)' }}>
                  <span style={{ fontSize:'14px', fontWeight:700, color:'var(--fg-default)', fontFamily:'var(--font-sans)' }}>Hoy — {selectedDay} de {MONTHS[currentMonth]}</span>
                </div>
                {selectedVenc.length === 0
                  ? <div style={{ padding:'20px 18px', fontSize:'14px', color:'var(--fg-subtle)', fontFamily:'var(--font-sans)' }}>Sin vencimientos este día.</div>
                  : selectedVenc.map((v,i) => (
                    <div key={v.id} style={{ padding:'12px 18px', borderBottom: i<selectedVenc.length-1?'1px solid var(--border-muted)':'none', display:'flex', gap:'12px', alignItems:'flex-start' }}>
                      <div style={{ width:'10px', height:'10px', borderRadius:'50%', marginTop:'4px', background: v.done?'var(--color-gray-300)':v.priority==='high'?'var(--color-danger-400)':'var(--color-teal-400)', flexShrink:0 }} />
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:'14px', fontWeight:600, color: v.done?'var(--fg-subtle)':'var(--fg-default)', fontFamily:'var(--font-sans)', textDecoration: v.done?'line-through':'none' }}>{v.title}</div>
                        <div style={{ fontSize:'12px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)', marginTop:'2px' }}>{v.court}</div>
                        <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--color-teal-700)', marginTop:'3px' }}>{v.caseId}</div>
                      </div>
                      <span style={{ fontSize:'12px', fontWeight:700, padding:'2px 8px', borderRadius:'999px', background:v.done?'var(--color-gray-100)':priorityBg[v.priority], color:v.done?'var(--fg-subtle)':priorityColor[v.priority], fontFamily:'var(--font-sans)', whiteSpace:'nowrap' }}>
                        {v.done ? 'Cumplido' : priorityLabel[v.priority]}
                      </span>
                    </div>
                  ))
                }
                {selectedDay === 19 && currentMonth === 5 && (
                  <>
                    {todayEvents.map((ev,i) => (
                      <div key={i} style={{ padding:'12px 18px', borderTop:'1px solid var(--border-muted)', display:'flex', gap:'12px', alignItems:'flex-start' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ev.type==='hearing'?'#244876':ev.type==='deadline'?'#dc2626':'#14867a'} strokeWidth="2" style={{marginTop:2,flexShrink:0}}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:'14px', fontWeight:500, color:'var(--fg-default)', fontFamily:'var(--font-sans)' }}>{ev.title}</div>
                          {ev.court && <div style={{ fontSize:'12px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)', marginTop:'2px' }}>{ev.court}</div>}
                        </div>
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:'13px', fontWeight:700, color:'var(--fg-default)', whiteSpace:'nowrap' }}>{ev.time}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Side panel — upcoming */}
            <div style={{ width:'280px', flexShrink:0, display:'flex', flexDirection:'column', gap:'12px' }}>
              <div style={{ background:'white', border:'1px solid var(--border-default)', borderRadius:'8px', boxShadow:'var(--shadow-sm)', overflow:'hidden' }}>
                <div style={{ padding:'12px 16px', borderBottom:'1px solid var(--border-muted)', background:'var(--color-navy-900)' }}>
                  <span style={{ fontSize:'13px', fontWeight:700, color:'white', fontFamily:'var(--font-sans)' }}>Próximos vencimientos</span>
                </div>
                {upcoming.map((v,i) => {
                  const d = new Date(v.date + 'T12:00:00');
                  const dStr = `${d.getDate()} ${MONTHS[d.getMonth()].slice(0,3)}`;
                  const isUrgent = v.priority === 'high';
                  return (
                    <div key={v.id} style={{ padding:'10px 16px', borderBottom: i<upcoming.length-1?'1px solid var(--border-muted)':'none', display:'flex', gap:'10px', alignItems:'flex-start' }}>
                      <div style={{ flexShrink:0, textAlign:'center', minWidth:'36px' }}>
                        <div style={{ fontSize:'16px', fontWeight:800, color: isUrgent?'var(--color-danger-500)':'var(--fg-default)', fontFamily:'var(--font-sans)', lineHeight:1 }}>{d.getDate()}</div>
                        <div style={{ fontSize:'12px', fontWeight:700, color:'var(--fg-subtle)', fontFamily:'var(--font-sans)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{MONTHS[d.getMonth()].slice(0,3)}</div>
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontSize:'13px', fontWeight:500, color:'var(--fg-default)', fontFamily:'var(--font-sans)', lineHeight:1.3, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{v.title}</div>
                        <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--color-teal-700)', marginTop:'3px' }}>{v.caseId}</div>
                      </div>
                      {isUrgent && <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'var(--color-danger-400)', flexShrink:0, marginTop:'4px' }} />}
                    </div>
                  );
                })}
              </div>

              {/* PJN Status */}
              <div style={{ background:'white', border:'1px solid var(--border-default)', borderRadius:'8px', padding:'14px 16px', boxShadow:'var(--shadow-sm)' }}>
                <div style={{ fontSize:'12px', fontWeight:700, color:'var(--fg-muted)', fontFamily:'var(--font-sans)', textTransform:'uppercase', letterSpacing:'0.07em', marginBottom:'10px' }}>Estado PJN / MEV</div>
                {[['PJN', true], ['MEV', true], ['PBA', true], ['CABA', false]].map(([name, online]) => (
                  <div key={name} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'5px 0', borderBottom:'1px solid var(--border-muted)' }}>
                    <span style={{ fontSize:'13px', fontFamily:'var(--font-mono)', color:'var(--fg-default)' }}>{name}</span>
                    <span style={{ display:'inline-flex', alignItems:'center', gap:'5px', fontSize:'12px', fontWeight:600, color: online?'var(--color-success-600)':'var(--color-danger-600)', fontFamily:'var(--font-sans)' }}>
                      <span style={{ width:'6px', height:'6px', borderRadius:'50%', background: online?'var(--color-success-400)':'var(--color-danger-400)' }} />
                      {online ? 'En línea' : 'Caído'}
                    </span>
                  </div>
                ))}
                <div style={{ fontSize:'12px', color:'var(--fg-subtle)', fontFamily:'var(--font-sans)', marginTop:'8px' }}>Última sincronización: hace 4 min</div>
              </div>
            </div>
          </>
        )}

        {/* List view */}
        {activeView === 'lista' && (
          <div style={{ flex:1 }}>
            <div style={{ background:'white', border:'1px solid var(--border-default)', borderRadius:'8px', boxShadow:'var(--shadow-sm)', overflow:'hidden' }}>
              <table style={{ width:'100%', borderCollapse:'collapse' }}>
                <thead>
                  <tr style={{ background:'var(--bg-subtle)' }}>
                    {['Fecha','Vencimiento','Expediente','Tribunal','Prioridad','Estado'].map(h => (
                      <th key={h} style={{ padding:'9px 14px', fontSize:'12px', fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'var(--fg-muted)', textAlign:'left', fontFamily:'var(--font-sans)', borderBottom:'1px solid var(--border-default)', whiteSpace:'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {vencimientos.sort((a,b)=>a.date.localeCompare(b.date)).map((v,i) => {
                    const d = new Date(v.date+'T12:00:00');
                    const overdue = !v.done && v.date < '2026-06-19';
                    return (
                      <tr key={v.id} style={{ background: i%2===0?'white':'var(--bg-subtle)', cursor:'pointer' }}
                        onMouseEnter={e=>e.currentTarget.style.background='var(--color-teal-50)'}
                        onMouseLeave={e=>e.currentTarget.style.background=i%2===0?'white':'var(--bg-subtle)'}>
                        <td style={{ padding:'10px 14px', borderBottom:'1px solid var(--border-muted)', whiteSpace:'nowrap' }}>
                          <span style={{ fontFamily:'var(--font-mono)', fontSize:'13px', color: overdue?'var(--color-danger-600)':'var(--fg-default)', fontWeight: overdue?700:400 }}>
                            {d.getDate()} {MONTHS[d.getMonth()].slice(0,3)} {d.getFullYear()}
                          </span>
                        </td>
                        <td style={{ padding:'10px 14px', borderBottom:'1px solid var(--border-muted)' }}>
                          <span style={{ fontSize:'14px', fontWeight:500, color: v.done?'var(--fg-subtle)':'var(--fg-default)', fontFamily:'var(--font-sans)', textDecoration: v.done?'line-through':'none' }}>{v.title}</span>
                        </td>
                        <td style={{ padding:'10px 14px', borderBottom:'1px solid var(--border-muted)', whiteSpace:'nowrap' }}>
                          <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--color-teal-700)' }}>{v.caseId}</span>
                        </td>
                        <td style={{ padding:'10px 14px', borderBottom:'1px solid var(--border-muted)', maxWidth:'180px' }}>
                          <span style={{ fontSize:'12px', color:'var(--fg-muted)', fontFamily:'var(--font-sans)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', display:'block' }}>{v.court}</span>
                        </td>
                        <td style={{ padding:'10px 14px', borderBottom:'1px solid var(--border-muted)', whiteSpace:'nowrap' }}>
                          <span style={{ fontSize:'12px', fontWeight:600, padding:'2px 8px', borderRadius:'999px', background: overdue?'var(--color-danger-100)':priorityBg[v.priority], color: overdue?'var(--color-danger-700)':priorityColor[v.priority], fontFamily:'var(--font-sans)' }}>
                            {overdue ? 'Vencido' : priorityLabel[v.priority]}
                          </span>
                        </td>
                        <td style={{ padding:'10px 14px', borderBottom:'1px solid var(--border-muted)', whiteSpace:'nowrap' }}>
                          <span style={{ fontSize:'12px', fontWeight:600, color: v.done?'var(--color-success-700)':'var(--fg-muted)', fontFamily:'var(--font-sans)' }}>
                            {v.done ? '✓ Cumplido' : 'Pendiente'}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Agenda });
