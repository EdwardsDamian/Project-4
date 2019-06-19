import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userprofileClient from '../clients/userprofileClient'
import pantryClient from '../clients/pantryClient'
import itemClient from '../clients/itemClient'
import marketClient from '../clients/marketClient'
// import styled from 'styled-components'

class User extends Component {
    state = {
        user: null,

        itemPopupActive: false,

        pantryPopupActive: false,
        editItemsList: {},
        editPantryList: {},
        selectedPantry: {},
        markets:[]
    }
    async componentDidMount() {
        let userId = this.props.match.params.userId
        // console.log(userId)
        let user = await userprofileClient.get(userId)
        // console.log(user)
        this.setState({ user: user })
        let markets = await marketClient.getAll(user.zip_code)
        // console.log(markets)
        this.setState({markets: markets})
        // let itemsList = await itemClient.getAll()
        // this.setState({ itemsList: itemsList })
        let pantryList = await pantryClient.getAll()
        this.setState({ pantryList: pantryList })
    }
    editItem = (item) => {
        this.setState({ itemPopupActive: true, editItem: item })
    }
    saveItem = async (event, item) => {
        event.preventDefault();
        if (item.id === '') {
            await itemClient.create(item)
        } else {
            await itemClient.update(item)
        }

        let userId = this.props.match.params.userId
        let user = await userprofileClient.get(userId)
        this.setState({ 
            user: user,             
            itemPopupActive: false, 
        })
    }
    deleteItem = async (itemId) => {
        await itemClient.delete(itemId)
        let itemsList = await itemClient.getAll()
        this.setState({ itemsList: itemsList })
    }

    editPantry = (pantry) => {
        this.setState({ pantryPopupActive: true, editPantry: pantry })
    }
    savePantry = async (event, pantry) => {
        event.preventDefault();
        if (pantry.id === '') {
            await pantryClient.create(pantry)
        } else {
            await pantryClient.update(pantry)
        }

        let userId = this.props.match.params.userId
        let user = await userprofileClient.get(userId)
        console.log(user)
        this.setState({ 
            user: user,             
            pantryPopupActive: false, 
        })
    }
    
    deletePantry = async (pantryId) => {
        await pantryClient.delete(pantryId)
        let pantryList = await pantryClient.getAll()
        this.setState({ pantryList: pantryList })
    }

    render() {
        return (
            <div className="component-center">
                {this.state.user !== null && <div>
                    <h1>{this.state.user.name}'s Information</h1>
                    <h2>Pantry / Food Storage Locations</h2>
                    <ul>
                        {this.state.user.pantry.map(pantry => (
                            <li key={pantry.id}>
                                <Link to={`/pantries/${pantry.id}`}>{pantry.location}</Link>
                                <button onClick={() => this.deletePantry(pantry.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => this.editPantry({ id: '', location: '' })}>Add Pantry / Food Storage Area</button>
                    {this.state.pantryPopupActive && <EditPantryComponent onSave={this.savePantry} pantry={this.state.editPantry} userId={this.state.user.id} />}

                    <h2>Product Item Listings</h2>
                    <ul>
                        {this.state.user.items.map(item => (
                            <li key={item.id}>
                                <Link to={`/items/${item.id}`}>{item.name}</Link>
                                <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => this.editItem({ id: '', name: '', description: '', size: '', is_perishable: '', expiration_date: '', purchase_date: '' })}>Add Item</button>
                    {this.state.itemPopupActive && <EditItemComponent onSave={this.saveItem} item={this.state.editItem} pantryList={this.state.user.pantry} userId={this.state.user.id} />}
                    <h2>Farmers Markets Near {this.state.user.name}'s Zip Code</h2>
                    <ul>
                        {this.state.markets.map(market => (
                            <li key={market.id}>
                                {market.marketname}
                            </li>
                        ))}
                    </ul>

                </div>}
            </div>
        )
    }

}
class EditPantryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { pantry: {
            ...props.pantry,
        userprofile: this.props.userId }
    } }

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
            <div className="component-center">
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
class EditItemComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { item: {
            ...props.item,
            pantry: this.props.pantryList[0].id,
            userprofile: this.props.userId
        } }
    }
    onPerishableChange = () => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                is_perishable: !prevState.item.is_perishable
            }
        }))
    }

    onItemChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        console.log(name)
        console.log(value)
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                [name]: value
            }
        }))
    }
    render() {
        return (
            <div className="component-center">
                <form onSubmit={(event) => this.props.onSave(event, this.state.item)}>
                    <select name="pantry" onChange={this.onItemChange} value={this.state.selectedPantry}>
                        {this.props.pantryList.map((pantry, i) => (
                            <option key={pantry.id} value={pantry.id}>{pantry.location}</option>
                        ))}
                    </select>
                    <input type="hidden" name="id" value={this.state.item.id} onChange={this.onItemChange} />
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.item.name} onChange={this.onItemChange} />
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.item.description} onChange={this.onItemChange} />
                    <label>Size</label>
                    <input type="text" name="size" value={this.state.item.size} onChange={this.onItemChange} />
                    <label>Perishable (if yes, checkbox)</label>
                    <input type="checkbox" name="is_perishable" value={this.state.item.is_perishable} onChange={this.onPerishableChange} />
                    <label>Expiration Date</label>
                    <input type="date" name="expiration_date" value={this.state.item.expiration_date} onChange={this.onItemChange} />
                    <label>Purchase Date</label>
                    <input type="date" name="purchase_date" value={this.state.item.purchase_date} onChange={this.onItemChange} />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
export default User