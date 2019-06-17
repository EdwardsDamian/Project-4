import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    margin: .01em auto;
    `;
// export const Navigation = () => (

//     <Styles>
//         <Navbar expand="lg" >
//         <Navbar.Brand href="/">Logo Here</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//                 <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
//                 <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
//                 <Nav.Item><Nav.Link href="/newusers">New Users</Nav.Link></Nav.Item>
//                 <Nav.Item><Nav.Link href="/newusers">Existing Users</Nav.Link></Nav.Item>
//             </Nav>
//         </Navbar.Collapse>
//                 </Navbar>
//             </Styles >

// )



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