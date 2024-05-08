/*import { motion } from 'framer-motion'
import './Carrossel2.css'

import image1 from '../../assets/logo/1.jpg'
import image2 from '../../assets/logo/2.jpg'
import image3 from '../../assets/logo/3.jpg'
import image4 from '../../assets/logo/4.jpg'
import image5 from '../../assets/logo/5.jpg'
import image6 from '../../assets/logo/6.jpg'
import image7 from '../../assets/logo/7.jpg'
import image8 from '../../assets/logo/8.jpg'
import image9 from '../../assets/logo/9.jpg'
import image10 from '../../assets/logo/10.jpg'

const images = [ image1 , image2, image3, image4, image5, image6, image7, image8, image9, image10]

function Carrossel2(){
    return(
        <>
            <motion.div className="container-carrossel2">
                <motion.div className='inner'>
                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </>
    )
}

export default Carrossel2*/
import image1 from '../../assets/logo/1.jpg'
import image2 from '../../assets/logo/2.jpg'
import image3 from '../../assets/logo/3.jpg'
import CarrosselItem from './CarrosselItem';

export default function Carrossel2(){
    const images = [
        image1, image2, image3
       // Adicione mais imagens conforme 
      ];
    
      return <CarrosselItem images={images} />;

}