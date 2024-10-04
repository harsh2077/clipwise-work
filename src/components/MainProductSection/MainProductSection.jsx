import React from 'react'
import styles from './MainProductSection.module.css'
import wave2 from '../../images/wave2.png'
import product from '../../images/product.png'
const MainProductSection = () => {
  return (
    <div className={styles.container}>

        <div className={styles.image}>
            <img src={wave2} alt="wave2"/>
        </div>

        <div className={styles.first}>
            <h3>BEST PRICE</h3>
            <h2>Agate Phone Grip</h2>
            <div className={styles.minor}><span id={styles.d}>44.50$</span>
            <span id={styles.dollar}>19.50$</span></div>
            

            <p>
                These Pop Rock Crystal grip tops can be swapped with 
                other tops depending on your mood, outfit, nails, phone case, holiday, etc! 
                Just gently squeeze the slides to remove and swap out with another color or design!

            </p>

            <button>BUY NOW</button>
        </div>

        <div className={styles.second}>
            
            <div className={styles.biggest}>
            <div className={styles.bigger}>
            <div className={styles.big}>
                <img src={product} alt="product"/>
            </div>
            </div>
            
            </div>
            
            
        </div>

    </div>
  )
}

export default MainProductSection