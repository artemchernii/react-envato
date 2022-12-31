import React from "react";
import {makerStyles} from "./guitarStyles";

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.guitarName = React.createRef(null);
        this.guitarMakers = React.createRef(null);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const title = this.guitarName.current.value;
        const maker = this.guitarMakers.current.value;
        this.props.onSubmit({
            title,
            text: maker
        });

        setTimeout(() => {
            this.guitarMakers.current.value = '';
            this.guitarName.current.value = '';
            this.guitarName.current.focus();
        }, 500)
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="pt-3 pb-2">
                        <div className="mb-1 new-guitar-form">
                            <input type="text" className="form-control-sm" ref={this.guitarName} />
                            <select name="select" id="select" ref={this.guitarMakers}>
                                <option value=""></option>
                                <option style={makerStyles.prs} value="PRS">PRS</option>
                                <option style={makerStyles.fender} value="Fender">Fender</option>
                                <option style={makerStyles.gibson} value="Gibson">Gibson</option>
                            </select>
                        </div>
                        <button className='btn btn-primary mt-2' onClick={this.handleClick}>{this.props.addGuitarText}</button>
                    </div>
                </div>
            </>
        );
    }
}

export default AddItem;
