import {useState, useEffect} from 'react';

export default function CatalogForm({onSubmit, handlers, errors}){
    useEffect(() => {
        console.log(errors);
    }, [errors]);
    return (
        <form className="catalog-form" onSubmit={onSubmit}>
            <h2 className="mb-3">Добавить товар</h2>
            <div className="mb-3">
                <label htmlFor="product-name" className="form-label">Название товара</label>
                <input type="text" className={errors.name ? "form-control is-invalid" : "form-control"} id="product-name" name="product-name" onChange={handlers.name}/>
                {errors.name ? <div className="invalid-feedback">Введите название товара</div>  : ''}
            </div>
            <div className="mb-3">
                <label htmlFor="product-description" className="form-label">Карткое описание</label>
                <textarea className={errors.description ? "form-control is-invalid" : "form-control"} id="product-description" name="product-description" onChange={handlers.description}></textarea>
                {errors.description ? <div className="invalid-feedback">Введите описание товара</div>  : ''}
            </div>
            <div className="mb-3">
                <label htmlFor="product-image" className="form-label">Ссылка на изображение</label>
                <input type="text" className={errors.image ? "form-control is-invalid" : "form-control"} id="product-image" name="product-image" onChange={handlers.image}/>
                {errors.image ? <div className="invalid-feedback">Введите ссылку на изображение</div>  : ''}
            </div>
            <div className="mb-3">
                <label htmlFor="product-price" className="form-label">Цена (BYN)</label>
                <input type="number" className="form-control" id="product-price" name="product-price" onChange={handlers.price}/>
            </div>
            <div className="mb-3">
                <label htmlFor="product-sale" className="form-label">Цена со скидкой (BYN)</label>
                <input type="number" className="form-control" id="product-sale" name="product-sale" onChange={handlers.sale} />
            </div>
            <button type="submit" className="btn btn-dark w-100">Отправить</button>
        </form>
    );
}