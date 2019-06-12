import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userprofileClient from '../clients/userprofileClient'
import pantryClient from '../clients/pantryClient'
import itemClient from '../clients/itemClient'
import styled from 'styled-components'

class User extends Component {
    state = {
        itemsList: [],
        itemPopupActive: false,
        pantryList: [],
        pantryPopupActive: false,
        editItemsList:{},
        editPantryList:{}
    }
    async componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        let itemsList = await itemClient.getAll()
        this.setState({itemsList: itemsList})
        let pantryList = await pantryClient.getAll()
        this.setState({pantryList: pantryList})
    }
    editItem = (item) => {
        this.setState({itemPopupActive: true, editItem: item})
    }
    saveItem = async (event, item) => {
        event.preventDefault();
        if(item.id ===''){
            await itemClient.create(item)
        } else {
            await itemClient.update(item)
        }
        let itemsList = await itemClient.getAll()
        this.setState({itemPopupActive: false, itemsList: itemsList})
    }
    deleteItem = async (itemId) => {
        await itemClient.delete(itemId)
        let itemsList = await itemClient.getAll()
        this.setState({itemsList: itemsList})
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
        let pantryList = await pantryClient.getAll()
        this.setState({pantryPopupActive: false, pantryList: pantryList})
    }
    deletePantry = async (pantryId) => {
        await pantryClient.delete(pantryId)
        let pantryList = await pantryClient.getAll()
        this.setState({pantryList: pantryList})
    }

    render() {
        return (
            <div>
                {/* {user.name}'s */}
                <h1> Pantry Listings</h1>
                <ul>
                    {this.state.pantryList.map(pantry =>(
                        <li key={pantry.id}>
                            <Link to = {`/pantries/${pantry.id}`}>{pantry.location}</Link>
                            <button onClick={() => this.deletePantry(pantry.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
                {/* {user.name}'s */}

                <h1> Item Listings</h1>
                <ul>
                    {this.state.itemsList.map(item =>(
                        <li key={item.id}>
                            <Link to = {`/items/${item.id}`}>{item.name}</Link>
                            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}
export default User