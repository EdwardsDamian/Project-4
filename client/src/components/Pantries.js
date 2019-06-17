import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userprofileClient from '../clients/userprofileClient'
import pantryClient from '../clients/pantryClient'
import itemClient from '../clients/itemClient'
import styled from 'styled-components'

class Pantries extends Component {
    state = {
        pantries: [],
        pantryPopupActive: false,
        editPantryList:{}
    }
    async componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        let pantries = await pantryClient.getAll()
        this.setState({pantries: pantries})
        let pantryId = this.props.match.params.pantryId
        console.log(pantryId)
    }
    editPantry = (pantry) => {
        this.setState({pantryPopupActive: true, editPantry: pantry})
    }
    savePantry = async (event, pantry) => {
        event.preventDefault();
        if(pantry.id ===''){
            await pantryClient.create(pantry)
        } else {
            await pantryClient.update(pantry)
        }
        let pantries = await pantryClient.getAll()
        this.setState({pantryPopupActive: false, pantries: pantries})
    }
    deletePantry = async (pantryId) => {
        await pantryClient.delete(pantryId)
        let pantries = await pantryClient.getAll()
        this.setState({pantries: pantries})
    }
    render() {
        return (
            <div className="component-center">
                <h1>Hello World from Pantries.js</h1>
                <h1> Pantry Details</h1>
                <ul>
                    {this.state.pantries.map(pantry =>(
                        <li key={pantry.id}>
                            <Link to = {`/pantries/${pantry.id}`}>{pantry.location}</Link>
                            <button onClick={() => this.editPantry(pantry.id)}>Edit</button>
                            <button onClick={() => this.deletePantry(pantry.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                <button onClick={() => this.editPantry({id:'', location: ''})}>Add Pantry / Food Storage Location</button>
                {this.state.pantryPopupActive && <EditPantriesComponent onSave={this.savePantry} pantry={this.state.editPantry}/>}
            </div>
        )
    }

}
class EditPantriesComponent extends Component{
    constructor(props){
        super(props)
        this.state = {item: props.pantry}
    }
    onPantryChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState(prevState => ({
            pantry: {
                ...prevState.pantry,
                [name]: value 
            }
        }))
    }
    
    render() {
        return (
        <div>
            <form onSubmit={(event) => this.props.onSave(event, this.state.pantry)}>
                <input type="hidden" name="id" value={this.state.pantry.id} onChange={this.onPantryChange} />
                <label>Location</label>
                <input type="text" name="location" value={this.state.pantry.location} onChange={this.onPantryChange} />
                <button>Save</button>
            </form>
        </div>
        )
    }
}
export default Pantries