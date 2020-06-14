import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function Home () {
    const [character, setCharacter] = useState([]);
    useEffect(() => console.log(character), [character]);

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
    }
    
    return (
        <>
        <div>
            <center>
            <h1 style={{color: "yellow"}}>Star Wars Character</h1>
                <div >
                    <Form onSubmit={handleSubmit}>
                        <Form.Label style={{color: "yellow"}}>Name of Character: </Form.Label>
                        <Form.Control 
                        required
                        type="name"
                        id="1"
                        placeholder="Luke Skywalker"
                        />
                        {' '}
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    <div>
                    {
                        character.map(val =>(
                            <ListGroup key={character}>
                            <ListGroup.Item key={val.name}>
                                <h1 style={{color: "yellow"}}>
                                    
                                    {val.name}
                                </h1>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.height}>
                                <div style={{color: "yellow"}}>
                                    Height: {' '}
                                    {val.height}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.hair_color}>
                                <div style={{color: "yellow"}}>
                                    Hair Color: {' '}
                                    {val.hair_color}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.gender}>
                                <div style={{color: "yellow"}}>
                                    Gender: {' '}
                                    {val.gender}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item key={val.created}>
                                <div style={{color: "yellow"}}>
                                    Created: {' '}
                                    {val.created.substr(0,10)}
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

export default Home;