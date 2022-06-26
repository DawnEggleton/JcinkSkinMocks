import React, {useState} from 'react';

export default function Product (props) {
    const [count, setCount] = useState(0);
    const {name, description, image} = props.details;

    function handleDecreaseCount () {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    function handleIncreaseCount() {
        setCount(count + 1);
    }

    if(!props.details) {
        return null;
    }

    return (<>
        <div className="product">
            <img width="50" alt="" src={image} />
            <div className="product-info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="product-buttons">
                <button className="product-sub" onClick={handleDecreaseCount} disabled={count === 0}>-</button>
                <h3>{count}</h3>
                <button className="product-add" onClick={handleIncreaseCount}>+</button>
            </div>
        </div>
    </>);
}