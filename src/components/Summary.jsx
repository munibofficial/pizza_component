import React from "react";
import Steps from "./Steps";

const Summary = ({price, size, dough, sauce, chicken, cheese, toppings, goToStep, resetIsFinished, handleConfirm}) => {
  
  const handleChange = (step) => {
    goToStep(step);
    resetIsFinished(false);  // Set isFinished to false when going back to a step
  };

  return (
    <div className="summary">
      <h2>Your Pizza</h2>
      <div className="summary-item">
        <span>Size:</span>
        <p>{size}</p>
        <button className="change-button"  onClick={() => handleChange(0)}>Change</button>
      </div>
      <div className="summary-item">
        <span>Dough:</span>
        <p>{dough}</p>
        <button  className="change-button" onClick={() => handleChange(1)}>Change</button>
      </div>
      <div className="summary-item">
        <span>Sauce:</span>
        <p>{sauce}</p>
        <button className="change-button" onClick={() => handleChange(2)}>Change</button>
      </div>
      <div className="summary-item">
        <span>Chicken:</span>
        <p>{chicken}</p>
        <button className="change-button" onClick={() => handleChange(3)}>Change</button>
      </div>
      <div className="summary-item">
        <span>Cheese:</span>
        <p>{cheese}</p>
        <button className="change-button" onClick={() => handleChange(4)}>Change</button>
      </div>
      <div className="summary-item">
        <span>Toppings:</span>
        <p>{toppings.join(', ')}</p>
        <button className="change-button" onClick={() => handleChange(5)}>Change</button>
      </div>
      <div className="summary-item">
        <span>Price:</span>
        <p>${price}</p>
      </div>
      <div style={{display:"flex" ,justifyContent: "space-between",alignItems:"center" }}>
        <button className="summary-button" onClick={resetIsFinished}>Go Back</button>
        <button className="summary-button" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Summary;
