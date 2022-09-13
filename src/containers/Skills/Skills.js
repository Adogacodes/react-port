import { motion } from 'framer-motion';

import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';

const techs = [{ name:'Html', icon: images.html, bgColor: '#edf2f8'}, { name: 'Css', icon: images.css, bgColor: '#edf2f8'}, { name: 'Javascript', icon: images.javascript, bgColor: '#edf2f8'}, {name: 'React', icon : images.react, bgColor: '#edf2f8'}, {name : 'Sass', icon: images.sass, bgColor: '#edf2f8'}, {name: 'Bootstrap', icon: images.bootstrap, bgColor: '#edf2f8'}, {name: 'Git', icon: images.git, bgColor: '#edf2f8'}, {name: 'Github', icon:images.github, bgColor: '#edf2f8'}]

const Skills = () => {


    return ( 
        <>
            <h2 className="head-text">My <span>Skills</span></h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {techs.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>


                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </>
     );
}
 
export default AppWrap(
    MotionWrap(Skills, 'app__skills'), 
    'skills', 
    "app__whitebg");