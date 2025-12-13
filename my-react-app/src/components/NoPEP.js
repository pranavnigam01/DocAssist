import React from 'react';

export default function NoPEP({ animal, exposureType, onBack, onReset, customMessage, customTitle, customDescription }) {
  const getAnimalLabel = (key) => {
    const labels = {
      'warm': 'Warm-blooded animal (Dog / Cat / Monkey / Mongoose / Jackal)',
      'wild': 'Wild animal',
      'wildrodent': 'Wild rodent or rodent in forest',
      'secretions': 'Exposure to secretions of a rabies patient',
      'domesticrodent': 'Domestic rodent / squirrel / hare / rabbit / bat / snake / lizards / chameleon / horse / cow / bird / buffalo / sheep / goat / human',
      'other': 'Any other animal'
    };
    return labels[key] || key;
  };

  const getExposureLabel = (key) => {
    const labels = {
      'cat1': 'Category I',
      'cat2': 'Category II',
      'cat3': 'Category III'
    };
    return labels[key] || key;
  };

  const title = customTitle || 'No PEP Required';
  const description = customDescription || 'Based on the selected animal species, Post-Exposure Prophylaxis (PEP) is not required for this exposure.';
  const mainMessage = customMessage || 'No PEP Required';

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          fontSize: '72px', 
          marginBottom: '24px',
          filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.3))'
        }}>✅</div>
        <h3 style={{ 
          color: 'var(--success)',
          fontSize: '32px',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>{mainMessage}</h3>
        <p style={{ 
          fontSize: '16px', 
          color: 'var(--text-light)', 
          marginTop: '12px',
          fontWeight: '500',
          maxWidth: '600px',
          margin: '12px auto 0',
          lineHeight: '1.7'
        }}>
          {description}
        </p>
      </div>

      <div className="result-card" style={{ 
        borderColor: 'var(--success)',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 0.95) 100%)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', 
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: '2px solid var(--success)'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--success) 0%, #10b981 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}>
            ✅
          </div>
          <div>
            <h4 style={{ color: 'var(--success)', margin: 0, fontSize: '24px' }}>
              {title}
            </h4>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          marginBottom: '24px'
        }}>
          <h5 style={{ 
            margin: '0 0 16px', 
            color: 'var(--text)',
            fontSize: '16px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>📋</span>
            <span>Clinical Recommendation</span>
          </h5>
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.8', 
            color: 'var(--text)',
            margin: 0
          }}>
            {exposureType === 'cat1' ? (
              <>
                Wash the exposure site with soap and water. No need of RIG and Rabies Vaccine.
              </>
            ) : (
              <>
                For exposures involving <strong style={{ color: 'var(--success)' }}>
                  {animal ? getAnimalLabel(animal) : 'domestic animals'}
                </strong>, there is no requirement for Post-Exposure Prophylaxis (PEP) with rabies vaccine or Rabies Immunoglobulin (RIG).
              </>
            )}
          </p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid var(--border-light)'
        }}>
          <h5 style={{ 
            margin: '0 0 12px', 
            color: 'var(--text-muted)',
            fontSize: '13px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {exposureType === 'cat1' ? 'Selected Exposure Category' : 'Selected Animal Category'}
          </h5>
          <p style={{ 
            margin: 0, 
            fontSize: '15px', 
            color: 'var(--text)',
            fontWeight: '500',
            padding: '12px',
            background: 'var(--bg-alt)',
            borderRadius: '8px'
          }}>
            {exposureType === 'cat1' 
              ? (exposureType ? getExposureLabel(exposureType) : '—')
              : (animal ? getAnimalLabel(animal) : '—')
            }
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
              background: 'linear-gradient(135deg, var(--success) 0%, #10b981 100%)',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
            }}
          >
            🔄 Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

