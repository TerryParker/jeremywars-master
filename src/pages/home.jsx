import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Home () {

    const handleSubmit = event => {
        alert("You did it!");
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