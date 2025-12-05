import React from 'react';

const options = [
  { key: 'warm', label: 'Warm-blooded animal (Dog / Cat / Monkey / Mongoose / Jackal)', icon: '🐕' },
  { key: 'wild', label: 'Wild animal', icon: '🦁' },
  { key: 'wildrodent', label: 'Wild rodent or rodent in forest', icon: '🐀' },
  { key: 'secretions', label: 'Exposure to secretions of a rabies patient', icon: '🧪' },
  { key: 'domesticrodent', label: 'Domestic rodent / squirrel / hare / rabbit / bat / snake / lizards / chameleon / horse / cow / buffalo / sheep / goat / human — No PEP required', icon: '🐰' },
  { key: 'other', label: 'Any other animal — consult literature', icon: '❓' }
];

export default function AnimalExposure({ animal, setAnimal, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>🐾</div>
        <h3>Select the animal species to which the patient was exposed:</h3>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-muted)', 
          marginTop: '8px',
          fontWeight: '500'
        }}>Choose the most appropriate category based on the exposure incident</p>
      </div>
      <div className="options">
        {options.map(o => (
          <button
            key={o.key}
            className={`option ${animal === o.key ? 'selected' : ''}`}
            onClick={() => setAnimal(o.key)}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ fontSize: '24px' }}>{o.icon}</span>
            <span>{o.label}</span>
          </button>
        ))}
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!animal}>
          {animal ? 'Next →' : 'Please select an option'}
        </button>
      </div>
    </div>
  );
}
