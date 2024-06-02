import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import useScrollPercentage from 'react-scroll-percentage-hook';

export default function Navbar(){
	const { percentage } = useScrollPercentage();

	return (
		<nav>
			<div id="navbar-content">
				<div className="navbar-icon">
					<img src="android-chrome-384x384.png" height={"40"} alt="Photo of me - Alex!" />
					<h1>Alex Stormwood</h1>
				</div>
				<div className="navbar-links">
					<NavLink className={"navButton"} to={"/"}>Home</NavLink>
					<NavLink className={"navButton"} to={"/appearances"}>Events & Appearances</NavLink>
				</div>
			</div>
			<div id="navbar-scrollprogress">
				<p>{`vertical: ${percentage.vertical} horizontal: ${percentage.horizontal}`}</p>
			</div>
		</nav>
	)
}