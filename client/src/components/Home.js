import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Hello World from Home.js</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum</p>
                <div className="nav-item"><Link to="/userslist">Existing Users (Click Here)</Link></div>
            </div>
        )
    }
}

export default Home