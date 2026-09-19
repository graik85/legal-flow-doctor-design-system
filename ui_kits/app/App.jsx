// Legal Flow Doctor — App Shell
// Main app component, rendered last

function PlaceholderView({ title, subtitle, features, icon }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-subtle)', padding: '48px 32px' }}>
      <div style={{ maxWidth: '480px', width: '100%', textAlign: 'center' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: 'var(--color-navy-900)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teal-300)', margin: '0 auto 20px' }}>{icon}</div>
        <h2 style={{ margin: '0 0 8px', fontSize: '22px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--fg-default)' }}>{title}</h2>
        {subtitle && <p style={{ margin: '0 0 24px', fontSize: '14px', color: 'var(--fg-muted)', fontFamily: 'var(--font-sans)', lineHeight: 1.6 }}>{subtitle}</p>}
        {features && features.length > 0 && (
          <div style={{ background: 'white', border: '1px solid var(--border-default)', borderRadius: '10px', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', textAlign: 'left', marginBottom: '20px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--fg-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>Features planificados</div>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', borderBottom: i < features.length - 1 ? '1px solid var(--border-muted)' : 'none' }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '2px dashed var(--color-teal-300)', flexShrink: 0 }} />
                <span style={{ fontSize: '14px', color: 'var(--fg-default)', fontFamily: 'var(--font-sans)' }}>{f}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '999px', background: 'var(--color-navy-100)', color: 'var(--color-navy-800)', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          En desarrollo — próximamente
        </div>
      </div>
    </div>
  );
}

function App() {
  const [view, setView] = React.useState('dashboard');
  const [selectedCase, setSelectedCase] = React.useState(null);

  const handleNavigate = (v) => {
    if (v !== 'case-detail') setSelectedCase(null);
    setView(v);
  };

  const handleSelectCase = (id) => {
    setSelectedCase(id);
    setView('case-detail');
  };

  const handleBack = () => {
    setSelectedCase(null);
    setView('cases');
  };

  const icon = (d) => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" dangerouslySetInnerHTML={{__html: d}} />;

  const placeholders = {
    pruebas: {
      title: 'Gestión de Pruebas',
      subtitle: 'Control del ciclo de vida de cada prueba — testimonial, confesional, informativa y pericial — desde el ofrecimiento hasta la producción.',
      features: [
        'Prueba testimonial — testigos con estado del ciclo (ofrecida → admitida → notificada → producida)',
        'Prueba confesional — absolución de posiciones con seguimiento',
        'Prueba informativa — oficios a bancos, ANSES, AFIP, registros',
        'Prueba pericial — médica, contable, ingeniería; análisis con IA integrado',
        'Punteo de expediente — checklist de estado para avanzar de etapa',
        'Sistema de semáforo: 🔴 vencimiento procesal · 🟡 compromiso · 🟢 tarea',
        'Alertas automáticas con 90 / 30 / 15 / 7 días de anticipación',
      ],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 12 2 2 4-4"/></svg>,
    },
    honorarios: {
      title: 'Honorarios y facturación',
      subtitle: 'Registro de horas trabajadas, liquidación de honorarios y facturación electrónica AFIP — todo desde el expediente.',
      features: [
        'Time tracking por expediente y tarea',
        'Liquidación automática de honorarios',
        'Facturación electrónica con CAE (AFIP)',
        'Dashboard de ingresos por área y abogado',
        'Cuentas por cobrar y recordatorios de pago',
      ],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    },
    'portal-cliente': {
      title: 'Portal del cliente',
      subtitle: 'Acceso seguro para que los clientes consulten el estado de sus causas, descarguen documentos y firmen electrónicamente.',
      features: [
        'Vista de estado de expedientes en tiempo real',
        'Descarga de documentos autorizados',
        'Firma electrónica de escritos y contratos',
        'Notificaciones automáticas por email y WhatsApp',
        'Chat directo cliente ↔ estudio',
      ],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    },
    documents: {
      title: 'Documentos',
      subtitle: 'Repositorio centralizado de escritos, contratos y pruebas con búsqueda full-text y versionado.',
      features: ['Repositorio por expediente con versiones', 'Búsqueda full-text en todos los documentos', 'Editor de escritos con variables dinámicas', 'Firma electrónica integrada'],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
    },
    liquidaciones: {
      title: 'Liquidaciones',
      subtitle: 'Cálculo automático de rubros: intereses, actualizaciones indexadas y capital.',
      features: ['Cálculo de intereses (tasas BNA / CER / UVA)', 'Actualización por índices INDEC', 'Exportación a PDF y Word', 'Historial de liquidaciones por expediente'],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    },
    reportes: {
      title: 'Reportes',
      subtitle: 'Métricas de gestión: causas activas, tiempos de resolución, performance por abogado.',
      features: ['Dashboard de KPIs por área de práctica', 'Reporte de cartera por estado y cliente', 'Métricas de tiempo promedio de resolución', 'Exportación Excel / PDF'],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
    },
    facturacion: {
      title: 'Facturación electrónica',
      subtitle: 'Emisión de comprobantes electrónicos con CAE directo desde la plataforma (AFIP).',
      features: ['Emisión de facturas A, B y C con CAE', 'Integración directa con AFIP (webservice)', 'Vinculación automática con honorarios', 'Historial de comprobantes por cliente'],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    },
    users: {
      title: 'Usuarios y permisos',
      subtitle: 'Gestión de accesos por rol: socio, asociado, pasante, administrativo y cliente.',
      features: ['5 niveles de permisos configurables', 'Acceso por expediente o por área', 'Log de auditoría de acciones', 'Multi-estudio (tenancy)'],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    settings: {
      title: 'Configuración',
      subtitle: null,
      features: [],
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    },
  };

  return (
    <div className="lfd-shell" style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'var(--font-sans)' }}>
      <Sidebar currentView={view} onNavigate={handleNavigate} />
      <main className="lfd-main" style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {view === 'dashboard'    && <Dashboard onNavigate={handleNavigate} onSelectCase={handleSelectCase} />}
        {view === 'cases'        && <CaseList onSelectCase={handleSelectCase} />}
        {view === 'case-detail'  && <CaseDetail caseId={selectedCase || 'LFD-2024-0091'} onBack={handleBack} />}
        {view === 'agenda'       && <Agenda onNavigate={handleNavigate} />}
        {view === 'jurisprudencia' && <Jurisprudencia />}
        {placeholders[view]      && <PlaceholderView {...placeholders[view]} />}
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
