import React, { useState, useEffect } from 'react';
import { Form, ListGroup, Button, Col} from 'react-bootstrap';
import './StarWarsFont.css';
import starwarsAudio from '../assets/starwarsTheme.mp3';

function SpeciesSearch () {
    const [species, setSpecies] = useState([]);
    useEffect(() => console.log(species), [species]);

   const playAudio = () => {
        const submitAudio = document.getElementsByClassName("submit-audio")[0]
        submitAudio.play()
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const userInput = document.getElementById('1')
        var starWarsSpecies = userInput.value;
        console.log(starWarsSpecies);
        fetch(`/species/?search=${starWarsSpecies}`, {
        headers: {
            "Accept": "application/json"
        }})
        .then(resp => resp.json()
        .then(json => {
            console.log(json);
            setSpecies( json.results);
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
                        <Form.Label style={{color: "yellow", fontSize:"30px"}}>Name of Species: </Form.Label>
                        <Form.Control 
                        required
                        size="lg"
                        type="name"
                        id="1"
                        placeholder="Wookie"
                        />
                    </Col>
                        <Button type="submit" variant="outline-light" size="lg">Submit</Button>
                            <audio className="submit-audio">
                                <source src={starwarsAudio}/>
                            </audio>
                    </Form>
                    <div className="crawl">
                    {
                        species.map(val =>(
                            <ListGroup key={species}>
                            <ListGroup.Item key={val.name}>
                                <div className="characterName">
                                    {val.name}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.language}>
                                <div className="attributes">
                                    Language: {' '}
                                    {val.language}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.average_height}>
                                <div className="attributes">
                                    Average Height: {' '}
                                    {val.average_height}
                                    {' '}
                                    cm
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.average_lifespan}>
                                <div className="attributes">
                                    Average Lifespan: {' '}
                                    {val.average_lifespan}
                                    {' '}
                                    years
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.created}>
                                <div className="attributes">
                                    Created: {' '}
                                    {val.created.substr(0,10)}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.classification}>
                                <div className="attributes">
                                    Classification: {' '}
                                    {val.classification}
                                </div>
                            </ListGroup.Item>
                            </ListGroup>
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

export default SpeciesSearch;