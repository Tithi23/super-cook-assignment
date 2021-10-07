import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css'





const ServiceDetails = () => {
    const { id } = useParams();

    console.log(id);

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])




    return (
        <Container className="service-details">

            <h1>Service Id : {id}</h1>

        </Container>
    );
};

export default ServiceDetails;