import { motion } from 'framer-motion'
import './Carrossel2.css'
import image1 from '../../assets/logo/bk.jpg'
import image2 from '../../assets/logo/bobs.jpg'
import image3 from '../../assets/logo/cheiro-verde.jpg'
import image4 from '../../assets/logo/di-roma.jpg'
import image5 from '../../assets/logo/frango.jpg'
import image6 from '../../assets/logo/kfc.jpg'
import image7 from '../../assets/logo/macarronada.jpg'
import image8 from '../../assets/logo/massa.jpg'
import image9 from '../../assets/logo/mcdonalds.jpg'
import image10 from '../../assets/logo/subway.jpg'

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

export default Carrossel2