import React, {useCallback, useState} from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from 'axios';
import TypeSwitcher from "../TypeSwitcher";


function ProductPage() {
    
    const [description, setDescription] = useState({});
    const onChanged = useCallback(
        (event) => {
            setDescription({
                ...description,
                [event.target.name]: event.target.value.trim()   
            })
        }, [description, setDescription]
    );
    console.log(description);
  
    const [selectedOption, setSelectedOption] = useState({ value: 'default' });
    const onSelected = useCallback(
        (event) => {
            setSelectedOption({ value: event.target.value });
            setDescription({
                ...description,
                [event.target.name]: event.target.value
            })
        }, [setSelectedOption, description]
    );

    const onFormSubmit = () => {
        const data = description;
        const BASE_POST_URL = 'http://localhost:3001/api/insert';
        Axios.post(BASE_POST_URL, {
            sku: data.sku,
            name: data.name,
            price: data.price,
            type: data.type,
            size: data.size,
            weight: data.weight,
            height: data.height,
            width: data.width,
            length: data.length
        }, { headers: { "Content-Type": "application/json" } })
            .catch((err) => { console.log(err) });
    }
    const onFormReset = () => {
        document.getElementById('product_form').reset();
        setSelectedOption({ value: 'default' });
        setDescription({});
    }

    return (
        <React.Fragment>
        <header className="header">
            <div className="container">
                <h1 className="header-title">Product Add</h1>
                <ul className="buttons-list">
                        <li className="buttons-list-item">
                            <Link to="/">
                                <button className="modal-button" type="submit" onClick={onFormSubmit}>Save</button>
                            </Link>
                        </li>
                        <li className="buttons-list-item">
                            <Link to="/">
                                <button className="modal-button" type="reset" onClick={onFormReset}>Cancel</button>
                            </Link>
                        </li>
                </ul>
            </div>
        </header>
        <section className="hero-section section">
            <div className="container">
                <form className="form" id="product_form">
                    <label className="form-field">
                        SKU
                        <input onChange={onChanged} id="sku" name="sku" className="form-input" autoComplete="off" required />
                    </label>
                    <label className="form-field">
                        Name
                        <input onChange={onChanged} id="name" name="name" className="form-input" autoComplete="off" required/>
                    </label>
                    <label className="form-field">
                        Price ($)
                        <input onChange={onChanged} id="price" type="number" name="price" className="form-input" required/>
                    </label>
                </form>
            </div>
        </section>
        <section className="type-choice-section section">
                <div className="container">
                    <form className="type-choice-form" id="productType">
                        <label className="form-field">
                            Type Switcher
                            <select value={selectedOption.value} onChange={onSelected} id="productType" name="type" className="select-field" size="1" required>
                                <option className="option" value="default" disabled hidden>Choose a type</option>
                                <option className="option" value="DVD">DVD</option>
                                <option className="option" value="Furniture">Furniture</option>
                                <option className="option" value="Book">Book</option>
                            </select>
                        </label>
                    </form>
                <TypeSwitcher property={selectedOption} callback={onChanged} />
                </div>
        </section>
        </React.Fragment>
    );
}

export default withRouter(ProductPage);