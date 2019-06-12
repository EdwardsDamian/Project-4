import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import userprofileClient from '../clients/userprofileClient'
import pantryClient from '../clients/pantryClient'
import itemClient from '../clients/itemClient'
import styled from 'styled-components'

class Items extends Component {
    state = {
        items:[],
        itemPopupActive: false,
        editItemsList:{},

    }
    async componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        let items = await itemClient.getAll()
        this.setState({items: items})
        let itemId = this.props.match.params.itemId
        console.log(itemId)
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
        let items = await itemClient.getAll()
        this.setState({itemPopupActive: false, items: items})
    }
    deleteItem = async (itemId) => {
        await itemClient.delete(itemId)
        let items = await itemClient.getAll()
        this.setState({items: items})
    }
    render() {
        return (
            <div>
                <h1>Hello World from Items.js</h1>
                <h1> Item Listings</h1>
                    {this.state.items.map(item =>{return(
                <ul>
                        <li key={item.id}>
                            <Link to = {`/items/${item.id}`}>{item.name}</Link>
                            <button onClick={() => this.editItem(item.id)}>Edit</button>
                            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
                        </li>
                </ul>
                    )})}
                <button onClick={() => this.editItem({id:'', name: '', description: '', size: '', is_perishable: '', expiration_date: '', purchase_date:''})}>Add an Item</button>
                {this.state.itemPopupActive && <EditItemsComponent onSave={this.saveItem} item={this.state.editItem}/>}
            </div>
        )
    }

}
class EditItemsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {item: props.item}
    }
    onItemChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                [name]: value 
            }
        }))
    }
    
    render() {
        return (
        <div>
            <form onSubmit={(event) => this.props.onSave(event, this.state.item)}>
                <input type="hidden" name="id" value={this.state.item.id} onChange={this.onItemChange} />
                <label>Name</label>
                <input type="text" name="name" value={this.state.item.name} onChange={this.onItemChange} />
                <label>Description</label>
                <input type="text" name="description" value={this.state.item.description} onChange={this.onItemChange} />
                <label>Size</label>
                <input type="text" name="size" value={this.state.item.size} onChange={this.onItemChange} />
                <label>Perishable (if yes, checkbox)</label>
                <input type="checkbox" name="is_perishable" value={this.state.item.is_perishable} onChange={this.onItemChange} />
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
export default Items