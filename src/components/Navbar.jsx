import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";


export default function Navbar(){

	return (
		<nav>
			<div id="navbar-content">
				<div className="navbar-icon">
					<Link to={"/"}>
						<img src="/android-chrome-384x384.png" height={"40"} alt="Photo of me - Alex!" />
						<h1>Alex Stormwood</h1>
					</Link>
				</div>
				<div className="navbar-links">
					<NavLink className={"navButton"} to={"/"}>Home</NavLink>
					<NavLink className={"navButton"} to={"/articles"}>Articles List</NavLink>
					<NavLink className={"navButton"} to={"/articles/appearances"}>Events & Appearances</NavLink>
				</div>
			</div>
			
		</nav>
	)
}