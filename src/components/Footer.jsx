import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2 className="footer-logo">
                        <span className="logo-cs">CS</span> — Ticket System
                    </h2>
                    <p className="footer-desc">
                        Lorem Ipsum is simply text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Our Mission</a>
                        <a href="#">Contact Sales</a>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <a href="#">Products & Services</a>
                        <a href="#">Customer Stories</a>
                        <a href="#">Download Apps</a>
                    </div>

                    <div className="footer-col">
                        <h4>Information</h4>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Join Us</a>
                    </div>

                    <div className="footer-col">
                        <h4>Social Links</h4>
                        <a href="#">
                            <img src="https://img.icons8.com/ios-filled/20/ffffff/twitterx.png" alt="X" /> @CS — Ticket System
                        </a>
                        <a href="#">
                            <img src="https://img.icons8.com/ios-filled/20/ffffff/linkedin.png" alt="LinkedIn" /> @CS — Ticket System
                        </a>
                        <a href="#">
                            <img src="https://img.icons8.com/ios-filled/20/ffffff/facebook.png" alt="Facebook" /> @CS — Ticket System
                        </a>
                        <a href="#">
                            <img src="https://img.icons8.com/ios-filled/20/ffffff/mail.png" alt="Email" /> support@cst.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;