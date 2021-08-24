import React, { useCallback, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import TypeSwitcher from "../TypeSwitcher";

function ProductPage() {

    const [selectedOption, setSelectedOption] = useState({ value: 'default' });
    const onSelected = useCallback(
        (event) => {
            setSelectedOption({value: event.target.value})
        }, [setSelectedOption]
    );
    
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

    return (
        <React.Fragment>
        <header className="header">
            <div className="container">
                <h1 className="header-title">Product Add</h1>
                <ul className="buttons-list">
                        <li className="buttons-list-item">
                            <Link to="/">
                                <button className="modal-button" type="submit">Save</button>
                            </Link>
                        </li>
                        <li className="buttons-list-item">
                            <button className="modal-button" type="submit">Cancel</button>
                        </li>
                </ul>
            </div>
        </header>
        <section className="hero-section section">
            <div className="container">
                <form className="form" id="product_form">
                    <label className="form-field">
                        SKU
                        <input onChange={onChanged} name="sku" className="form-input" required />
                    </label>
                    <label className="form-field">
                        Name
                        <input onChange={onChanged} name="name" className="form-input" required/>
                    </label>
                    <label className="form-field">
                        Price ($)
                        <input onChange={onChanged} type="number" name="price" className="form-input" required/>
                    </label>
                </form>
            </div>
        </section>
        <section className="type-choice-section section">
                <div className="container">
                    <form className="type-choice-form" id="productType">
                        <label className="form-field">
                            Type Switcher
                            <select value={selectedOption.value} onChange={onSelected} name="typeSelection" className="select-field" size="1" required>
                                <option className="option" value="default" disabled hidden>Choose a type</option>
                                <option className="option" value="DVD">DVD</option>
                                <option className="option" value="Furniture">Furniture</option>
                                <option className="option" value="Book">Book</option>
                            </select>
                        </label>
                    </form>
                </div>
                <TypeSwitcher property={selectedOption} callback={onChanged}/>
        </section>
        </React.Fragment>
    );
}

export default withRouter(ProductPage);