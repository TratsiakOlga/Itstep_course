import React, {useState} from "react";

const ProductFotm = ({ onAddProduct}) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        discountedPrice: '',
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setProduct((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.name || !product.price) return alert ('Заполните название и цену!');

        onAddProduct({ ...product, id: Date.now()});

        setProduct({ name: '', description: '', imageUrl: '', price: '', discountedPrice: ''});
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Добавить товар</h2>
            <input
            type="text"
            name="name"
            placeholder="Название товара"
            value={product.name}
            onChange={handleChange}
            required
            />
            <textarea
            name="description"
            placeholder="Краткое описание товара"
            value={product.description}
            onChange={handleChange}
            />
            <input
            type="url"
            name="imageUrl"
            placeholder="Ссылка на изображение"
            value={product.imageUrl}
            onChange={handleChange}
            />
            <input
            type="number"
            name="price"
            placeholder="Цена"
            value={product.price}
            onChange={handleChange}
            required
            />
             <input
            type="number"
            name="discountedPrice"
            placeholder="Цена со скидкой"
            value={product.discountedPrice}
            onChange={handleChange}
            />
            <button type="submit">
                Добавить
            </button>
        </form>
    );
};

export default ProductFotm;