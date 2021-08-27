function ProductCard({ sku, name, price, index, isChecked, product}) {
    return (
        <li className="cards-list-item" key={index}>
            <input onChange={isChecked} value={product.id} type="checkbox" className="checkbox-input visually-hidden" id={index}/>
            <label for={index} className="product-id">{sku}</label>
            <h2>{name}</h2>
            <p>{price} $</p>
            <p>Size: 700 MB</p>
        </li>
    );
}

export default ProductCard;