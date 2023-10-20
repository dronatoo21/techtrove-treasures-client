import { FaFacebookF, FaTwitterSquare, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 bg-neutral flex justify-between md:flex-row flex-col text-neutral-content">
              <aside>
               <img className='w-20' src="https://i.ibb.co/M7sMZmk/logo.png" alt="logo" />
                <p>TechTrove Treasures<br/>Providing reliable tech since 1992</p>
              </aside> 
              <nav>
                <header className="footer-title mr-16">Social</header> 
                <div className="grid grid-flow-col gap-4">
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaTwitterSquare/>
                </div>
              </nav>
            </footer>
        </div>
    );
};

export default Footer;