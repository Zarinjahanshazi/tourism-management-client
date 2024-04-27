import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <aside>
                <p className="font-extrabold text-[30px] text-green-500"><MdOutlineTravelExplore /></p>
                <p className="font-bold">
                TouristTrekker Ltd. <br/>Providing best tourist spot since 2000
                </p> 
                <p>Copyright © <span className="font-extrabold">TouristTrekker</span> All right reserved</p>
            </aside> 
            <nav>
                <div className="grid grid-flow-col gap-4 text-[30px]">
                <a><p><FaFacebook /></p></a>
                <a><p><FaInstagram /></p></a>
                <a><p><FaLinkedin /></p></a>
                <a><p><FaTwitter /></p></a>
                </div>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;