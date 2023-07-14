import React, {FC, useState} from 'react';
import styles from './Slide.module.css';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";


interface SlideProps  {
    imgs: string[]
}

const Slide: FC<SlideProps> = ({imgs})=> {
    const [imgShowed, setImgShowed] = useState<number>(1)
    const lastImg = imgs?.length -1

    const handleGoBack = ()=> {
        if(imgShowed === 0) return setImgShowed(lastImg)
        setImgShowed(imgShowed -1)
    }

    const handleGoForward= ()=> {
        if(imgShowed === lastImg) return setImgShowed(0)
        setImgShowed(imgShowed +1)
    }

    return (

        <div className="carousel">
            <div className="carousel-inner">
                {
                    imgs?.map((image, index)=>
                       <img key={index} className={imgShowed === index ? styles.imgSlide : styles.notShow} src={image} alt="Imagen 1"/> )
                }
                
               <BsFillCaretLeftFill onClick={handleGoBack} className={styles.leftArrow}/>
                <BsFillCaretRightFill onClick={handleGoForward} className={styles.rightArrow}/>
            </div>
                  
        </div>
        
      
    )
}

export default Slide