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
          This clinical decision support tool has been designed to assist healthcare professionals in determining whether Rabies Vaccine and/or Rabies Immunoglobulin(RIG) are required following an animal exposure when the patient presents for the first time after exposure.
          This support tool is based on the National Guidelines for Rabies Prophylaxis 2019 issued by MOHFW, Govt of India.
        </p>
        
        <div style={{
          maxWidth: '680px',
          margin: '24px auto',
          padding: '16px 20px',
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(255, 193, 7, 0.2)'
        }}>
          <p style={{
            fontSize: '17px',
            fontWeight: '700',
            color: '#856404',
            margin: '0',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            Before proceeding further, the Health Care Professional is required to read the information about PEP provided below:-
          </p>
        </div>
      </div>

      <div style={{ background: 'var(--bg-alt)', padding: '24px', borderRadius: '16px', marginBottom: '24px' }}>
        <ul className="info-list">
          <li><strong>Wound Management</strong> means washing the wound/s with soap and water for 15 minutes and applying Povidone Iodine or alcohol. If soap and antiseptic are not available, wash with water only. If the patient presents late after exposure, wash the wound if its not healed and requires washing. Suturing to be done, if required but only after administration of RIG(if indicated). Tetanus to be administered as per the National Guidelines.</li>
          <li><strong>Rabies Immunoglobulin (RIG) should ONLY be administered INTO THE DEPTH AND AROUND THE WOUND</strong>.</li>
          <li><strong>There is no need to do a skin test prior to administering ERIG and HRIG</strong> as this does not predict anaphylaxis</li>
          <li><strong>RIG should be administered within 7 days of receiving the first dose of Rabies Vaccine</strong></li>
          <li><strong>Rabies Vaccine</strong> can be <strong>administered by Intramuscular or Intradermal Route</strong>. Both routes are <strong>equally effective</strong></li>
          <li><strong>Dosing Schedule for Intramuscular Rabies Vaccine comprises of 5 doses of Rabies Vaccine on Day 0, 3, 7, 14 and 28 days</strong></li>
          <li><strong>Dosing Schedule for Intradermal Rabies Vaccine comprises of 4 doses of Rabies Vaccine on Day 0, 3, 7 and 28 days</strong></li>
          <li><strong>Day 0</strong> means <strong>Day of administering first dose of Rabies Vaccine</strong> and <strong>NOT THE DAY OF BITE/EXPOSURE</strong></li>
          <li><strong>The site of vaccine administration should not be rubbed after administration</strong></li>
          <li><strong>Pregnancy, Lactation, Old age, Infancy and concurrent illness are NOT CONTRAINDICATIONS for administering Rabies Vaccine</strong></li>
          <li><strong>Patient receiving Chloroquine for treatment of malaria OR patients receiving immunosuppressives/chemotherapy OR patients of HIV/AIDS should be given Rabies Vaccine by INTRAMUSCULAR ROUTE ONLY</strong>. Intradermal Route is avoided in these cases.</li>
          <li><strong>Rabies Vaccine</strong> to be administered immediately on reconstitution or can be administered for <strong>6-8 hours</strong> after reconstitution if stored at <strong>2-8°C</strong> after reconstitution</li>
          <li><strong>Previous reaction to any brand of Rabies Vaccine is a CONTRAINDICATION TO USE THE SAME BRAND OF VACCINE. In such cases, alternative brand can be used</strong></li>
          <li>There is <strong>no maximum time after the bite to administer Rabies Vaccine</strong>. It can be <strong>administered even months to years after the exposure</strong></li>
          <li>Keep the patient under observation for 15-20 minutes after administering Rabies Vaccine or RIG.</li>
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
          <span>I acknowledge that I have read and understood the information above.</span>
        </label>
      </div>

      <div className="row actions">
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn" onClick={onNext} disabled={!acknowledged}>
            {acknowledged ? 'Continue →' : 'Please acknowledge to continue'}
          </button>
        </div>
      </div>

      <div style={{ 
        marginTop: '48px',
        paddingTop: '32px',
        borderTop: '2px solid var(--border-light)',
        textAlign: 'center'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 1) 100%)',
          padding: '24px',
          borderRadius: '16px',
          border: '2px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '14px', 
            color: 'var(--text)',
            lineHeight: '1.8',
            fontWeight: '500'
          }}>
            <div style={{ marginBottom: '12px', fontWeight: '700', color: 'var(--accent)', fontSize: '16px' }}>
              Conceptualized and created by:
            </div>
            <div style={{ marginBottom: '6px', fontSize: '15px' }}>
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Dr. Nitin Sinha</strong>, Professor, Department of Medicine, ABVIMS & Dr. RML Hospital
            </div>
            <div style={{ marginBottom: '20px', fontSize: '15px' }}>
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Mr. Pranav Nigam</strong>, Senior Software Engineer at an MNC
            </div>
            <div style={{ marginTop: '20px', marginBottom: '12px', fontWeight: '700', color: 'var(--accent)', fontSize: '16px' }}>
              With contributions from:
            </div>
            <div style={{ marginBottom: '6px', fontSize: '15px' }}>
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Dr. Mala Chhabra</strong>, Senior Consultant, Microbiology, ABVIMS & Dr. RML Hospital
            </div>
            <div style={{ marginBottom: '6px', fontSize: '15px' }}>
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Dr. Parul Goyal</strong>, Director Professor, Biochemistry, ABVIMS & Dr. RML Hospital
            </div>
            <div style={{ fontSize: '15px' }}>
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}>Dr. Sanjeet Panesar</strong>, Professor, Community Medicine, ABVIMS & Dr. RML Hospital
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
