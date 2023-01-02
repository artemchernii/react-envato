import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
export default function App() {
    const topics = ['ReactJS', 'JavaScript', 'Angular'];
    return(
        <>
            <Navbar topics={topics} title='Teresa' />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}
