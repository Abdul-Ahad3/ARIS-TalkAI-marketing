export function DeviceConcept() {
  return (
    <span>
        <svg className="device" viewBox="0 0 300 470" role="img" aria-label="Embedded Edition device concept">
          <defs>
            <linearGradient id="body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16303A"/><stop offset="1" stopColor="#0A1418"/>
            </linearGradient>
            <pattern id="grille" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="7.5" cy="7.5" r="2.1" fill="#20414B"/>
            </pattern>
          </defs>
          <rect x="46" y="10" width="208" height="450" rx="42" fill="url(#body)" stroke="#274A54" strokeWidth="1.5"/>
          <rect x="58" y="22" width="184" height="426" rx="34" fill="none" stroke="#12252C" strokeWidth="1"/>
          
          <rect x="78" y="52" width="144" height="92" rx="16" fill="#0B1A1F" stroke="#1E3C45" strokeWidth="1"/>
          <text x="150" y="92" text-anchor="middle" fill="#E9F3F3" font-family="Geist, sans-serif" fontSize="26" fontWeight="600">EN&#8652;FR</text>
          <text x="150" y="120" text-anchor="middle" fill="#37CBDC" font-family="Geist Mono, monospace" fontSize="10" letterSpacing="2">OFFLINE</text>
          
          <g stroke="#37CBDC" strokeWidth="3" strokeLinecap="round">
            <line x1="108" y1="176" x2="108" y2="192"/><line x1="122" y1="168" x2="122" y2="200"/>
            <line x1="136" y1="160" x2="136" y2="208"/><line x1="150" y1="172" x2="150" y2="196"/>
            <line x1="164" y1="162" x2="164" y2="206"/><line x1="178" y1="170" x2="178" y2="198"/>
            <line x1="192" y1="178" x2="192" y2="190"/>
          </g>
          
          <rect x="86" y="236" width="128" height="120" rx="14" fill="url(#grille)"/>
          
          <circle cx="150" cy="404" r="26" fill="#0E2027" stroke="#37CBDC" stroke-width="2"/>
          <circle cx="150" cy="404" r="8" fill="#37CBDC"/>
          
          <rect x="250" y="150" width="4" height="46" rx="2" fill="#274A54"/>
        </svg>
    </span>
  );
}