import React, {useEffect, useState} from 'react';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import Loader from './Loader';

export default function Storefront() {
    //Variables
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validation, setValidation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-tutorial-demo.firebaseio.com/products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false));
        if(products.length === 0) {
            document.title = `No products`;
        } else if (products.length === 1) {
            document.title = `1 product`;
        } else {
            document.title = `${products.length} products`;
        }
    }, []);

    //Functions
    function handleAddProduct (e) {
        e.preventDefault();
        if(!name && !description) {
            setValidation('Please enter a name and description');
        } else if(!name) {
            setValidation('Please enter a name');
        } else if(!description) {
            setValidation('Please enter a description');
        } else {
            setProducts([...products, {
                id: products.length,
                name: name,
                description: description
            }]);
            setName('');
            setDescription('');
        }

        fetch('https://api-learnjavascript.online/demo/react/admin/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
    function handleDelete (id) {
        setProducts(products.filter(product => product.id !== id));
    }
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    //Action
    return (<>
        {isLoading && <Loader />}
        <div>{products.length === 0 && <p>Add your first product</p>}</div>
        <AddProductForm onAddProduct={handleAddProduct} name={name} description={description} onNameChange={handleNameChange} onDescriptionChange={handleDescriptionChange} validation={validation} />
        <ProductsList onDelete={handleDelete} products={products} />
    </>);
}