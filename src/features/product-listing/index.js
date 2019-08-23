import React from 'react'
import ProductListItem from './product-list-item';

 function ProductListing(props) {
    return <div className="product-listing">
        {
            props.products.map(product =>
                <ProductListItem key={product.ProductId} product = {product}/>)
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
            dispatch({type:'Add', payload: item})
        },
        removeFromCart: (item) =>{
            dispatch({type:'REMOVE', payload: item})
        }

    }
}