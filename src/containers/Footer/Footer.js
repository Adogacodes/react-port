import { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';

import './Footer.scss';

const Footer = () => {

    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const {name, value} = e.target;

        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);
        setIsFormSubmitted(true);

        
    }


    return ( 
        

        <>
            <h2 className="head-text">I'd love to hear <span>from you!</span></h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="Email" />
                    <a href="mailto:vagotech0@gmail.com" className="p-text">vagotech0@gmail</a>
                </div>

                <div className="app__footer-card">
                    <img src={images.mobile} alt="Mobile" />
                    <a href="tel: +234-816-350-4638" className="p-text">+234-816-350-4638</a>
                </div>
            </div>

            { !isFormSubmitted ?
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input type="text" placeholder="Your Name" value={name} className="p-text" name="name" onChange={handleChangeInput} />
                </div>

                <div className="app__flex">
                    <input type="text" placeholder="Your Email" value={email} className="p-text" name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <textarea className="p-text" placeholder="Your Message" value={message} name='message' onChange={handleChangeInput}></textarea>
                </div>

                <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'sending' : 'Send Message'}</button>
            </div>
            : <div>
                <h3 className="head-text">Thank you for <span>getting in touch!</span></h3>
            </div>}
        </>
    );
}
 
export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);