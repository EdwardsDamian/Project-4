import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userprofileClient from '../clients/userprofileClient'
import styled from 'styled-components' 

class UsersList extends Component {
    state = {
        userslist: [],
        popupActive: false,
        editUsersList: {}
    }

    async componentDidMount() {
        let userslist = await userprofileClient.getAll()
        this.setState({userslist: userslist})
    }

    editUserProfile = (userProfile) => {
        this.setState({popupActive: true, editUserProfile: userProfile})
    }
    
    saveUserProfile = async (event, userProfile) => {
        event.preventDefault();
        if(userProfile.id ===''){
            await userprofileClient.create(userProfile)
        } else {
            await userprofileClient.update(userProfile)
        }
        let userslist = await userprofileClient.getAll()
        this.setState({popupActive: false, userslist: userslist})
    }

    deleteUserProfile = async (userProfileId) => {
        await userprofileClient.delete(userProfileId)
        let userslist = await userprofileClient.getAll()
        this.setState({userslist: userslist})
    }

    render() {
        return (
            <div>
                <h1>Your Pantry App - Users Listing</h1>
                <ul>
                    {this.state.userslist.map(user =>(
                        <li key={user.id}>
                            <Link to={`/userslist/${user.name}`}>{user.name}</Link>
                            <button onClick={() => this.editUserProfile(user)}>Edit</button>
                            <button onClick={() => this.deleteUserProfile(user)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => this.editUserProfile({id:'', name: '', address: '', city: '', state: '', zip_code: ''})}>Add a User</button>
                {this.state.popupActive && <EditUsersListComponent onSave={this.saveUserProfile} userProfile={this.state.editUserProfile}/>}
            </div>
        )
    }
}
class EditUsersListComponent extends Component{
    constructor(props){
        super(props)
        this.state = {userProfile: props.userProfile}
    }
    onUserProfileChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState(prevState => ({
            userProfile: {
                ...prevState.userProfile,
                [name]: value 
            }
        }))
    }
    
    render() {
        return (
        <div>
            <form onSubmit={(event) => this.props.onSave(event, this.state.userProfile)}>
                <input type="hidden" name="id" value={this.state.userProfile.id} onChange={this.onUserProfileChange} />
                <label>Name</label>
                <input type="text" name="name" value={this.state.userProfile.name} onChange={this.onUserProfileChange} />
                <label>Address</label>
                <input type="text" name="address" value={this.state.userProfile.address} onChange={this.onUserProfileChange} />
                <label>City</label>
                <input type="text" name="city" value={this.state.userProfile.city} onChange={this.onUserProfileChange} />
                <label>State</label>
                <input type="text" name="state" value={this.state.userProfile.state} onChange={this.onUserProfileChange} />
                <label>Zip Code</label>
                <input type="text" name="zip_code" value={this.state.userProfile.zip_code} onChange={this.onUserProfileChange} />
                <button>Save</button>
            </form>
        </div>
        )
    }
}

export default UsersList