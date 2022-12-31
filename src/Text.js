import PropTypes from 'prop-types';
const Text = (props) => {
    const { title, text } = props;

    return (
        <>
            <h3>{title}</h3>
            <p>Here is your text: {text}</p>
        </>
    );
};
Text.defaultProps = {
    title: 'Teresa',
    text: 'Some text',
};
Text.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Text;
