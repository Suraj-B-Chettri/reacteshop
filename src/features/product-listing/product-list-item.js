import React from 'react'
// src={`/products/${props.products.productProductPicUrl}`}
export default function ProductListItem(props) {
    return <div className="product-list-item">
        <h3>{props.Name}</h3>
        <img
        height ={100}
        title ={props.product.Name}
        src={props.product.ProductPicUrl}
 />
        <div>{props.product.Description}</div>
        <div>{props.product.Price}</div>
        <div>
            <button>Add to Cart</button>
        </div>
    </div>
}