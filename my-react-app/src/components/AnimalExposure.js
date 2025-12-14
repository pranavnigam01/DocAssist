import React from 'react';

const options = [
  { key: 'warm', label: 'Dog/Cat/Monkey/Mongoose', icon: '🐕' },
  { key: 'wildrodent', label: 'Wild animal/wild rodent or rodent in forest', icon: '🦁' },
  { key: 'domesticrodent', label: 'Domestic rodent/squirrel/hare/rabbit/bat/snake/lizards/chameleon/horse/cow/buffalo/sheep/goat/human/birds', icon: '🐰' }
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
          fontSize: '16px', 
          color: '#2b5dc8ff', 
          marginTop: '8px',
          fontWeight: '600'
        }}>Choose the most appropriate category based on the exposure incide  nt</p>
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
