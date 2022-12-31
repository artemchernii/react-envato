import ListItem from './ListItem';
import PropTypes from 'prop-types';

function List(props) {
    console.log(props);

    const items = props.items.map((item) => (
        <ListItem key={props.items.indexOf(item)} text={item} />
    )); // Array of li items

    const css = `bg-${props.background}`;

    return (
        <>
            <h3 className={`${css} text-white ps-5`}>{props.title}</h3>
            <div className="container">
                <ul className="list-group">{items}</ul>
            </div>
        </>
    );
}

List.defaultProps = {
    items: [],
    background: 'primary',
};

List.propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    oneOfProp: PropTypes.oneOf(['Right', 'Left']),
    specialProp: PropTypes.shape({
        name: PropTypes.string,
    }),
};

export default List;
