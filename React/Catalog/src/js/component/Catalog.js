import {useState, useEffect} from 'react';
import CatalogForm from './CatalogForm';
import CatalogList from './CatalogList';

export default function Catalog(){
    const [products, setProducts] = useState(() => {
        return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    });
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSale, setProductSale] = useState('');

    const [errors, setErrors] = useState({
       name: false,
       description: false,
       image: false 
    });

    function reset(){
        setProductName('');
        setProductDescription('');
        setProductImage('');
        setProductPrice('');
        setProductSale('');
    }

    const handlers = {
        name: e => setProductName(e.target.value),
        description: e => setProductDescription(e.target.value),
        image: e => setProductImage(e.target.value),
        price: e => setProductPrice(e.target.value),
        sale: e => setProductSale(e.target.value) 
    }

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    function handleSubmit(event){
        event.preventDefault();

        setErrors({...errors, name: !productName, description: !productDescription, image: !productImage});
        
        if(productName && productDescription && productImage){
            const newProduct = {
                name: productName,
                description: productDescription,
                image: productImage,
                price: productPrice,
                sale: productSale
            };

            setProducts([...products, newProduct]);

            reset();
        }
    }

    return (
        <>
            <CatalogForm onSubmit={handleSubmit} handlers={handlers} errors={errors} />
            <CatalogList products={products} />
        </>
    );
}