import React, { useState, useEffect } from 'react';
import { Form, Button, Col} from 'react-bootstrap';

import './StarWarsFont.css';
import starwarsAudio from '../assets/starwarsTheme.mp3';

function VehicleSearch () {
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => console.log(vehicle), [vehicle]);

   const playAudio = () => {
        const submitAudio = document.getElementsByClassName("submit-audio")[0]
        submitAudio.play()
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const userInput = document.getElementById('1')
        var starWarsVehicle = userInput.value;
        console.log(starWarsVehicle);
        fetch(`/vehicles/?search=${starWarsVehicle}`, {
        headers: {
            "Accept": "application/json"
        }})
        .then(resp => resp.json()
        .then(json => {
            console.log(json);
            setVehicle( json.results);
        }));
        playAudio();
    }
    
    return (
        <>
        <div className="starwarsFont top-space">
            <center>
            <div style={{color: "yellow", fontSize:"70px"}}>Star Wars </div>
                <div >
                    <Form onSubmit={handleSubmit}>
                    <Col sm={3}>
                        <Form.Label style={{color: "yellow", fontSize:"30px"}}>Name of Vehicle: </Form.Label>
                        <Form.Control 
                        required
                        size="lg"
                        type="name"
                        id="1"
                        placeholder="Sand Crawler"
                        />
                    </Col>
                        <Button type="submit" variant="outline-light" size="lg">Submit</Button>
                            <audio className="submit-audio">
                                <source src={starwarsAudio}/>
                            </audio>
                    </Form>
                    <div className="crawl">
                    {
                        vehicle.map(val =>(
                            <>
                                <div className="characterName">
                                    {val.name}
                                </div>

                                <div className="attributes">
                                    Model: {' '}
                                    {val.model}
                                </div>

                                <div className="attributes">
                                    Length: {' '}
                                    {val.length}
                                </div>
                                
                                <div className="attributes">
                                    Crew: {' '}
                                    {val.crew}
                                </div>

                                <div className="attributes">
                                    Created: {' '}
                                    {val.created.substr(0,10)}
                                </div>

                                <div className="attributes">
                                    Cargo Capacity: {' '}
                                    {val.cargo_capacity}
                                </div>
                            </>
                        )
                        )
                    }
                    </div>
                </div>
            </center>
        </div>
        </>
    );
}

export default VehicleSearch;