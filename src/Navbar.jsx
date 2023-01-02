import {Link} from "react-router-dom";
function Navbar({title, topics}) {
    const listItems = topics.map((item, index) => {
        return(
            <li key={index} className="nav-item">
                <Link to={`/news/${item}`} className="nav-link">{item}</Link>
            </li>
        )
    })
    console.log(listItems);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className={`navbar-brand`} to='/'>React Fundamentals: {title}</Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {listItems}
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
