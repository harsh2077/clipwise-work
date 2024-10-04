import React from 'react'
import styles from './Card.module.css'
import cardsData from './cardData'
import image from '../../images/product.png'
import {useState} from "react";


const Card = () => {

  const [visibleCards, setVisibleCards] = useState(8);

  const showAllCards = ()=>{
    setVisibleCards(cardsData.length);
  }


  return (

    <div>
    <div className={styles.bigcontainer}>

    {cardsData.slice(0,visibleCards).map((card)=>(

    <div key={card.id} className={styles.container}>

       <img src={image} alt="product"/>

       <h2>{card.title}</h2>
       <p>{card.price}</p>
       <button>BUY NOW</button>

    </div>

   ))}


   </div>

   {visibleCards < cardsData.length && (
        <div className={styles.buttonContainer}>
          <button id={styles.viewButton} onClick={showAllCards}>
            View More
          </button>
        </div>
      )}
   
   </div>
    
  )
}

export default Card