import React from "react";

function TypeSwitcher({property, callback}) {
    const type = property.value;

    return (
        <form className="form">
            {type === 'DVD' &&
                <label className="form-field">
                    Size (MB)
                <input name="size" className="form-input" onChange={callback}/>
                </label>
            }
            {type === 'Furniture' &&
                <React.Fragment>
                <label className="form-field">
                    Height (CM)
                    <input name="height" className="form-input" onChange={callback}/>
                </label>
                <label className="form-field">
                    Width (CM)
                    <input name="width" className="form-input" onChange={callback}/>
                </label>
                <label className="form-field">
                    Length (CM)
                    <input name="length" className="form-input" onChange={callback}/>
                </label>
                </React.Fragment>
            }
            {type === 'Book' &&
                <label className="form-field">
                    Weight (KG)
                    <input name="weight" className="form-input" onChange={callback}/>
                </label>
            }
            {type === 'default' &&
                <span>Choose product type...</span>
            }
        </form>
    );
}

export default TypeSwitcher;