import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar(){

	return (
		<nav>
			<div className="navbar-icon">

				<h1>Alex Stormwood</h1>
			</div>
			<div className="navbar-links">
				<NavLink to={"/"}>Home</NavLink>
				<NavLink to={"/appearances"}>Events & Appearances</NavLink>
			</div>
		</nav>
	)
}