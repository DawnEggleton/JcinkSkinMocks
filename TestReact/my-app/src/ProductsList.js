import React from 'react';
import Product from './Product';

export default function ProductsList(props) {
    return (<>
        <ul className="store-front">
            {props.products.map(product => {
                return (<li key={product.id}>
                    <Product details={product} />
                    <button className="btn-outline btn-delete" onClick={() => props.onDelete(product.id)}>Delete</button>
                </li>);
            })}
        </ul>
    </>)
}