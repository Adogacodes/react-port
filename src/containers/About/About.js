import { motion } from 'framer-motion';

import { images } from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'


import './About.scss';

const abouts = [
    { title: `HI, I'M ISAAC, A FRONT-END WEB DEVELOPER.`, description: 'Focused on building the frontend of Websites and Web Applications that leads to the success of the overall product. Based in Nigeria, i\'m open to Job Opportunities where I can contribute, Learn and Grow. I\'m willing to work Remotely, Relocate, or work Remotely and Relocate.', imgUrl: images.about01}
   
]

const About = () => {


    return ( 
        <>
            <h2 className="head-text">About <span>Me!!!</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{marginTop: 20}}>{ about.title }</h2>
                        <p className="p-text" style={{marginTop: 10}}>{ about.description }</p>
                        <a href='#' target='_blank'><button>RESUME</button></a>

                    </motion.div>
                ))}
            </div>


        </>
     );
}
 
export default AppWrap(
    MotionWrap(About, 'app__about'), 
    'about', 
    "app__whitebg");