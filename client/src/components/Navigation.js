import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Styles = styled.div`
    margin: .01em auto;
    `;



class Navigation extends Component {
    render() {
        return (
            <Styles>
            <div className="nav">
                <div className="nav-item"><span className="nav-logo">🍞yPa🥛</span></div>
                <div className="nav-item"><Link to="/home">Home</Link></div>
                <div className="nav-item"><Link to="/about">About</Link></div>
                <div className="nav-item"><Link to="/newusers">New Users</Link></div>
                <div className="nav-item"><Link to="/userslist">Existing Users</Link></div>
            </div>
            </Styles>
        )
    }

}
export default Navigation