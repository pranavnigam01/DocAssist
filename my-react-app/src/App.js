import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import AnimalExposure from './components/AnimalExposure';
import VaccinationStatus from './components/VaccinationStatus';
import ExposureType from './components/ExposureType';
import Result from './components/Result';

export default function App() {
  const [step, setStep] = useState(0);
  const [acknowledged, setAcknowledged] = useState(false);

  // collected data
  const [animal, setAnimal] = useState(null);
  const [vaxStatus, setVaxStatus] = useState(null);
  const [exposureType, setExposureType] = useState(null);
  const [immunoStatus, setImmunoStatus] = useState(null); // corticosteroids / chemo / HIV
  const [pastCCV, setPastCCV] = useState(null); // reliable history of CCV
  const [completed3Months, setCompleted3Months] = useState(null);

  const reset = () => {
    setStep(0);
    setAcknowledged(false);
    setAnimal(null);
    setVaxStatus(null);
    setExposureType(null);
    setImmunoStatus(null);
    setPastCCV(null);
    setCompleted3Months(null);
  };

  const steps = [
    'General Information',
    'Animal Exposure',
    'Vaccination Status',
    'Type of Exposure & Clinical Details',
    'Result'
  ];

  return (
    <div className="app-root">
      <div className="card">
        <h1 className="title">POST EXPOSURE PROPHYLAXIS (PEP) FOR RABIES PREVENTION</h1>
        <div className="steps">
          {steps.map((s, i) => (
            <div 
              key={i} 
              className={`step ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
            >
              <div className="step-number">
                {i < step ? '' : i + 1}
              </div>
              <div className="step-label">{s}</div>
            </div>
          ))}
        </div>

        <div className="content">
          {step === 0 && (
            <GeneralInfo
              acknowledged={acknowledged}
              setAcknowledged={setAcknowledged}
              onNext={() => acknowledged && setStep(1)}
            />
          )}

          {step === 1 && (
            <AnimalExposure
              animal={animal}
              setAnimal={setAnimal}
              onNext={() => setStep(2)}
              onBack={() => setStep(0)}
            />
          )}

          {step === 2 && (
            <VaccinationStatus
              vaxStatus={vaxStatus}
              setVaxStatus={setVaxStatus}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <ExposureType
              exposureType={exposureType}
              setExposureType={setExposureType}
              immunoStatus={immunoStatus}
              setImmunoStatus={setImmunoStatus}
              pastCCV={pastCCV}
              setPastCCV={setPastCCV}
              completed3Months={completed3Months}
              setCompleted3Months={setCompleted3Months}
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <Result
              data={{ animal, vaxStatus, exposureType, immunoStatus, pastCCV, completed3Months }}
              onBack={() => setStep(3)}
              onReset={reset}
            />
          )}
        </div>

        <div className="footer">Made for clinical decision support — all content hardcoded from requirement document.</div>
      </div>
    </div>
  );
}
