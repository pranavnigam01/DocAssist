import React from 'react';

export default function PastCCVQuestion({ pastCCV, setPastCCV, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>📋</div>
        <h3>Vaccination History</h3>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-muted)', 
          marginTop: '8px',
          fontWeight: '500'
        }}>Please provide information about past vaccination history</p>
      </div>

      <div className="form-block">
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
          <span style={{ marginTop: '4px' }}>📋</span>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '16px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
              Does the patient have reliable/documented history of completing a schedule of Rabies Cell Culture Vaccine in past (complete schedule means having completed  5 doses of Intramuscular Rabies Vaccine or 4 doses of Intradermal Rabies Vaccine)?
            </span>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', display: 'block', marginTop: '8px' }}>
              (History of receiving any vaccine in abdomen or having received 14 injections should be taken as NO)
            </span>
          </div>
        </label>
        <div className="inline-options">
          <button className={`small ${pastCCV === 'yes' ? 'selected' : ''}`} onClick={() => setPastCCV('yes')}>Yes</button>
          <button className={`small ${pastCCV === 'no' ? 'selected' : ''}`} onClick={() => setPastCCV('no')}>No</button>
        </div>
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!pastCCV}>
          {pastCCV ? 'Next →' : 'Please select an option'}
        </button>
      </div>
    </div>
  );
}

