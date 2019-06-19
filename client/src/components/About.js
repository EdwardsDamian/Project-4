import React, { Component } from 'react' 

class About extends Component {

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Your Pantry App (yPa) was developed by Damian Edwards, PMP as part of a project assignment during a 12-week long software engineering bootcamp immersive course</p><br></br>
                <br></br>

                <p>Contact Us</p>
                <div className="about-item"><a color="white" href="mailto:damianedwards@msn.com">damianedwards@msn.com</a></div>
                <div className="about-item"><span className="about-item">☎︎404.402.9381</span></div>
                <div className="about-item"><a href="https://edwardsdamian.github.io/" target="_blank" rel="noopener noreferrer">Click here to see Damian's website</a></div>
                

                
            </div>
        )
    }
}

export default About