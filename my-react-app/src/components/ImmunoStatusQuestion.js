import React from 'react';

export default function ImmunoStatusQuestion({ immunoStatus, setImmunoStatus, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>🩸</div>
        <h3>Clinical Assessment</h3>
        <p style={{ 
          fontSize: '14px', 
          color: '#2b5dc8ff',
          marginTop: '8px',
          fontWeight: '600'
        }}>Please provide the following clinical information</p>
      </div>

      <div className="form-block">
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span>🩸</span>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Is the patient on corticosteroids / immunosuppressives / chemotherapy / has HIV/AIDS?</span>
        </label>
        <div className="inline-options">
          <button className={`small ${immunoStatus === 'yes' ? 'selected' : ''}`} onClick={() => setImmunoStatus('yes')}>Yes</button>
          <button className={`small ${immunoStatus === 'no' ? 'selected' : ''}`} onClick={() => setImmunoStatus('no')}>No</button>
        </div>
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!immunoStatus}>
          {immunoStatus ? 'Next →' : 'Please select an option'}
        </button>
      </div>
    </div>
  );
}

