import React, { useEffect, useState } from 'react';
import './Home.css'
import Service from '../Service/Service';
import { Container, Row, Button } from 'react-bootstrap';
import cookImg from "../../images/bg.jpg"
import clubImg from '../../images/club.jpg'
import studentImg from '../../images/student.jpg'
import { Link } from 'react-router-dom';



const Home = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>



            <div className="heading-part ">
                <div className="d-md-flex">
                    <div>
                        <h1 className="main-heading">COOK WITH <span className="special-text">SUPER COOK </span>
                            LIVE
                            <p className="heading-p">Connecting food lovers with amazing chefs through free, interactive cooking classes.Connect with our chefs, learn how to cook, and discover the power of a Super Cook meal.</p>

                        </h1></div>
                    <img className="img-fluid w-50 heading-image p-xs-4" src={cookImg} alt="" />
                </div>
            </div>









            <div className="service-section">
                <h1 className="section-heading">Our <span className="special-text">Services</span></h1>
                <div className='services'>
                    <Row xs={1} md={3} className="g-3">
                        {services.slice(0, 3).map(service => <Service key={service.id} service={service} ></Service>)}
                    </Row>

                    <Link to="/services"><Button className="details-btn mt-3" variant="success">See More Services</Button></Link>
                </div>
            </div>




            <div className="welcome-part">
                <h1>LIVE INTERACTIVE COOKING CLASSES </h1>
                <p>After signing up, you’ll get a Zoom link as well as an ingredient list from our team. Shop for what you need at your local grocery and then join our chef on the day of the free cooking class. Questions about allergies or substitutions? You can always reach out to us in the days leading up to the event.</p>

                <div className="welcome-section">

                    <div className="student ">
                        <img className="img-fluid" src={studentImg} alt="" />
                        <h3 className="special-text">BE A SPECIALIZED COOK</h3>
                        <p>Our chefs are professionally trained and have tons of experience to ensure they have the skillset and capability to host interactive, entertaining cooking classes just for you.</p>
                    </div>


                    <div className="club-member">
                        <img className="img-fluid" src={clubImg} alt="" />
                        <h3 className="special-text">BECAME CLUB MEMBER </h3>
                        <p>Become a CLub Member Give back. Share your Cooking Skills will increase your knowledge too</p>
                    </div>




                </div>

            </div>












        </div >



    );
};

export default Home;