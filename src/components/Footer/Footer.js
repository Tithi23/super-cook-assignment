import React from 'react';
import { Container, Button } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <Container>
                <div className="footer-inside">

                    <div className="logo-slogan">
                        <img className='logo' src={logo} alt="" />
                        <h6 className="my-2">LEARN COOKING FROM ANYWHERE.</h6>
                        <p className="footer-p">Super Cook is the world’s leading provider of Cooking education for peoples. We use the power and joy of cooking to help our students learn and grow during the years. Since 1978, Super Cook has helped millions of peoples around the world build a strong foundation for a lifetime love cooking</p>
                    </div>


                    <div className="contact-section">
                        <div>
                            <p><i className="fas fa-map-marker-alt"></i> Fatullah 32 st-12/4 - Narayangonj</p>

                            <p><i className="fas fa-mobile"></i> 01879966419</p>

                            <p><i className="fas fa-envelope"></i> tithiratry@gmail.com</p>
                        </div>

                        <div >
                            <input className="sub-input" type="text" placeholder="Enter Your Email" />
                            <br />
                            <Button className="details-btn">Subscribe</Button>
                        </div>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Footer;