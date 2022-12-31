function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a href="#" className='navbar-brand'>React Fundamentals: {props.title}</a>
            </div>
        </nav>
    )
}
export default Navbar;
