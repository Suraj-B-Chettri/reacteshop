import React from 'react';
import AddButton from './add-btn'
import RemoveButton from './remove-btn';
// src={`/products/${props.products.productProductPicUrl}`}
export default function ProductListItem(props) {
    // const thisItemInCart = props.cart.filter(item => item.ProductId === props.product.ProductId )[0]
    return <div className="product-list-item">
        <h3>{props.product.Name}</h3>
        <img
        height ={100}
        title ={props.product.Name}
        src={props.product.ProductPicUrl}
        alt={props.product.Name}
        />
        <div>Description: {props.product.Description}</div>
        <div>Price: ${props.product.Price}</div>
        
        <AddButton addToCart={props.addToCart} cartItem={props.cartItem} product ={props.product} />
        
        {
            props.cartItem
            ? <RemoveButton cartItem = {props.cartItem} removeFromCart ={props.removeFromCart} />
            : null
        }
    </div>
}