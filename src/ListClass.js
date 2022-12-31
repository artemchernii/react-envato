import {Component} from "react";
import ListItem from "./ListItem";

class ListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGuitar: '',
            items: [...props.items]
        }


        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const newGuitar = this.state.newGuitar;
        this.setState({items: [...this.state.items, newGuitar]});
    }
    handleChange(e) {
        this.setState({
            newGuitar: e.target.value
        })
    }


    render() {
        const items = this.state.items.map((item) => (
            <ListItem key={this.state.items.indexOf(item)} text={item} />
        ));

        return (
            <>
                <div className="container">
                    <div className="pt-3 pb-2">
                        <input type="text"
                               className="form-control"
                               value={this.state.newGuitar}
                               onChange={this.handleChange}
                        />
                        <button className='btn btn-primary mt-2' onClick={this.handleClick}>Add Guitar</button>
                    </div>
                    <h3>{this.props.title}</h3>
                    <ul>{items}</ul>
                </div>
            </>
        );
    }
}

export default ListClass;
