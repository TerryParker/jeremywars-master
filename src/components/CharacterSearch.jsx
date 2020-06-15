import React, { useState, useEffect } from 'react';
import { Form, ListGroup, Button, Col} from 'react-bootstrap';
import './StarWarsFont.css';
import starwarsAudio from '../assets/starwarsTheme.mp3';

function CharacterSearch () {
    const [character, setCharacter] = useState([]);
    useEffect(() => console.log(character), [character]);

   const playAudio = () => {
        const submitAudio = document.getElementsByClassName("submit-audio")[0]
        submitAudio.play()
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const userInput = document.getElementById('1')
        var starWarsCharacter = userInput.value;
        console.log(starWarsCharacter);
        fetch(`/people/?search=${starWarsCharacter}`, {
        headers: {
            "Accept": "application/json"
        }})
        .then(resp => resp.json()
        .then(json => {
            console.log(json);
            setCharacter( json.results);
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
                        <Form.Label style={{color: "yellow", fontSize:"30px"}}>Name of Character: </Form.Label>
                        <Form.Control 
                        required
                        size="lg"
                        type="name"
                        id="1"
                        placeholder="Luke Skywalker"
                        />
                        </Col>
                        <Button type="submit" variant="outline-light" size="lg">Submit</Button>
                            <audio className="submit-audio">
                                <source src={starwarsAudio}/>
                            </audio>
                    </Form>
                    <div className="crawl">
                    {
                        character.map(val =>(
                            <ListGroup key={character}>
                            <ListGroup.Item key={val.name}>
                                <div className="characterName">
                                    {val.name}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.height}>
                                <div className="attributes">
                                    Height: {' '}
                                    {val.height}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.hair_color}>
                                <div className="attributes">
                                    Hair Color: {' '}
                                    {val.hair_color}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.gender}>
                                <div className="attributes">
                                    Gender: {' '}
                                    {val.gender}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.created}>
                                <div className="attributes">
                                    Created: {' '}
                                    {val.created.substr(0,10)}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.birth_year}>
                                <div className="attributes">
                                    Birth Year: {' '}
                                    {val.birth_year}
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

export default CharacterSearch;