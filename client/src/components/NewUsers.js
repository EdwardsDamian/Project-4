import React, { Component } from 'react' 
import userprofileClient from '../clients/userprofileClient'

class NewUsers extends Component {
    state = {
        newUsers:[], 
        popupActive: false,
        userProfile: {}
    }
    async componentDidMount() {
        let newUsers = await userprofileClient.getAll()
        this.setState({newUsers: newUsers})
    }
    addUserProfile = (userProfile) => {
        this.setState({popupActive: true, addUserProfile: userProfile})
    }
    createNewUser = async (event, userProfile) => {
        event.preventDefault();
        if(userProfile.id ===''){
            // console.log(userProfile)
            await userprofileClient.create(userProfile)
        } else {
            await userprofileClient.update(userProfile)
        }
        let newUsers = await userprofileClient.getAll()
        this.setState({popupActive: false, newUsers: newUsers})
    }

    render() {
        return (
            <div>
                <h1>Welcome NewUsers</h1>
                <p>We hope you'll find yPa to be a convenient, easy-to-use application for tracking all your pantry's perishable foodstuffs. Should you have any comments or suggestions for improvements, please do not hesitate to contact us.  Click on the About menu above and send us your comments.</p>
                <button onClick={() => this.addUserProfile({id:'', name: '', address: '', city: '', state: '', zip_code: ''})}>Click here to add a New User</button>
                {this.state.popupActive && <AddUsersComponent onSave={this.createNewUser} userProfile={this.state.addUserProfile}/>}
                <div className="newuser-wrapper">
                <div className="newuser-img1"></div>
                <div className="newuser-img2"></div>
                </div>
            </div>
        )
    }
}
class AddUsersComponent extends Component{
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

export default NewUsers