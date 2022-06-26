import React from 'react';

export default function AddProductForm(props) {
    return (<>
        <form onSubmit={props.onAddProduct}>
            <div>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" placeholder="Enter the name" className="textfield" value={props.name} onChange={props.onNameChange} />
            </div>
            <div>
                <label htmlFor="product-description">Product Description</label>
                <input type="text" id="product-description" placeholder="Enter the description" className="textfield" value={props.description} onChange={props.onDescriptionChange} />
            </div>
            <div className="form-footer">
                <div className="validation-message">{props.validation}</div>
                <input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
    </>)
}