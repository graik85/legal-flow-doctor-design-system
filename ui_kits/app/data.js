// Legal Flow Doctor — Mock Data
// Sets window.LFDData for the UI kit prototype

window.LFDData = {
  user: {
    name: 'Sarah Chen',
    role: 'Senior Attorney',
    initials: 'SC',
    firm: 'Chen & Associates'
  },

  stats: {
    totalCases: 247,
    activeCases: 184,
    urgentCases: 7,
    hearingsThisMonth: 23,
    pendingSignatures: 14,
    newThisWeek: 6
  },

  cases: [
    { id: 'LFD-2024-0091', title: 'García S.A. v. Municipalidad de Buenos Aires', type: 'Commercial', court: 'Juzgado Comercial N° 12', status: 'active', assigned: 'Sarah Chen', client: 'García S.A.', amount: '$4,200,000', lastUpdate: '2h ago', filed: '2024-01-15', jurisdiction: 'CABA' },
    { id: 'LFD-2024-0087', title: 'Torres c/ Empresa Logística del Sur', type: 'Labor', court: 'Tribunal del Trabajo N° 5', status: 'urgent', assigned: 'Miguel Torres', client: 'Carlos Torres', amount: '$890,000', lastUpdate: '4h ago', filed: '2024-01-08', jurisdiction: 'GBA' },
    { id: 'LFD-2024-0082', title: 'Martínez v. Banco Nacional', type: 'Civil', court: 'Juzgado Civil N° 7', status: 'review', assigned: 'Ana Martínez', client: 'Lucía Martínez', amount: '$1,500,000', lastUpdate: '1d ago', filed: '2023-12-20', jurisdiction: 'CABA' },
    { id: 'LFD-2024-0079', title: 'Importadora Pampas v. Distribuidora Norte', type: 'Commercial', court: 'Cámara Comercial Sala D', status: 'pending', assigned: 'Roberto Pérez', client: 'Importadora Pampas', amount: '$8,750,000', lastUpdate: '2d ago', filed: '2023-11-30', jurisdiction: 'Federal' },
    { id: 'LFD-2024-0075', title: 'Rodríguez c/ Constructora Delta', type: 'Civil', court: 'Juzgado Civil N° 3', status: 'active', assigned: 'Sarah Chen', client: 'Familia Rodríguez', amount: '$2,100,000', lastUpdate: '3d ago', filed: '2023-11-14', jurisdiction: 'CABA' },
    { id: 'LFD-2024-0070', title: 'Farmacéutica Austral c/ ANMAT', type: 'Administrative', court: 'Cámara Federal Contencioso-Administrativo', status: 'active', assigned: 'Miguel Torres', client: 'Farmacéutica Austral', amount: '$12,000,000', lastUpdate: '5d ago', filed: '2023-10-22', jurisdiction: 'Federal' },
    { id: 'LFD-2024-0068', title: 'Pérez Estudio c/ AFIP resolución 4521', type: 'Tax', court: 'Tribunal Fiscal de la Nación', status: 'review', assigned: 'Ana Martínez', client: 'Pérez Estudio Contable', amount: '$580,000', lastUpdate: '1w ago', filed: '2023-10-10', jurisdiction: 'Federal' },
    { id: 'LFD-2024-0061', title: 'Sucesión Fernández — Acuerdo extrajudicial', type: 'Family', court: 'Juzgado Civil N° 15', status: 'settled', assigned: 'Roberto Pérez', client: 'Familia Fernández', amount: '$3,400,000', lastUpdate: '1w ago', filed: '2023-09-01', jurisdiction: 'CABA' },
    { id: 'LFD-2024-0055', title: 'Cervecería Patagonia v. Importadora Belgrano', type: 'Commercial', court: 'Juzgado Comercial N° 8', status: 'closed', assigned: 'Sarah Chen', client: 'Cervecería Patagonia', amount: '$990,000', lastUpdate: '2w ago', filed: '2023-07-12', jurisdiction: 'CABA' },
    { id: 'LFD-2024-0049', title: 'Vidal c/ Aerolíneas por incumplimiento', type: 'Civil', court: 'Juzgado Civil N° 9', status: 'urgent', assigned: 'Sarah Chen', client: 'Horacio Vidal', amount: '$240,000', lastUpdate: '30m ago', filed: '2024-02-01', jurisdiction: 'Federal' }
  ],

  todayEvents: [
    { time: '09:30', title: 'Audiencia — García S.A. v. Municipalidad', court: 'Juzgado Comercial N° 12', caseId: 'LFD-2024-0091', type: 'hearing' },
    { time: '11:00', title: 'Vencimiento presentación — Torres c/ Logística del Sur', court: 'Tribunal del Trabajo N° 5', caseId: 'LFD-2024-0087', type: 'deadline' },
    { time: '14:00', title: 'Reunión con cliente — Familia Fernández', court: null, caseId: 'LFD-2024-0061', type: 'meeting' },
    { time: '16:30', title: 'Respuesta pericial — Martínez v. Banco Nacional', court: 'Juzgado Civil N° 7', caseId: 'LFD-2024-0082', type: 'deadline' }
  ],

  upcomingEvents: [
    { date: 'Mañana', title: 'Escrito de apelación — Pampas v. Distribuidora', caseId: 'LFD-2024-0079', type: 'deadline', priority: 'high' },
    { date: '22 jun', title: 'Audiencia preliminar — Farmacéutica Austral', caseId: 'LFD-2024-0070', type: 'hearing', priority: 'normal' },
    { date: '24 jun', title: 'Declaración pericial — Rodríguez c/ Delta', caseId: 'LFD-2024-0075', type: 'hearing', priority: 'normal' },
    { date: '26 jun', title: 'Vencimiento respuesta AFIP — Pérez Estudio', caseId: 'LFD-2024-0068', type: 'deadline', priority: 'high' }
  ],

  caseHistory: [
    { date: '2024-06-19', time: '14:23', user: 'Sarah Chen', action: 'Documento cargado', detail: 'Contestación de demanda — FINAL.pdf (324 KB)' },
    { date: '2024-06-18', time: '09:15', user: 'Sistema', action: 'Estado actualizado', detail: 'Activo → En revisión (escalación automática)' },
    { date: '2024-06-15', time: '11:40', user: 'Miguel Torres', action: 'Nota agregada', detail: 'Conversación con abogado contrario; acuerdo improbable antes del tercer trimestre.' },
    { date: '2024-06-12', time: '16:00', user: 'Ana Martínez', action: 'Audiencia registrada', detail: 'Audiencia preliminar — asistida. Próxima fecha: 3 de julio.' },
    { date: '2024-06-10', time: '10:22', user: 'Sarah Chen', action: 'Documento cargado', detail: 'Prueba documental — Lote 1 (12 archivos)' },
    { date: '2024-06-05', time: '08:30', user: 'Sistema', action: 'Recordatorio enviado', detail: 'Aviso 72hs — audiencia del 8 de junio enviado a Sarah Chen' },
    { date: '2024-01-15', time: '09:00', user: 'Roberto Pérez', action: 'Causa iniciada', detail: 'LFD-2024-0091 creada. Ingreso de cliente García S.A.' }
  ],

  caseDocuments: [
    { name: 'Contestación de demanda — FINAL.pdf', size: '324 KB', date: '2024-06-19', user: 'Sarah Chen', type: 'pdf' },
    { name: 'Prueba documental — Batch 1.zip', size: '14.2 MB', date: '2024-06-10', user: 'Sarah Chen', type: 'zip' },
    { name: 'Escrito inicial — Demanda.pdf', size: '89 KB', date: '2024-01-15', user: 'Roberto Pérez', type: 'pdf' },
    { name: 'Poder notarial — García S.A..pdf', size: '45 KB', date: '2024-01-15', user: 'Roberto Pérez', type: 'pdf' },
    { name: 'Convenio de honorarios.docx', size: '28 KB', date: '2024-01-15', user: 'Roberto Pérez', type: 'doc' }
  ],

  parties: [
    { role: 'Plaintiff', name: 'García Inversiones S.A.', type: 'Corporation', cuit: '30-71234567-8', attorney: 'Sarah Chen', contact: 'Dr. Pablo García (CEO)' },
    { role: 'Defendant', name: 'Municipalidad de Buenos Aires', type: 'Government', cuit: '34-99902018-4', attorney: 'Dr. Ramón Suárez (PD Office)', contact: 'Procuración General' },
    { role: 'Expert Witness', name: 'Ing. Marcelo Domínguez', type: 'Individual', cuit: '20-14523789-1', attorney: null, contact: 'mdominguez@peritos.ar' }
  ]
};
