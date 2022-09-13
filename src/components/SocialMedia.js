import { BsLinkedin, BsGithub } from 'react-icons/bs'; 

const SocialMedia = () => {
    return ( 
        <div className="app__social">
            <a href='https://www.linkedin.com/in/isaac-adoga-315a2924a/' target='_blank'>
                <BsLinkedin />
            </a>
            <a href='https://github.com/Adogacodes' target='_blank'>
                <BsGithub />
            </a>
        </div>
        
     );
}
 
export default SocialMedia;