import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Home () {
    const [character, setCharacter] = useState([]);

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
        </div>
        </>
    );
}

export default Home;