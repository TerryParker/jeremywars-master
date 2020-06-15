import React from 'react';
import './StarWarsFont.css';
import {Button} from 'react-bootstrap';

function HomeInfo () {

    return (
        <>
        
        <center>
            <div className="starwarsFont top-space" style={{color:"yellow"}}>
            <div style={{fontSize:"80px"}}>Jeremy Wars</div>
        <div style={{fontSize:"30px" , width:"50%"}}>
        Welcome to Jeremy Wars where you can find all of your Star Wars information. Through here you'll be able to search results on your favorite
        characters, planets, vehicles, and species that the Star Wars Universe has brought us. Enjoy your discovery!
        </div>
        <div className="button-space top-button">
        <Button size="lg" variant="outline-light"  href="/character">Character Search</Button>
        </div>
        <div className="button-space">
        <Button size="lg" variant="outline-light"  href="/planet">Planet Search  </Button>
        </div>
        <div className="button-space">
        <Button size="lg" variant="outline-light"  href="/vehicle">Vehicle Search</Button>
        </div>
        <div className="button-space">
        <Button size="lg" variant="outline-light"  href="/species">Species Search</Button>
        </div>
        </div>
        </center>
        
        </>
    )
}
export default HomeInfo;