import React from 'react';

const exposureOptions = [
  { key: 'cat1', label: 'Category I — Touching/feeding or lick on intact skin', icon: '🟢', severity: 'Low' },
  { key: 'cat2', label: 'Category II — Nibble/minor scratches by teeth without bleeding', icon: '🟡', severity: 'Medium' },
  { key: 'cat3', label: 'Category III — Single/multiple transdermal bites, bleeding, lick on broken skin, mucous membrane exposure, bite by wild animal', icon: '🔴', severity: 'High' }
];

export default function ExposureType({ exposureType, setExposureType, immunoStatus, setImmunoStatus, pastCCV, setPastCCV, completed3Months, setCompleted3Months, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>⚠️</div>
        <h3>Exposure Category & Clinical Assessment</h3>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-muted)', 
          marginTop: '8px',
          fontWeight: '500'
        }}>Classify the exposure</p>
      </div>

      <div className="options">
        {exposureOptions.map(o => (
          <button 
            key={o.key} 
            className={`option ${exposureType === o.key ? 'selected' : ''}`} 
            onClick={() => setExposureType(o.key)}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ fontSize: '24px' }}>{o.icon}</span>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>{o.label.split('—')[0].trim()} ({o.severity} Risk)</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>{o.label.split('—')[1]?.trim()}</div>
            </div>
          </button>
        ))}
      </div>


      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!exposureType}>
          {exposureType ? 'Next →' : 'Please select exposure type'}
        </button>
      </div>
    </div>
  );
}
