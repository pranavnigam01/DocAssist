import React from 'react';

export default function CategoryIIResult({ type, exposureType, onBack, onReset }) {
  const results = {
    immunoYes: {
      title: 'ADMINISTER FULL COURSE OF INTRAMUSCULAR RABIES VACCINE (AVOID INTRADERMAL ROUTE) WITH RIG AND WOUND MANAGEMENT',
      icon: '💉',
      color: '#ef4444',
      details: 'Patient on immunosuppressives/chemo/HIV: Administer full course of intramuscular rabies vaccine. Avoid intradermal route. Administer RIG along with vaccine. Perform wound management.',
      bgColor: 'rgba(239, 68, 68, 0.05)'
    },
    noVaccineNeeded: {
      title: 'NO NEED OF RABIES VACCINE AND RIG',
      icon: '✅',
      color: '#10b981',
      details: 'The patient has completed a reliable schedule of Rabies Cell Culture Vaccine within the last 3 months. No need of rabies vaccine or RIG. Perform wound management.',
      bgColor: 'rgba(16, 185, 129, 0.05)'
    },
    day0and3: {
      title: 'ADMINISTER INTRADERMAL OR INTRAMUSCULAR RABIES VACCINE ON DAY 0 AND DAY 3',
      icon: '💉',
      color: '#f59e0b',
      details: 'Administer intradermal or intramuscular Rabies Vaccine on Day 0 and Day 3. Wound Management to be done. No need of RIG.',
      bgColor: 'rgba(245, 158, 11, 0.05)'
    },
    fullSchedule: {
      title: 'ADMINISTER FULL SCHEDULE OF INTRAMUSCULAR OR INTRADERMAL RABIES VACCINE',
      icon: '💉',
      color: '#f59e0b',
      details: 'Administer full schedule of intramuscular or intradermal Rabies Vaccine and do Wound Management. No need of RIG.',
      bgColor: 'rgba(245, 158, 11, 0.05)'
    },
    cat3WithRIG: {
      title: 'ADMINISTER FULL SCHEDULE OF INTRAMUSCULAR OR INTRADERMAL RABIES VACCINE WITH RIG',
      icon: '💉',
      color: '#ef4444',
      details: 'Administer full schedule of intramuscular or intradermal Rabies Vaccine along with RIG. Perform Wound Management.',
      bgColor: 'rgba(239, 68, 68, 0.05)'
    }
  };

  const result = results[type] || results.fullSchedule;

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '72px', 
          marginBottom: '24px',
          filter: `drop-shadow(0 4px 12px ${result.color}40)`
        }}>{result.icon}</div>
        <h3 style={{ 
          color: result.color,
          fontSize: '28px',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          lineHeight: '1.3'
        }}>{result.title}</h3>
      </div>

      <div className="result-card" style={{ 
        borderColor: result.color,
        background: `linear-gradient(135deg, ${result.bgColor} 0%, rgba(255, 255, 255, 0.95) 100%)`
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: `2px solid ${result.color}`
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${result.color} 0%, ${result.color}dd 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            boxShadow: `0 4px 12px ${result.color}40`
          }}>
            {result.icon}
          </div>
          <div>
            <h4 style={{ color: result.color, margin: 0, fontSize: '22px', lineHeight: '1.3' }}>
              Clinical Recommendation
            </h4>
            <p style={{ 
              margin: '4px 0 0', 
              color: 'var(--text-light)', 
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {exposureType === 'cat3' ? 'Category III Exposure' : 'Category II Exposure'}
            </p>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          marginBottom: '24px'
        }}>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.8', 
            color: 'var(--text)',
            margin: 0,
            fontWeight: '500'
          }}>
            {result.details}
          </p>
        </div>

        <div className="row actions" style={{ marginTop: '32px' }}>
          <button className="btn ghost" onClick={onBack}>
            ← Back
          </button>
          <button 
            className="btn" 
            onClick={onReset}
            style={{ 
              background: `linear-gradient(135deg, ${result.color} 0%, ${result.color}dd 100%)`,
              boxShadow: `0 4px 14px ${result.color}40`
            }}
          >
            🔄 Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

