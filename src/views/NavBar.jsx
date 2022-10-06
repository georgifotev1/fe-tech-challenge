import { NavLink } from "react-router-dom";

export default function NavBar  ()  {
    return (
        <nav className="topnav">
            <NavLink to='/' end>Home</NavLink>
            <NavLink to='posts'>Posts</NavLink>
            <NavLink to='users'>Users</NavLink>
        </nav>
    )
}