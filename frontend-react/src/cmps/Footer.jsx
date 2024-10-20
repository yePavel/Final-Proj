import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTrello } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

export function Footer() {
    return <footer className='main-footer'>
        <div className='upper-footer'>
            <div className="footer-logo">
                <FaTrello />
                <span>PlanIt</span>
            </div>
            <ul>
            </ul>
            <li className='footer-card'><h4>About Trello</h4>
                <span>What's behind the boards.</span>
            </li>
            <li className='footer-card'><h4>Jobs</h4>
                <span>Learn about open roles</span>
            </li>
            <li className='footer-card'><h4>Apps</h4>
                <span>Download the Trello App</span>
            </li>
            <li className='footer-card'><h4>Contact Us</h4>
                <span>Need anything ? Get in touch!</span>
            </li>
        </div>
        <div className='lower-footer'>
            <div className='language-logo'><MdLanguage />English</div>
            <div className='footer-rights'>
                <span>Your Privacy Choices</span>
                <span>Privacy Policy</span>
                <span>Terms</span>
                <span>Copyright &#169; 2024 Pavel Lavie</span>
            </div>
            <div className='contact-logos'>
                <button><FaInstagram /></button>
                <button><FaFacebookF /></button>
                <button><FaLinkedinIn /></button>
                <button><IoLogoYoutube /></button>
            </div>
        </div>
    </footer>
}