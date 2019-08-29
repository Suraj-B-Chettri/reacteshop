import React from 'react';
import ProductListing from '../features/product-listing';
import data from '../data/product.json';

export default function HomePage(props) {
    return <div>
       <ProductListing products = {data.ProductCollection} />
    </div>
}