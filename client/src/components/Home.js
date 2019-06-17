import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
    



    `;
class Home extends Component {

    render() {
        return (
            <Styles>
            <div>
                <h1>Home</h1>
                <p>Welcome to Your Pantry App (yPa)</p>
                <p>yPa allows its users to manage and track perishable goods and other pantry foodstuffs.  Whether its in the dry goods cabinet, refrigerator or that bunker you've setup for the zombie apocalypse, yPa is your food storage tracking solution.  After you've setup the user profile (including a zip code), identify all pantry / food storage locations; and, then virtually 'store' your items within the appropriate location(s).  As an additional benefit, users are also able to get distances and names of local Farmers Markets in proximity to their zip code.</p>
                <div className="nav-item" ><Link to="/userslist">Existing Users (Click Here)</Link></div>
            </div>
            <div className="img-wrapper">
            <div className="pantry-img1"></div>
            <div className="pantry-img2"></div>
            </div>
            </Styles>
        )
    }
}

export default Home