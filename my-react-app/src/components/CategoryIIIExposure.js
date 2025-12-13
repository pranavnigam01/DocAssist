import React from 'react';

export default function CategoryIIIExposure({ onNext, onBack, setExposureType }) {
  const handleContinue = () => {
    if (setExposureType) {
      setExposureType('cat3');
    }
    onNext();
  };
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>⚠️</div>
        <h3 style={{ 
          fontSize: '24px', 
          fontWeight: '700', 
          color: 'var(--text)',
          marginBottom: '20px'
        }}>
          It is a Category III exposure
        </h3>
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={handleContinue}>
          Click to Continue
        </button>
      </div>
    </div>
  );
}

