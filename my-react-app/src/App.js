import React, { useState, useEffect } from 'react';
import GeneralInfo from './components/GeneralInfo';
import AnimalExposure from './components/AnimalExposure';
import ExposureType from './components/ExposureType';
import Result from './components/Result';
import NoPEP from './components/NoPEP';
import ImmunoStatusQuestion from './components/ImmunoStatusQuestion';
import PastCCVQuestion from './components/PastCCVQuestion';
import Completed3MonthsQuestion from './components/Completed3MonthsQuestion';
import CategoryIIResult from './components/CategoryIIResult';
import CategoryIIIExposure from './components/CategoryIIIExposure';

export default function App() {
  const [step, setStep] = useState(0);
  const [acknowledged, setAcknowledged] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayStep, setDisplayStep] = useState(0);

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
    'Type of Exposure & Clinical Details',
    'Result'
  ];

  // Handle page transition effect
  useEffect(() => {
    if (step !== displayStep) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayStep(step);
        setIsTransitioning(false);
      }, 200); // Half of transition duration
      return () => clearTimeout(timer);
    }
  }, [step, displayStep]);

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

        <div className={`content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          {displayStep === 0 && (
            <GeneralInfo
              acknowledged={acknowledged}
              setAcknowledged={setAcknowledged}
              onNext={() => acknowledged && setStep(1)}
            />
          )}

          {displayStep === 1 && (
            <AnimalExposure
              animal={animal}
              setAnimal={setAnimal}
              onNext={() => {
                if (animal === 'domesticrodent') {
                  setStep(5); // Go to NoPEP screen
                } else if (animal === 'wildrodent') {
                  setStep(10); // Go to Category III Exposure screen
                } else {
                  setStep(2); // Continue to Exposure Type (for Dog/Cat/Monkey/Mongoose)
                }
              }}
              onBack={() => setStep(0)}
            />
          )}

          {displayStep === 5 && (
            <NoPEP
              animal={animal}
              exposureType={exposureType}
              onBack={() => {
                if (exposureType === 'cat1') {
                  setStep(2); // Back to Exposure Type
                } else {
                  setStep(1); // Back to Animal Exposure
                }
              }}
              onReset={reset}
              customMessage={exposureType === 'cat1' ? 'NO VACCINE OR RIG IS REQUIRED' : undefined}
              customTitle={exposureType === 'cat1' ? 'No Vaccine or RIG Required' : undefined}
              customDescription={exposureType === 'cat1' 
                ? 'Category I exposure: No vaccine or RIG required. Perform wound management.' 
                : undefined
              }
            />
          )}

          {displayStep === 2 && (
            <ExposureType
              exposureType={exposureType}
              setExposureType={setExposureType}
              immunoStatus={immunoStatus}
              setImmunoStatus={setImmunoStatus}
              pastCCV={pastCCV}
              setPastCCV={setPastCCV}
              completed3Months={completed3Months}
              setCompleted3Months={setCompleted3Months}
              onNext={() => {
                if (exposureType === 'cat1') {
                  setStep(5); // Go to NoPEP screen for Category I
                } else if (exposureType === 'cat2' || exposureType === 'cat3') {
                  setStep(6); // Go to ImmunoStatusQuestion for Category II and III
                } else {
                  setStep(3); // Continue to Result (fallback)
                }
              }}
              onBack={() => setStep(1)}
            />
          )}

          {displayStep === 10 && (
            <CategoryIIIExposure
              onNext={() => setStep(6)} // Go to ImmunoStatusQuestion
              onBack={() => setStep(1)} // Back to Animal Exposure
              setExposureType={setExposureType}
            />
          )}

          {displayStep === 6 && (
            <ImmunoStatusQuestion
              immunoStatus={immunoStatus}
              setImmunoStatus={setImmunoStatus}
              onNext={() => {
                if (immunoStatus === 'yes') {
                  setStep(9); // Go to result: IM vaccine + RIG
                } else {
                  setStep(7); // Go to PastCCVQuestion
                }
              }}
              onBack={() => {
                // If came from CategoryIIIExposure, go back there, otherwise go to ExposureType
                if (animal === 'wildrodent') {
                  setStep(10);
                } else {
                  setStep(2);
                }
              }}
            />
          )}

          {displayStep === 7 && (
            <PastCCVQuestion
              pastCCV={pastCCV}
              setPastCCV={setPastCCV}
              onNext={() => {
                if (pastCCV === 'yes') {
                  setStep(8); // Go to Completed3MonthsQuestion
                } else {
                  setStep(9); // Go to result: full schedule
                }
              }}
              onBack={() => setStep(6)}
            />
          )}

          {displayStep === 8 && (
            <Completed3MonthsQuestion
              completed3Months={completed3Months}
              setCompleted3Months={setCompleted3Months}
              onNext={() => {
                if (completed3Months === 'yes') {
                  setStep(9); // Go to result: no vaccine needed
                } else {
                  setStep(9); // Go to result: Day 0 and Day 3
                }
              }}
              onBack={() => setStep(7)}
            />
          )}

          {displayStep === 9 && (
            <CategoryIIResult
              type={
                immunoStatus === 'yes' ? 'immunoYes' :
                pastCCV === 'yes' && completed3Months === 'yes' ? 'noVaccineNeeded' :
                pastCCV === 'yes' && completed3Months === 'no' ? 'day0and3' :
                exposureType === 'cat3' && immunoStatus === 'no' && pastCCV === 'no' ? 'cat3WithRIG' :
                'fullSchedule'
              }
              exposureType={exposureType}
              onBack={() => {
                // Determine which screen to go back to based on the flow
                if (immunoStatus === 'yes') {
                  // Came from immunoStatus question
                  setStep(6);
                } else if (pastCCV === 'yes' && completed3Months !== null) {
                  // Came from completed3Months question
                  setStep(8);
                } else if (pastCCV === 'no') {
                  // Came from pastCCV question with No
                  setStep(7);
                } else {
                  // Default fallback
                  setStep(6);
                }
              }}
              onReset={reset}
            />
          )}

          {displayStep === 3 && (
            <Result
              data={{ animal, vaxStatus, exposureType, immunoStatus, pastCCV, completed3Months }}
              onBack={() => setStep(2)}
              onReset={reset}
            />
          )}
        </div>

        <div className="footer">Made for clinical decision support — all content hardcoded from requirement document.</div>
      </div>
    </div>
  );
}
