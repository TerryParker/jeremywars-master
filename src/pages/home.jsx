import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CharacterSearch from '../components/CharacterSearch';
import HomeInfo from '../components/HomeInformation';

function Home () {
    const [display, setDisplay] = useState(false);

    const handleSubmit= () => {
        var hideButton = document.getElementById("learn");
        if(hideButton.style.display === "none"){
            hideButton.style.display = "block";
        } else {
            hideButton.style.display = "none";
        }
        setDisplay(true);

    }
    return (
        <>
        <div>
        {display ? <CharacterSearch/> : <HomeInfo/> }
        </div>
        <center>
        <Button id="learn" variant="contained"  size="large" onClick={handleSubmit}>This Button</Button>
        </center>
        </>
    );
}

export default Home;