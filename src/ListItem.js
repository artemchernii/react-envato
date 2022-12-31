import {makerStyles} from './guitarStyles';
const css = {
    margin: '0',
}
function ListItem(props) {

    const maker = props.item.text && props.item.text.toLowerCase();

    return <li className="list-group-item" style={maker && makerStyles[maker]}>
        <h5>{props.item.title}</h5>
        <p style={css}>{!props.item.text ? 'No text' : props.item.text}</p>
    </li>;
}
export default ListItem;
