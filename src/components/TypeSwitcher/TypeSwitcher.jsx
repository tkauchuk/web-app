import React from "react";

function TypeSwitcher({property, callback}) {
    const type = property.value;

    return (
        <form className="form">
            {type === 'DVD' &&
                <label className="form-field">
                    Size (MB)
                <input name="size" id="size" className="form-input" onChange={callback} autoComplete="off"/>
                </label>
            }
            {type === 'Furniture' &&
                <React.Fragment>
                <label className="form-field">
                    Height (CM)
                    <input name="height" id="height" className="form-input" onChange={callback} autoComplete="off"/>
                </label>
                <label className="form-field">
                    Width (CM)
                    <input name="width" id="width" className="form-input" onChange={callback} autoComplete="off"/>
                </label>
                <label className="form-field">
                    Length (CM)
                    <input name="length" id="length" className="form-input" onChange={callback} autoComplete="off"/>
                </label>
                </React.Fragment>
            }
            {type === 'Book' &&
                <label className="form-field">
                    Weight (KG)
                    <input name="weight" id="weight" className="form-input" onChange={callback} autoComplete="off"/>
                </label>
            }
            {type === 'default' &&
                <span className="choice-call">Nothing chosen yet</span>
            }
        </form>
    );
}

export default TypeSwitcher;