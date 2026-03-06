import { useState } from 'react';
import '../../styles/Gantt.css';

// ─── DATA ────────────────────────────────────────────────────────
const WEEKS = 12;

const WEEK_LABELS = [
  'S1 Mar', 'S2 Mar', 'S3 Mar', 'S4 Mar',
  'S1 Abr', 'S2 Abr', 'S3 Abr', 'S4 Abr',
  'S1 Mai', 'S2 Mai', 'S3 Mai', 'S4 Mai',
];

const COLOR = {
  red:    'var(--red)',
  cyan:   'var(--cyan)',
  green:  'var(--green)',
  pink:   'var(--pink)',
  yellow: 'var(--yellow)',
};

const PHASES = [
  {
    id: 1,
    name: 'Compra de componentes',
    colorVar: COLOR.red,
    colorHex: { dark: '#e63946', light: '#c0392b' },
    bar: { start: 0, end: 1 },
    tasks: [
      { text: 'Adafruit Feather nRF52840 (2x)',        note: 'Mouser/Farnell ~50€' },
      { text: 'Sensores MAX30102 e MLX90614',            note: 'I2C — batimentos + temperatura' },
      { text: 'LEDs APA102 (fita 5-10 LEDs)',           note: '~5€, testar visual imediatamente' },
      { text: 'LiPo 200mAh + TP4056 (carregamento USB-C)', note: 'Bateria + gestão de carga' },
    ],
    milestone: null,
  },
  {
    id: 2,
    name: 'Setup dev environment',
    colorVar: COLOR.cyan,
    colorHex: { dark: '#4cc9f0', light: '#0077b6' },
    bar: { start: 0.5, end: 2 },
    tasks: [
      { text: 'Instalar Arduino IDE + board nRF52840', note: 'Adafruit BSP' },
      { text: 'Testar hello world + blink LED',        note: 'Validar que o devkit funciona' },
      { text: 'Instalar bibliotecas: Adafruit_DotStar, ArduinoBLE', note: '' },
    ],
    milestone: null,
  },
  {
    id: 3,
    name: 'Firmware — Sensores',
    colorVar: COLOR.red,
    colorHex: { dark: '#e63946', light: '#c0392b' },
    bar: { start: 1, end: 4 },
    tasks: [
      { text: 'Ler batimentos cardíacos (MAX30102)', note: 'I2C, biblioteca SparkFun' },
      { text: 'Ler temperatura corporal (MLX90614)', note: 'Validar threshold de alerta' },
      { text: 'Lógica de deteção de anomalia',       note: 'HR < 40 ou > 180 → trigger SOS' },
      { text: 'Serial monitor para debug',           note: 'Ver dados em tempo real' },
    ],
    milestone: { week: 4, label: 'Sensores OK' },
  },
  {
    id: 4,
    name: 'Firmware — LEDs',
    colorVar: COLOR.cyan,
    colorHex: { dark: '#4cc9f0', light: '#0077b6' },
    bar: { start: 2, end: 5 },
    tasks: [
      { text: 'Controlo básico APA102 via SPI',          note: 'Cor, brilho, animação' },
      { text: 'Modo espetáculo — receber cor via BLE',   note: 'Simular sync do show' },
      { text: 'Modo SOS — vermelho pulsante',            note: 'Distinguível do modo normal' },
      { text: 'Gestão de brilho vs bateria',             note: 'Não queimar bateria com LEDs a 100%' },
    ],
    milestone: null,
  },
  {
    id: 5,
    name: 'BLE Mesh — Comunicação',
    colorVar: COLOR.cyan,
    colorHex: { dark: '#4cc9f0', light: '#0077b6' },
    bar: { start: 3, end: 7 },
    tasks: [
      { text: 'BLE advertising entre 2 devkits',  note: 'Validar alcance e latência' },
      { text: 'Propagação SOS (relay message)',    note: 'Devkit A → B → C em cascata' },
      { text: 'Identificador único por pulseira', note: 'Para rastrear rastro vermelho' },
      { text: 'Testar com 5 devkits se possível', note: 'Simular density de festival' },
    ],
    milestone: { week: 7, label: 'BLE Mesh funcional' },
  },
  {
    id: 6,
    name: 'App Mobile (básica)',
    colorVar: COLOR.green,
    colorHex: { dark: '#06d6a0', light: '#2a9d8f' },
    bar: { start: 4, end: 8 },
    tasks: [
      { text: 'App React Native ou Flutter',              note: 'Ou mesmo uma web app BLE' },
      { text: 'Botão SOS manual na app',                  note: 'Trigger via telemóvel' },
      { text: 'Receber alertas da pulseira',              note: 'Notificação quando SOS recebido' },
      { text: 'Mapa simples do festival com marcadores',  note: 'Posição aproximada via beacons' },
    ],
    milestone: null,
  },
  {
    id: 7,
    name: 'Integração + Demo',
    colorVar: COLOR.pink,
    colorHex: { dark: '#f72585', light: '#c2185b' },
    bar: { start: 7, end: 10 },
    tasks: [
      { text: 'Integrar sensores + BLE + LEDs num fluxo', note: 'Anomalia → SOS → propagação → app' },
      { text: 'Demo end-to-end funcional',                note: 'Cenário: pessoa passa mal → equipa médica vê rastro' },
      { text: 'Encapsular devkit numa pulseira física',   note: 'Velcro ou impressão 3D simples' },
      { text: 'Gravar vídeo demo',                        note: 'Para apresentar a parceiros sem precisar de estar presente' },
    ],
    milestone: { week: 10, label: 'Demo pronto' },
  },
  {
    id: 8,
    name: 'Pitch a parceiros',
    colorVar: COLOR.yellow,
    colorHex: { dark: '#ffd166', light: '#e07b00' },
    bar: { start: 9, end: 12 },
    tasks: [
      { text: 'Deck de apresentação (1-pager + slides)',  note: 'Problema, solução, tech stack, próximos passos' },
      { text: 'Contactar Farnell / RS Components',        note: 'Parceria em componentes' },
      { text: 'Contactar IST / FEUP',                     note: 'Parceria académica' },
      { text: 'Contactar organização NOS Alive',          note: 'Parceiro piloto ideal' },
    ],
    milestone: { week: 12, label: 'Maio' },
  },
];

const LEGEND_ITEMS = [
  { label: 'Hardware / PCB',    colorVar: COLOR.red   },
  { label: 'Firmware / BLE',   colorVar: COLOR.cyan  },
  { label: 'App / Backend',    colorVar: COLOR.green },
  { label: 'Integração',       colorVar: COLOR.pink  },
  { label: 'Milestone',        colorVar: COLOR.yellow, diamond: true },
];

const CARD_DATA = [
  { num: '12',  label: 'Semanas de trabalho', colorVar: COLOR.cyan   },
  { num: '4',   label: 'Milestones chave',    colorVar: COLOR.yellow },
  { num: '3',   label: 'Camadas de produto',  colorVar: COLOR.green  },
  { num: 'Mai', label: 'Target para pitch',   colorVar: COLOR.pink   },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────

function GanttBar({ phase, theme }) {
  const hex = phase.colorHex[theme];
  const [hovered, setHovered] = useState(false);
  const barLeft  = (phase.bar.start / WEEKS) * 100;
  const barWidth = ((phase.bar.end - phase.bar.start) / WEEKS) * 100;

  return (
    <div
      className="gantt-bar"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        left:        `calc(${barLeft}% + 2px)`,
        width:       `calc(${barWidth}% - 4px)`,
        border:      `1px solid ${hex}`,
        color:       hex,
        background:  hovered ? `${hex}44` : `${hex}22`,
      }}
    />
  );
}

function Milestone({ milestone, theme, phase }) {
  const hex = phase.colorHex[theme];
  const isTarget = milestone.label === 'BLE Mesh funcional';

  return (
    <div
      className="milestone-wrap"
      style={{ left: `${(milestone.week / WEEKS) * 100}%` }}
    >
      <div className="milestone-label" style={{ color: hex }}>
        {milestone.label}
      </div>
      <div
        className={`milestone-diamond ${isTarget ? 'diamond-flash-active' : ''}`}
        style={{
          borderColor: hex,
          color: hex, // O CSS vai usar este 'color' para saber que cor pintar o fundo!
        }}
      />
    </div>
  );
}

function PhaseRow({ phase, theme, index }) {
  const [open, setOpen] = useState(false);
  const hex = phase.colorHex[theme];
  const gridStyle = { gridTemplateColumns: `repeat(${WEEKS}, 1fr)` };

  return (
    <div className="phase" style={{ animationDelay: `${0.05 + index * 0.05}s` }}>
      <div className="phase-header" onClick={() => setOpen(o => !o)}>
        <span className="phase-num">0{phase.id}</span>
        <span className="phase-name">{phase.name}</span>

        <div className="gantt-grid-wrap" style={gridStyle}>
          {Array.from({ length: WEEKS }).map((_, w) => (
            <div key={w} className="grid-cell" />
          ))}
          <GanttBar phase={phase} theme={theme} />
          {phase.milestone && (
            <Milestone milestone={phase.milestone} theme={theme} phase={phase} />
          )}
        </div>
        <span className={`chevron ${open ? 'open' : ''}`}>▶</span>
      </div>

      <div
        className={`tasks-panel ${open ? 'open' : 'closed'}`}
        style={{ borderLeft: `2px solid ${hex}44` }}
      >
        {phase.tasks.map((task, i) => (
          <div key={i} className="task-item">
            <div className="task-dot" style={{ background: hex }} />
            <div className="task-text">
              <strong>{task.text}</strong>
              {task.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────

// AQUI: Retiramos o state local e passamos a usar o isDarkMode do site!
export default function Gantt({ isDarkMode }) {
  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <div className="gantt-root" data-theme={theme}>
      
      <header className="gantt-header">
        <div className="gantt-tag">// Projeto — Pulseira Festival</div>
        
        {/* Nova estrutura em linha para o Título + Botão */}
        <div className="title-row">
          <h1 className="gantt-title">
            Roadmap <span>Março → Maio</span>
          </h1> 
        </div>

        <p className="gantt-subtitle">
          Protótipo para apresentação a parceiros · 12 semanas
        </p>
      </header>

      <div className="gantt-legend">
        {LEGEND_ITEMS.map((item, i) => (
          <div key={i} className="legend-item">
            {item.diamond ? (
              <div
                className="legend-dot"
                style={{
                  background: 'transparent',
                  border: `2px solid ${item.colorVar}`,
                  borderRadius: '2px',
                  transform: 'rotate(45deg)',
                  width: 9, height: 9,
                }}
              />
            ) : (
              <div className="legend-dot" style={{ background: item.colorVar }} />
            )}
            {item.label}
          </div>
        ))}
      </div>

      <div className="section-title">// Gantt por semanas (Mar — Mai 2025)</div>

      <div className="week-headers-row">
        {WEEK_LABELS.map((label, i) => (
          <div key={i} className={`week-label ${i === 0 ? 'current' : ''}`}>
            {label}
          </div>
        ))}
      </div>

      <div id="gantt-container">
        {PHASES.map((phase, i) => (
          <PhaseRow key={phase.id} phase={phase} theme={theme} index={i} />
        ))}
      </div>

      <div className="gantt-divider" />

      <div className="cards-grid">
        {CARD_DATA.map((c, i) => (
          <div key={i} className="summary-card">
            <div className="card-num" style={{ color: c.colorVar }}>{c.num}</div>
            <div className="card-label">{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
