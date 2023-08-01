import React, { useState } from 'react';
import pizzaImage from '../assets/images/pizzasize.png'
import rightArrow from '../assets/images/rightSlide.svg'
import leftArrow from '../assets/images/leftSlide.svg'
import sizeicon from '../assets/images/expand.png'
import doughIcon from '../assets/images/dough.png'
import cheeseIcon from '../assets/images/cheese.png'
import doughCrust from '../assets/images/crustDough.png'
import doughThin from '../assets/images/thinDough.png'
import sauceIcon from '../assets/images/pizzaSauce.png'
import tomatoSauceCrust from '../assets/images/crustTomatoSauce.png'
import tomatoSauceThin from '../assets/images/thinTomatoSauce.png'
import redSauceCrust from '../assets/images/crustRedSauce.png'
import redSauceThin from '../assets/images/thinRedSauce.png'
import bbqSauceThin from '../assets/images/thinBbqSauce.png'
import bbqSauceCrust from '../assets/images/crustBbqSauce.png'
import chickenIcon from '../assets/images/chickenIcon.png'
import crustTomatoTikka from '../assets/images/crustTomatoTikka.png'
import crustBbqTikka from '../assets/images/crustBbqTikka.png'
import crustRedTikka from '../assets/images/crustRedTikka.png'
import thinTomatoTikka from '../assets/images/thinTomatoTikka.png'
import thinBbqTikka from '../assets/images/thinBbqTikka.png'
import thinRedTikka from '../assets/images/thinRedTikka.png'

import crustTomatoBbq from '../assets/images/crustTomatoBbq.png'
import crustBbqBbq from '../assets/images/crustBbqBbq.png'
import crustRedBbq from '../assets/images/crustRedBbq.png'
import thinTomatoBbq from '../assets/images/thinTomatoBbq.png'
import thinBbqBbq from '../assets/images/thinBbqBbq.png'
import thinRedBbq from '../assets/images/thinRedBbq.png'

import MozzarellaGrilledBbqT from '../assets/images/grilledmozerela1.png'
import MozzarellaGrilledTomatoT from '../assets/images/grilledmozerela2.png'
import MozzarellaGrilledRedT from '../assets/images/grilledmozerela3.png'
import MozzarellaGrilledBbqC from '../assets/images/grilledmozerela4.png'
import MozzarellaGrilledRedC from '../assets/images/grilledmozerela5.png'
import MozzarellaGrilledTomatoC from '../assets/images/grilledmozerela6.png'

import CheddarGrilledBbqT from '../assets/images/grilledchadder1.png'
import CheddarGrilledRedT from '../assets/images/grilledchadder2.png'
import CheddarGrilledTomatoT from '../assets/images/grilledchadder3.png'
import CheddarGrilledBbqC from '../assets/images/grilledchadder4.png'
import CheddarGrilledTomatoC from '../assets/images/grilledchadder5.png'
import CheddarGrilledRedC from '../assets/images/grilledchadder6.png'











const Pizza = () => {
  const [size, setSize] = useState('S');
  const [step, setStep] = useState(0);
  const [dough, setDough] = useState('Thin');
  const [icon, setIcon] = useState(sizeicon);
  const [iconText, setIconText] = useState('Pizza Size');
  const [image, setImage] = useState(pizzaImage)
  const [sauce, setSauce] = useState('');
  const [Chicken , setChicken] = useState('');
  const[cheese , setCheese] = useState('');

  const cheeseImage = (cheeseType) =>{
    setCheese(cheeseType);
    if (dough === 'Crust' ) {
      if (sauce === 'Tomato') {
        if (cheeseType === 'Mozzarella')
          setImage(MozzarellaGrilledTomatoC);
        else if (cheeseType === 'Cheddar')
          setImage(CheddarGrilledTomatoC);
      } else if (sauce === 'Red') {
        if (cheeseType === 'Mozzarella')
          setImage(MozzarellaGrilledRedC);
        else if (cheeseType === 'Cheddar')
          setImage(CheddarGrilledRedC);
      } else if (sauce === 'BBQ') {
        if (cheeseType === 'Mozzarella')
          setImage(MozzarellaGrilledBbqC);
        else if (cheeseType === 'Cheddar')
          setImage(CheddarGrilledBbqC);
      }
    } else if (dough === 'Thin' ) {
      if (sauce === 'Tomato') {
        if (cheeseType === 'Mozzarella')
          setImage(MozzarellaGrilledTomatoT);
        else if (cheeseType === 'Cheddar')
          setImage(CheddarGrilledTomatoT);
      } else if (sauce === 'Red') {
        if (cheeseType === 'Mozzarella')
          setImage(MozzarellaGrilledRedT);
        else if (cheeseType === 'Cheddar')
          setImage(CheddarGrilledRedT);
      } else if (sauce === 'BBQ') {
        if (cheeseType === 'Mozzarella')
          setImage(MozzarellaGrilledBbqT);
        else if (cheeseType === 'Cheddar')
          setImage(CheddarGrilledBbqT);
      }
    }
  };

  const ChickenImage = (chickenType) => {
    setChicken(chickenType);
    
    if (dough === 'Crust') {
      if (sauce === 'Tomato') {
        if(chickenType === 'Tikka')
          setImage(crustTomatoTikka);
        else if(chickenType === 'Grilled')
          setImage(crustTomatoBbq);
      } else if (sauce === 'Red') {
        if(chickenType === 'Tikka')
          setImage(crustRedTikka);
        else if(chickenType === 'Grilled')
          setImage(crustRedBbq);
      } else if (sauce === 'BBQ') {
        if(chickenType === 'Tikka')
          setImage(crustBbqTikka);
        else if(chickenType === 'Grilled')
          setImage(crustBbqBbq);
      }
    } else if (dough === 'Thin') {
      if (sauce === 'Tomato') {
        if(chickenType === 'Tikka')
          setImage(thinTomatoTikka);
        else if(chickenType === 'Grilled')
          setImage(thinTomatoBbq);
      } else if (sauce === 'Red') {
        if(chickenType === 'Tikka')
          setImage(thinRedTikka);
        else if(chickenType === 'Grilled')
          setImage(thinRedBbq);
      } else if (sauce === 'BBQ') {
        if(chickenType === 'Tikka')
          setImage(thinBbqTikka);
        else if(chickenType === 'Grilled')
          setImage(thinBbqBbq);
      }
    }
  };

  const setSauceImage = (sauceType) => {
    setSauce(sauceType);

    if (dough === 'Crust') {
      if (sauceType === 'Tomato') {
        setImage(tomatoSauceCrust);
      } else if (sauceType === 'Red') {
        setImage(redSauceCrust);
      } else if (sauceType === 'BBQ') {
        setImage(bbqSauceCrust);
      }
    } else if (dough === 'Thin') {
      if (sauceType === 'Tomato') {
        setImage(tomatoSauceThin);
      } else if (sauceType === 'Red') {
        setImage(redSauceThin);
      } else if (sauceType === 'BBQ') {
        setImage(bbqSauceThin);
      }
    }
  };

  const setDoughImage = (doughType) => {
    setDough(doughType);


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
      iconText: ['Pizza Size'],
      onClick: setSize,
      icon: sizeicon
    },
    {
      image: doughCrust,
      buttons: ['Thin', 'Crust'],
      display: ['Thin', 'Crust'],
      iconText: ['Pizza Dough'],
      onClick: setDoughImage,
      icon: doughIcon
    },
    {
      image: tomatoSauceCrust,
      buttons: ['Tomato', 'Red', 'BBQ'],
      display: ['Tomato', 'Red', 'BBQ'],
      iconText: ['Pizza Sauce'],
      onClick: setSauceImage,
      icon: sauceIcon
    },
    {
      image: tomatoSauceCrust,
      buttons: ['Tikka', 'Grilled'],
      display: ['Tikka', 'Grilled'],
      iconText: ['Pizza Chicken'],
      onClick: ChickenImage,
      icon: chickenIcon
    },
    {
      image: tomatoSauceCrust,
      buttons: ['Mozzarella', 'Cheddar'],
      display: ['Mozzarella', 'Cheddar'],
      iconText: ['Pizza Cheese'],
      onClick: cheeseImage,
      icon: cheeseIcon
    },   
  ];

  const { buttons, display, onClick } = stepContents[step];

  const nextStep = () => {
    if (step < stepContents.length - 1) {
      setStep(step + 1);
      setIcon(stepContents[step + 1].icon);
      setIconText(stepContents[step + 1].iconText);
  
      if (dough === 'Crust') {
        if (sauce === 'Tomato') {
          if(chickenType === 'Tikka')
            setImage(crustTomatoTikka);
          else if(chickenType === 'Grilled')
            setImage(crustTomatoBbq);
        } else if (sauce === 'Red') {
          if(chickenType === 'Tikka')
            setImage(crustRedTikka);
          else if(chickenType === 'Grilled')
            setImage(crustRedBbq);
        } else if (sauce === 'BBQ') {
          if(chickenType === 'Tikka')
            setImage(crustBbqTikka);
          else if(chickenType === 'Grilled')
            setImage(crustBbqBbq);
        }
      } else if (dough === 'Thin') {
        if (sauce === 'Tomato') {
          if(chickenType === 'Tikka')
            setImage(thinTomatoTikka);
          else if(chickenType === 'Grilled')
            setImage(thinTomatoBbq);
        } else if (sauce === 'Red') {
          if(chickenType === 'Tikka')
            setImage(thinRedTikka);
          else if(chickenType === 'Grilled')
            setImage(thinRedBbq);
        } else if (sauce === 'BBQ') {
          if(chickenType === 'Tikka')
            setImage(thinBbqTikka);
          else if(chickenType === 'Grilled')
            setImage(thinBbqBbq);
        }
      }

      



    }
  };
  
  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      setIcon(stepContents[step - 1].icon);
      setIconText(stepContents[step - 1].iconText);
    
      // if (dough === 'Crust') {
      //   if (sauce === 'Tomato') {
      //     setImage(doughCrust);
      //   } else if (sauce === 'Red') {
      //     setImage(doughCrust);
      //   } else if (sauce === 'BBQ') {
      //     setImage(doughCrust);
      //   }
      // } else if (dough === 'Thin') {
      //   if (sauce === 'Tomato') {
      //     setImage(doughThin);
      //   } else if (sauce === 'Red') {
      //     setImage(doughThin);
      //   } else if (sauce === 'BBQ') {
      //     setImage(doughThin);
      //   }
      // }
      if (dough === 'Crust') {
        if (sauce === 'Tomato') {
          if(chickenType === 'Tikka')
            setImage(crustTomatoTikka);
          else if(chickenType === 'Grilled')
            setImage(crustTomatoBbq);
        } else if (sauce === 'Red') {
          if(chickenType === 'Tikka')
            setImage(crustRedTikka);
          else if(chickenType === 'Grilled')
            setImage(crustRedBbq);
        } else if (sauce === 'BBQ') {
          if(chickenType === 'Tikka')
            setImage(crustBbqTikka);
          else if(chickenType === 'Grilled')
            setImage(crustBbqBbq);
        }
      } else if (dough === 'Thin') {
        if (sauce === 'Tomato') {
          if(chickenType === 'Tikka')
            setImage(thinTomatoTikka);
          else if(chickenType === 'Grilled')
            setImage(thinTomatoBbq);
        } else if (sauce === 'Red') {
          if(chickenType === 'Tikka')
            setImage(thinRedTikka);
          else if(chickenType === 'Grilled')
            setImage(thinRedBbq);
        } else if (sauce === 'BBQ') {
          if(chickenType === 'Tikka')
            setImage(thinBbqTikka);
          else if(chickenType === 'Grilled')
            setImage(thinBbqBbq);
        }
      }
    }
  };

  return (
    <div className="pizza">
      <h2>Custom Pizza</h2>
      <img src={image}
        style={{
          width: "250px",
          height: "250px"
        }}
        alt="Pizza" />
      <p style={{fontSize:"20px" , fontWeight:"bold"}}><hr />
        {`Size: ${stepContents[0].display[stepContents[0].buttons.indexOf(size)]}`}</p>
      <div className="button-group">
        {buttons.map((button, index) => (
          <button key={index} className="button" onClick={() => onClick(button)}>
            {button}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={previousStep} style={{ backgroundColor: "transparent" }}><img src={leftArrow} alt="Left" /></button>
        <figure style={{ textAlign: "center" }}>
          <img src={icon} style={{ width: "30px", height: "30px", border: "1px solid black", borderRadius: "50%", padding: "10px", color: "black" }} alt="" />
          <figcaption>{iconText}</figcaption>
        </figure>
        <button onClick={nextStep} style={{ backgroundColor: "transparent" }}><img src={rightArrow} alt="Right" /></button>

      </div>
    </div>
  );
};

export default Pizza;
