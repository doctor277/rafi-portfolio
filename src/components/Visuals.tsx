export function SignalPanel() {
  return (
    <div className="signal-panel" role="img" aria-label="LaunchGuard incident signal illustration">
      <div className="panel-head">
        <span>Deployment timeline</span>
        <span className="live-label"><i /> Live</span>
      </div>
      <div className="deployment-track" aria-hidden="true">
        {['build', 'test', 'deploy', 'monitor', 'stable'].map((item, index) => (
          <div className={index === 2 ? "track-step is-active" : "track-step"} key={item}>
            <span>{item}</span><i />
          </div>
        ))}
      </div>
      <div className="signal-chart">
        <div className="chart-label">Incident signal</div>
        <svg viewBox="0 0 620 130" role="img" aria-label="Request errors spike after a deployment">
          <path className="grid-line" d="M0 25H620 M0 65H620 M0 105H620" />
          <path className="base-line" d="M0 82 L35 76 L64 85 L92 73 L120 80 L150 75 L178 87 L206 78 L232 84 L260 74 L292 82 L318 80 L340 83" />
          <path className="alert-line" d="M340 83 L353 33 L365 96 L380 57 L398 80 L420 74 L448 83 L474 77 L502 82 L532 78 L562 84 L590 81 L620 83" />
          <line className="deploy-line" x1="353" y1="10" x2="353" y2="120" />
          <circle className="pulse-dot" cx="353" cy="33" r="5" />
        </svg>
        <div className="signal-note"><b>signal</b><span>Spike detected<br />after deployment</span></div>
      </div>
      <div className="dependency-block">
        <div className="chart-label">Service dependencies</div>
        <svg viewBox="0 0 620 190" role="img" aria-label="Service dependency graph tracing an incident cause">
          <g className="node-labels">
            <text x="12" y="38">web</text><text x="12" y="78">api</text>
            <text x="12" y="118">worker</text><text x="12" y="158">db</text>
          </g>
          <g className="dependency-lines">
            <path d="M95 33 C190 33 205 88 306 88" />
            <path d="M95 73 C195 73 210 108 306 108" />
            <path className="hot-path" d="M95 113 C190 113 210 108 306 108 S420 70 505 70" />
            <path d="M95 153 C190 153 214 128 306 128 S414 116 505 116" />
          </g>
          {[33,73,113,153].map((y) => <circle key={y} cx="95" cy={y} r="5" />)}
          <circle className="hot-node" cx="306" cy="108" r="6" />
          <circle className="hot-node" cx="505" cy="70" r="6" />
          <rect className="cause-box" x="520" y="42" width="94" height="55" />
          <text className="cause-text" x="535" y="66">cause</text>
          <text className="cause-sub" x="535" y="84">latency</text>
        </svg>
      </div>
      <div className="panel-foot">
        <span>Region <b>Montréal, QC</b></span>
        <span>Languages <b>Java / TypeScript / Python</b></span>
        <span>[ 01 ]</span>
      </div>
    </div>
  );
}

export function LaunchGuardVisual() {
  return (
    <div className="project-interface launchguard-ui" aria-hidden="true">
      <div className="interface-nav"><b><i /> LaunchGuard</b><span>Incidents</span><span>Deployments</span><span>Services</span><em>● All systems operational</em></div>
      <div className="interface-body">
        <div className="incident-list">
          <h4>Incidents</h4><p>Track incidents in the context of deployments.</p>
          {["Investigating", "Identified", "Monitoring", "Resolved"].map((label, index) => (
            <div className={index === 0 ? "incident-row hot" : "incident-row"} key={label}>
              <i /><b>{label}</b><span>{["14:03", "13:47", "13:28", "12:11"][index]}</span><p>{["Elevated error rate on auth service", "Traced to dependency latency", "Mitigation deployed", "Incident closed"][index]}</p>
            </div>
          ))}
        </div>
        <div className="metric-stack">
          {['Error rate', 'Latency (p95)', 'Requests', 'CPU usage'].map((label, index) => (
            <div className="metric-line" key={label}><span>{label}</span><i className={`bars bars-${index}`} /></div>
          ))}
          <div className="metric-deploy" />
        </div>
      </div>
    </div>
  );
}

export function PotholeVisual() {
  const pins = [[14,31],[31,55],[52,38],[66,68],[78,29],[85,61]];
  return (
    <div className="project-interface map-ui" aria-hidden="true">
      <div className="map-grid" />
      <span className="map-city">Montréal</span>
      {pins.map(([x,y], index) => <i key={index} className="map-pin" style={{left:`${x}%`,top:`${y}%`}} />)}
      <div className="map-pulse"><i /></div>
      <div className="report-card"><span>Report</span><b>MTL-2847</b><small>Rue Saint-Denis<br />Montréal, QC</small><em>Nearby match found</em></div>
    </div>
  );
}

export function ResearchVisual() {
  return (
    <div className="project-interface research-ui">
      <div className="research-head"><span>Backtest results</span><span>Walk-forward validation</span></div>
      <svg viewBox="0 0 850 260" role="img" aria-label="Backtest strategy and benchmark lines">
        <path className="chart-grid" d="M20 45H830 M20 95H830 M20 145H830 M20 195H830" />
        <path className="benchmark-line" d="M20 210 C110 202 145 180 215 187 S335 162 410 170 S518 134 590 142 S720 116 830 122" />
        <path className="strategy-line" d="M20 210 C100 195 148 202 215 171 S330 145 410 151 S525 104 590 117 S710 58 830 51" />
        <line className="walk-line" x1="620" y1="25" x2="620" y2="225" />
      </svg>
      <div className="research-axis"><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span></div>
    </div>
  );
}

export function MaVilleVisual() {
  const rows = [
    ["MTL-9321", "Nid-de-poule", "Av. du Parc", "En cours"],
    ["MTL-9317", "Éclairage", "Rue Beaubien", "Planifiée"],
    ["MTL-9304", "Collecte", "Rue Saint-Zotique", "Complétée"],
    ["MTL-9288", "Signalisation", "Boul. Rosemont", "En cours"],
  ];
  return (
    <div className="project-interface maville-ui">
      <div className="mv-head"><b>MaVille</b><span>Demandes</span><span>Carte</span><span>Équipes</span></div>
      <div className="mv-row mv-label"><span>#</span><span>Type</span><span>Lieu</span><span>Statut</span></div>
      {rows.map((row) => <div className="mv-row" key={row[0]}>{row.map((cell,index) => <span key={cell} className={index === 3 ? "status" : ""}>{cell}</span>)}</div>)}
    </div>
  );
}
