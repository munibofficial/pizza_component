import React, { useState } from 'react';
import pizzaImage from '../assets/images/pizzasize.png'
import sizeicon from '../assets/images/expand.png'
import doughIcon from '../assets/images/dough.png'
import doughCrust from '../assets/images/crustDough.png'
import doughThin from '../assets/images/thinDough.png'
import sauceIcon from '../assets/images/pizzaSauce.png'
import tomatoSauceCrust from '../assets/images/crustTomatoSauce.png'
import tomatoSauceThin from '../assets/images/thinTomatoSauce.png'
import redSauceCrust from '../assets/images/crustRedSauce.png'


const Pizza = () => {
  const [size, setSize] = useState('S');
  const [step, setStep] = useState(0);
  const [dough, setDough] = useState('Thin');
  const [icon, setIcon] = useState(sizeicon);
  const [iconText,setIconText] = useState('Pizza Size');
  const[image,setImage]=useState(pizzaImage)

  const setSauceImage= (sauceType) => {
    setDough(sauceType);
  
  if (sauceType === 'Tomato'){
    setImage(tomatoSauceCrust)
  } else if (sauceType === 'Red'){
    setImage(redSauceCrust)
  }

};
  
  const setDoughImage = (doughType) => {
    setDough(doughType); // Changed this line
  
    // Update the image state based on the type of dough
    if (doughType === 'Thin') {
      setImage(doughThin);
      

    } else if (doughType === 'Crust') {
      setImage(doughCrust);
    }
  };
  

  const stepContents = [
    {
     image: pizzaImage,
      buttons: ['S', 'M', 'L'],
      display: ['8 inch', '10 inch', '14 inch'],
      iconText: ['Piza Size'],
      onClick: setSize,
      icon: sizeicon
    },
    {
      image: doughCrust,
      buttons: ['Thin', 'Crust'],
      display: ['Thin', 'Crust'],
      iconText: ['Piza Dough'],
      onClick: setDoughImage,
      icon: doughIcon
    },
    {
        image: tomatoSauceCrust,
        buttons: ['Tomato', 'Red' , 'BBQ'],
        display: ['Tomato', 'Red' , 'BBQ'],
        iconText: ['Piza Sauce'],
        onClick: setSauceImage,
        icon: sauceIcon
      },
    // Add more steps as needed
  ];

  const { buttons, display, onClick } = stepContents[step];

  const nextStep = () => {
    if (step < stepContents.length - 1) {
      setStep(step + 1);
      setIcon(stepContents[step+1].icon);
      setIconText(stepContents[step+1].iconText);

      if (dough === 'Thin') {
        setImage(tomatoSauceThin);
      } else if (dough === 'Crust') {
        setImage(tomatoSauceCrust);
      }

    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setIcon(stepContents[step-1].icon);
      setIconText(stepContents[step-1].iconText);
      setImage(stepContents[step-1].image);


    }
  };

  return (
    <div className="pizza">
      <h2>Custom Pizza</h2>
      <img src={image}
      style={{
        width:"250px",
        height:"250px"
      }} 
      alt="Pizza" />
      <p><hr/>
        {`Size: ${stepContents[0].display[stepContents[0].buttons.indexOf(size)]}`}</p>
      <div className="button-group">
        {buttons.map((button, index) => (
          <button key={index} className="button" onClick={() => onClick(button)}>
            {button}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={previousStep} style={{ borderRadius: "50%", padding: "8px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "transparent" }}>&larr;</button>
        <figure style={{ textAlign: "center" }}>
          <img src={icon} style={{ width: "30px", height: "30px", border: "1px solid black", borderRadius: "50%", padding: "10px" }} alt="" />
          <figcaption>{iconText}</figcaption>
        </figure>
        <button onClick={nextStep} style={{ borderRadius: "50%", padding: "8px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "transparent" }}>&rarr;</button>
      </div>
    </div>
  );
};

export default Pizza;
