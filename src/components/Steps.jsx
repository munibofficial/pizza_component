// Steps.jsx
import React from 'react';

const Steps = ({ step, stepContents }) => {
  return (
    <div className="step-container">
      {stepContents.map((stepContent, index) => (
        <div
          className={`step ${step === index ? 'active' : ''}`}
          key={index}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Steps;
