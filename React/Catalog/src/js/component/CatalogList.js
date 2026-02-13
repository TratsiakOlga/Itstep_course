export default function CatalogList({products}){
    return (<div className="catalog-inner">
        <div className="catalog-header">
            <h2>Каталог товаров</h2>
        </div>
        <div className="catalog-list">
            {
                (products.length > 0) ? 
                    products.map((product) => {
                        return (<div className="product-card mb-2">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-description p-3 pt-0">
                                        <h3 className="mb-2">{product.name}</h3>
                                        {
                                            product.description ? <p>{product.description}</p> : ""
                                        }
                                    </div>
                                    <div className={product.sale ? "product-prices prices-sale" : "product-prices"}>
                                        {product.sale ? <span>{product.sale} BYN</span> : ""}
                                        {product.price ? <span>{product.price} BYN</span> : ""}
                                    </div>
                                </div>);
                    })
                : "Товаров пока нет"
            }
        </div>
    </div>);
}