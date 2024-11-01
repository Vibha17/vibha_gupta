import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        alert('Form submitted');
        navigate('/');
    };

    return ( 
        <div className="contact-container">
            <div className="contact-left">
                <h1>REACH OUT ME</h1>
                <p>Dhansiri Hostel, IIT Guwahati, Amingaon, North Guwahati, Assam, India, pin(301404)</p>
                <p>+91-9216195181</p>
                <p>g.vibha@iitg.ac.in</p>
            </div>
            <div className="contact-right">
                <h2>Contact Me !</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail*</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="company">Company Name</label>
                        <input 
                            type="text" 
                            id="company" 
                            name="company"  
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number*</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}
 
export default Contact;
