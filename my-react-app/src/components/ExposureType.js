import React from 'react';

const exposureOptions = [
  { 
    key: 'cat1', 
    label: 'Category I', 
    icon: '🟢', 
    severity: 'Low',
    description: [
      'Touching or feeding animals',
      'Licks of intact skin',
      'Contact of intact skin with secretions/excretions of rabid animal or human case'
    ]
  },
  { 
    key: 'cat2', 
    label: 'Category II', 
    icon: '🟡', 
    severity: 'Medium',
    description: [
      'Nibbling of uncovered skin',
      'Minor scratches',
      'Abrasions without bleeding'
    ]
  },
  { 
    key: 'cat3', 
    label: 'Category III', 
    icon: '🔴', 
    severity: 'High',
    description: [
      'Single or Multiple Transdermal bites or scratches',
      'Licks on broken skin',
      'Contamination of mucous membrane with saliva from licks'
    ]
  }
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
          fontSize: '16px', 
          color: '#2563eb', 
          marginTop: '8px',
          fontWeight: '600'
        }}>Classify the exposure</p>
      </div>

      <div className="options">
        {exposureOptions.map(o => (
          <button 
            key={o.key} 
            className={`option ${exposureType === o.key ? 'selected' : ''}`} 
            onClick={() => setExposureType(o.key)}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px 24px' }}
          >
            <span style={{ fontSize: '24px', marginTop: '2px' }}>{o.icon}</span>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div style={{ fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>
                {o.label} ({o.severity} Risk)
              </div>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '20px', 
                listStyle: 'disc',
                fontSize: '14px',
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                {o.description.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{item}</li>
                ))}
              </ul>
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
