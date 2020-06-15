import React, { useState, useEffect } from 'react';
import { Form, Button, Col} from 'react-bootstrap';
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
                                <>
                                <div className="characterName">
                                    {val.name}
                                </div>
                           
                                <div className="attributes">
                                    Height: {' '}
                                    {val.height}
                                </div>
                            
                                <div className="attributes">
                                    Hair Color: {' '}
                                    {val.hair_color}
                                </div>
                            
                                <div className="attributes">
                                    Gender: {' '}
                                    {val.gender}
                                </div>
                            
                                <div className="attributes">
                                    Created: {' '}
                                    {val.created.substr(0,10)}
                                </div>
                            
                                <div className="attributes">
                                    Birth Year: {' '}
                                    {val.birth_year}
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

export default CharacterSearch;