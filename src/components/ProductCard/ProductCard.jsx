function ProductCard({ sku, name, price, index, isChecked, product}) {
    return (
        <li className="cards-list-item" key={index}>
            <input onChange={isChecked} value={product.id} type="checkbox" className="checkbox-input visually-hidden" id={index}/>
            <label for={index} className="product-id">{sku}</label>
            <h2>{name}</h2>
            <p>{price} $</p>
            {product.type === 'Book' &&
                <p>Weight: {product.weight} KG</p>
            }
            {product.type === 'DVD' &&
                <p>Size: {product.size} MB</p>
            }
            {product.type === 'Furniture' &&
                <p>Dimension: {product.height}X{product.width}X{product.length}</p>
            }
        </li>
    );
}

export default ProductCard;