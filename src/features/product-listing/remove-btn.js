import React from 'react'

export default function RemoveButton(props) {
    return (
        <div>
        <button 
            onClick={() => props.removeFromCart(props.cartItem)} >Remove
        </button>
        </div>
    )
}