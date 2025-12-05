import React from 'react';

const options = [
  { key: 'yes_protective', label: 'Yes — Protective titres available (No vaccine required)', icon: '✅' },
  { key: 'yes_notitle', label: 'Yes — Vaccinated but titres NOT available', icon: '⚠️' },
  { key: 'no', label: 'No', icon: '❌' },
  { key: 'dontknow', label: "Don't Know", icon: '❓' }
];

export default function VaccinationStatus({ vaxStatus, setVaxStatus, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>💉</div>
        <h3>What is the vaccination status of the biting animal?</h3>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-muted)', 
          marginTop: '8px',
          fontWeight: '500'
        }}>Select the most accurate option based on available information</p>
      </div>
      <div className="options">
        {options.map(o => (
          <button
            key={o.key}
            className={`option ${vaxStatus === o.key ? 'selected' : ''}`}
            onClick={() => setVaxStatus(o.key)}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ fontSize: '24px' }}>{o.icon}</span>
            <span>{o.label}</span>
          </button>
        ))}
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!vaxStatus}>
          {vaxStatus ? 'Next →' : 'Please select an option'}
        </button>
      </div>
    </div>
  );
}
