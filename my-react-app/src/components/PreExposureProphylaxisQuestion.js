import React from 'react';

export default function PreExposureProphylaxisQuestion({ preExposureProphylaxis, setPreExposureProphylaxis, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>🛡️</div>
        <h3>PRE-EXPOSURE PROPHYLAXIS HISTORY</h3>
        <p style={{ 
          fontSize: '16px', 
          color: '#2563eb', 
          marginTop: '8px',
          fontWeight: '600'
        }}>Please provide information about pre-exposure prophylaxis history</p>
      </div>

      <div className="form-block">
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
          <span style={{ marginTop: '4px' }}>🛡️</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '16px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
              Does the patient have history of receiving Pre-exposure Prophylaxis AND having a neutralizing antibody titre > 0.5 IU/mL?
            </span>
          </div>
        </label>
        <div className="inline-options">
          <button className={`small ${preExposureProphylaxis === 'yes' ? 'selected' : ''}`} onClick={() => setPreExposureProphylaxis('yes')}>Yes</button>
          <button className={`small ${preExposureProphylaxis === 'no' ? 'selected' : ''}`} onClick={() => setPreExposureProphylaxis('no')}>No</button>
        </div>
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!preExposureProphylaxis}>
          {preExposureProphylaxis ? 'Next →' : 'Please select an option'}
        </button>
      </div>
    </div>
  );
}


