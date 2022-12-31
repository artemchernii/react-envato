import {Component} from "react";

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
        }


        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.newItem);
        this.setState({
            newItem: ''
        });
    }
    handleChange(e) {
        this.setState({
            newItem: e.target.value
        })
    }


    render() {
        return (
            <>
                <div className="container">
                    <div className="pt-3 pb-2">
                        <input type="text"
                               className="form-control"
                               value={this.state.newItem}
                               onChange={this.handleChange}
                        />
                        <button className='btn btn-primary mt-2' onClick={this.handleClick}>{this.props.addGuitarText}</button>
                    </div>
                </div>
            </>
        );
    }
}

export default AddItem;
