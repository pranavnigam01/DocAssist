import React from 'react';

export default function Completed3MonthsQuestion({ completed3Months, setCompleted3Months, onNext, onBack }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>📅</div>
        <h3>Vaccination Timeline</h3>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-muted)', 
          marginTop: '8px',
          fontWeight: '600'
        }}>Please provide information about when the vaccination was completed</p>
      </div>

      <div className="form-block">
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span>📅</span>
          <span style={{ fontSize: '16px', fontWeight: '600' }}>Has this schedule been completed in last 3 months?</span>
        </label>
        <div className="inline-options">
          <button className={`small ${completed3Months === 'yes' ? 'selected' : ''}`} onClick={() => setCompleted3Months('yes')}>Yes</button>
          <button className={`small ${completed3Months === 'no' ? 'selected' : ''}`} onClick={() => setCompleted3Months('no')}>No</button>
        </div>
      </div>

      <div className="row actions">
        <button className="btn ghost" onClick={onBack}>← Back</button>
        <button className="btn" onClick={onNext} disabled={!completed3Months}>
          {completed3Months ? 'Next →' : 'Please select an option'}
        </button>
      </div>
    </div>
  );
}

