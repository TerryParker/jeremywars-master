import React, { useState, useEffect } from 'react';
import { Form, Button, Col} from 'react-bootstrap';
import './StarWarsFont.css';
import starwarsAudio from '../assets/starwarsTheme.mp3';

function PlanetSearch () {
    const [planet, setPlanet] = useState([]);
    useEffect(() => console.log(planet), [planet]);

   const playAudio = () => {
        const submitAudio = document.getElementsByClassName("submit-audio")[0]
        submitAudio.play()
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const userInput = document.getElementById('1')
        var starWarsPlanet = userInput.value;
        console.log(starWarsPlanet);
        fetch(`/planets/?search=${starWarsPlanet}`, {
        headers: {
            "Accept": "application/json"
        }})
        .then(resp => resp.json()
        .then(json => {
            console.log(json);
            setPlanet( json.results);
        }));
        playAudio();
    }
    
    return (
        <>
        <div class="starwarsFont top-space">
            <center>
            <div style={{color: "yellow", fontSize:"70px"}}>Star Wars </div>
                <div >
                    <Form onSubmit={handleSubmit}>
                    <Col sm={3}>
                        <Form.Label style={{color: "yellow", fontSize:"30px"}}>Name of Planet: </Form.Label>
                        <Form.Control 
                        required
                        size="lg"
                        type="name"
                        id="1"
                        placeholder="Tatooine"
                        />
                        </Col>
                        <Button type="submit" variant="outline-light" size="lg">Submit</Button>
                            <audio className="submit-audio">
                                <source src={starwarsAudio}/>
                            </audio>
                    </Form>
                    <div className="crawl">
                    {
                        planet.map(val =>(
                            <>
                                <div className="characterName">
                                    {val.name}
                                </div>
                            
                                <div className="attributes">
                                    Population: {' '}
                                    {val.population}
                                </div>

                                <div className="attributes">
                                    Diameter: {' '}
                                    {val.diameter}
                                </div>

                                <div className="attributes">
                                    Terrain: {' '}
                                    {val.terrain}
                                </div>

                                <div className="attributes">
                                    Created: {' '}
                                    {val.created.substr(0,10)}
                                </div>

                                <div className="attributes">
                                    Orbital Period: {' '}
                                    {val.orbital_period}
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

export default PlanetSearch;