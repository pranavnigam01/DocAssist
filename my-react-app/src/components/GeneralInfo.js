import React from 'react';

export default function GeneralInfo({ acknowledged, setAcknowledged, onNext }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ 
          fontSize: '56px', 
          marginBottom: '20px',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
        }}>🩺</div>
        <p style={{ 
          fontSize: '16px', 
          color: 'var(--text-light)', 
          lineHeight: '1.8', 
          maxWidth: '680px', 
          margin: '0 auto',
          fontWeight: '500'
        }}>
          This clinical decision support tool assists healthcare professionals in determining whether Rabies Vaccine and/or RIG are required following an animal exposure.
          The following clinical guidelines are essential and derived from established medical protocols.
        </p>
      </div>

      <div style={{ background: 'var(--bg-alt)', padding: '24px', borderRadius: '16px', marginBottom: '24px' }}>
        <ul className="info-list">
          <li>Pregnancy, lactation, old age, infancy and concurrent illness are NOT contraindications.</li>
          <li>Only Cell Culture Vaccines (CCV) are used. Nerve tissue vaccines not used.</li>
          <li>Patients on chloroquine, immunosuppressives, chemotherapy or with HIV/AIDS should receive IM vaccine only.</li>
          <li>Vaccine should be given immediately after reconstitution or within 6–8 hours if stored at 2–8°C.</li>
          <li>Previous reaction to a vaccine is a contraindication to that vaccine.</li>
          <li>Vaccine can be given even months or years after exposure.</li>
          <li>Skin test before ERIG; not required for HRIG.</li>
          <li>RIG should be administered within 7 days of first vaccine dose.</li>
          <li>Observe patient 15–20 minutes after administration.</li>
          <li>Wound management: wash with soap and water for 15 minutes + antiseptic.</li>
        </ul>
      </div>

      <div className="row" style={{ 
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 1) 100%)', 
        padding: '24px', 
        borderRadius: '16px', 
        border: '2px solid var(--border-light)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <label style={{ 
          display: 'flex', 
          alignItems: 'center', 
          cursor: 'pointer', 
          fontSize: '15px', 
          fontWeight: '600',
          color: 'var(--text)'
        }}>
          <input 
            type="checkbox" 
            checked={acknowledged} 
            onChange={(e) => setAcknowledged(e.target.checked)}
            style={{ 
              width: '22px', 
              height: '22px', 
              marginRight: '14px', 
              cursor: 'pointer',
              accentColor: 'var(--accent)'
            }}
          /> 
          <span>I acknowledge that I have read and understood the clinical guidelines above.</span>
        </label>
      </div>

      <div className="row actions">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn" onClick={onNext} disabled={!acknowledged}>
            {acknowledged ? 'Continue →' : 'Please acknowledge to continue'}
          </button>
        </div>
      </div>
    </div>
  );
}
