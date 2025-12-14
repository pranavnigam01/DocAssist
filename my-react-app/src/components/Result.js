import React from 'react';

function determineRecommendation(data) {
  const { animal, vaxStatus, exposureType, immunoStatus, pastCCV, completed3Months } = data;

  if (animal === 'domesticrodent') {
    return {
      title: 'No PEP required',
      icon: '✅',
      color: '#10b981',
      details: 'Domestic rodents / squirrel / hare / rabbit / bat / snake / lizard / horse / cow / buffalo / sheep / goat / human: No requirement of PEP. Do wound management.'
    };
  }

  if (vaxStatus === 'yes_protective') {
    return { 
      title: 'Only Wound Management', 
      icon: '🩹',
      color: '#10b981',
      details: 'Protective titres available — no vaccine or RIG required. Do wound management.' 
    };
  }

  if (exposureType === 'cat1') {
    return { 
      title: 'Category I — No Vaccine/RIG', 
      icon: '✅',
      color: '#10b981',
      details: 'Category I exposure: No vaccine or RIG required. Perform wound management.' 
    };
  }

  if (['cat2','cat3'].includes(exposureType) && immunoStatus === 'yes') {
    return { 
      title: 'Administer IM CCV + RIG', 
      icon: '💉',
      color: '#ef4444',
      details: 'Patient on immunosuppressives/chemo/HIV: give full schedule of IM CCV along with RIG. Do wound management.' 
    };
  }

  if (pastCCV === 'yes') {
    if (completed3Months === 'yes') {
      return { 
        title: 'No Vaccine or RIG', 
        icon: '✅',
        color: '#10b981',
        details: 'Schedule completed within last 3 months: No need of vaccine or RIG.' 
      };
    }
    if (completed3Months === 'no') {
      return { 
        title: 'Give vaccine on Day 0 and Day 3', 
        icon: '💉',
        color: '#f59e0b',
        details: 'Reliable/Documented past CCV but not completed in last 3 months: give vaccine on Day 0 and Day 3. No RIG needed.' 
      };
    }
  }

  if (exposureType === 'cat2') {
    return { 
      title: 'Category II — Give Vaccine', 
      icon: '💉',
      color: '#f59e0b',
      details: 'Wound management. Administer full schedule of CCV (IM or ID). RIG usually not required unless other indications.' 
    };
  }

  if (exposureType === 'cat3') {
    return { 
      title: 'Category III — Vaccine ± RIG', 
      icon: '🚨',
      color: '#ef4444',
      details: 'Wound management. If no reliable/documented past CCV: give full schedule of CCV (IM or ID) along with RIG. If reliable/documented past CCV: give vaccine as per past schedule (no RIG).' 
    };
  }

  return { 
    title: 'Further Assessment Needed', 
    icon: '⚠️',
    color: '#f59e0b',
    details: 'The inputs are incomplete or require specialist review. Consider national guidelines and consult infectious diseases / public health resources.' 
  };
}

export default function Result({ data, onBack, onReset }) {
  const rec = determineRecommendation(data);

  return (
    <div>
      <div className="result-card" style={{ borderColor: rec.color }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          marginBottom: '16px',
          paddingBottom: '16px',
          borderBottom: `2px solid ${rec.color}`
        }}>
          <span style={{ fontSize: '32px' }}>{rec.icon}</span>
          <h4 style={{ color: rec.color, margin: 0, fontSize: '22px', lineHeight: '1.3', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', flex: 1 }}>
            {rec.title}
          </h4>
        </div>
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          marginBottom: '24px'
        }}>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text)', margin: 0, fontWeight: '500' }}>{rec.details}</p>
        </div>

        <div className="row actions">
          <button className="btn ghost" onClick={onBack}>← Back</button>
          <button className="btn" onClick={onReset} style={{ background: `linear-gradient(135deg, ${rec.color} 0%, ${rec.color}dd 100%)` }}>
            🔄 Start Over
          </button>
        </div>
      </div>
    </div>
  );
}
