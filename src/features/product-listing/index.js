import React from 'react'
import ProductListItem from './product-list-item';
import { connect } from 'react-redux';

 function ProductListing(props) {
    return <div className="product-listing">
        {
            props.products.map(product =>
                <ProductListItem key={product.ProductId} 
                                 product = {product}
                                 addToCart = {props.addToCart}
                                 removeFromCart = {props.removeFromCart}
                                 cartItem = {props.cart.filter(cartItem => cartItem.ProductId === product.ProductId)[0]}/>)
        }
    </div>
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) =>{
            dispatch({type:'ADD', payload: item})
        },
        removeFromCart: (item) =>{
            dispatch({type:'REMOVE', payload: item})
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)