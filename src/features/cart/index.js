import React from 'react'
import {connect } from 'react-redux'


function sort(items) {
    console.log(items)
    return items.sort((a,b)=> a.ProductId <  b.ProductId )
}

function Cart(props) {
    return (<div>
        <table>
            <thead>
                <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Actions</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                   sort(props.cart).map(item => <tr>
                        <td>{item.Name}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button onClick = {(e) => props.addToCart(item)} >+</button>
                            <button onClick = {(e) => props.removeToCart(item)} >-</button>
                        </td>
                        <td>
                        <button onClick = {(e) => props.removeAllFromCart(item)} >Remove all</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>)
}


function mapStateToProps(state) {
    return{
        cart : state.cart
    }
        
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart : (item)=>{
            dispatch({type: 'ADD', payload: item})
        },
        removeToCart: (item) =>{
            dispatch({type: 'REMOVE', payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type:'REMOVE_ALL', payload: item})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
