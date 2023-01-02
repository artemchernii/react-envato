import Navbar from "./Navbar";
import {Link, Outlet} from "react-router-dom";
export default function AdminLayout() {
    return(
        <>
            <h3 className="text-bg-danger">Admin Layout</h3>
            <span><Link to='/' className="link-dark ps-5">Home</Link></span>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}
