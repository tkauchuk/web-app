import React, { useCallback, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from 'axios';
import ProductCard from "../ProductCard";


function ProductsList() {

    const [productsList, updateProductsList] = useState([]);
    useEffect(() => {
        const BASE_GET_URL = 'http://localhost:3001/api/get';
        Axios.get(BASE_GET_URL).then((response) => {
            updateProductsList(response.data);
        })
    }, []);
    
    console.log(productsList, '+++');
    const [checkedProducts, setCheckedProducts] = useState([]);
    const onChecked = useCallback((event) => {
        if (event.target.checked) {
            setCheckedProducts([event.target.value, ...checkedProducts]);
        }
    }, [checkedProducts]);
    // console.log(checkedProducts, '---');

    const deleteProducts = (array) => {
        array.forEach(id => Axios.delete(`http://localhost:3001/api/delete/products/${id}`).catch(console.log));
        };

        console.log(checkedProducts, '+-=+-=');
    
    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <h1 className="header-title">Products List</h1>
                    <ul className="buttons-list">
                        <li className="buttons-list-item">
                            <Link to="/add-product">
                                <button className="modal-button" type="button">Add</button>
                            </Link>
                        </li>
                        <li className="buttons-list-item">
                            <button onClick={() => { deleteProducts(checkedProducts) }} className="modal-button" type="submit">Mass Delete</button>
                        </li>
                    </ul>
                </div>
            </header>
            <section className="section">
                <div className="container">
                <ul className="cards-list">
                    {
                        productsList.map((product, index) => {
                            return <ProductCard
                                sku={product.sku}
                                name={product.name}
                                price={product.price}
                                type={product.type}
                                index={index}
                                isChecked={onChecked}
                                product={product}/>
                        })
                    }
                    </ul>
                </div>
            </section>
        </React.Fragment>
    );
}
export default withRouter(ProductsList);
