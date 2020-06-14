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
        <h1>Star Wars Character</h1>
        <div style={{ margin: 12}}>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name of Character: </Form.Label>
                <Form.Control 
                required
                type="name"
                id="1"
                placeholder="Luke Skywalker"
                />
                {' '}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            {
                character.map(val =>(
                    <ListGroup>
                    <ListGroup.Item key={val.name}>
                        <h1>
                            
                            {val.name}
                        </h1>
                    </ListGroup.Item>
                    <ListGroup.Item key={val.height}>
                        <div>
                            Height: {' '}
                            {val.height}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item key={val.hair_color}>
                        <div>
                            Hair Color: {' '}
                            {val.hair_color}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item key={val.gender}>
                        <div>
                            Gender: {' '}
                            {val.gender}
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item key={val.created}>
                        <div>
                            Created: {' '}
                            {val.created}
                        </div>
                    </ListGroup.Item>
                    </ListGroup>
                )
                    )
            }
        </div>
        </>
    );
}

export default Home;