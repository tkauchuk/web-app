import React from "react";
import { Link, withRouter } from "react-router-dom";

function ProductsList() {
    return (
        <React.Fragment>
            <header className="header">
                <div className="container">
                    <h1 className="header-title">Products List</h1>
                    <ul className="buttons-list">
                        <li className="buttons-list-item">
                            <Link to="/add-product">
                                <button className="modal-button" type="submit">Add</button>
                            </Link>
                        </li>
                        <li className="buttons-list-item">
                             <button className="modal-button" type="submit">Mass Delete</button>
                        </li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    );
}

export default withRouter(ProductsList);
