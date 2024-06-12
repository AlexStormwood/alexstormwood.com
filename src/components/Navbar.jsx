import { Link, NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ArticleMeta from "../articleMeta.jsx";
import { useEffect, useState } from "react";
import { readingTime } from "reading-time-estimator";


export default function Navbar(){
	let [estimatedReadingTime, setEstimatedReadingTime] = useState({});
	let location = useLocation();
	let [articleRouteName, setArticleRouteName] = useState("");

	useEffect(() => {
		setArticleRouteName(location.pathname.substring(location.pathname.lastIndexOf("/") + 1));

		document.getElementById("positionHelper").scrollTo({top: 0, left: 0, behavior: "smooth"});
	}, [location]);

	useEffect(() => {
		if (articleRouteName && ArticleMeta[articleRouteName]){
			document.title = ArticleMeta[articleRouteName].title + " | Alex Stormwood";
			// console.log(ArticleMeta[articleRouteName]);
			setEstimatedReadingTime(readingTime(document.getElementById("positionHelper").textContent));
		}
	}, [articleRouteName]);

	return (
		<nav>
			<div id="navbar-content">
				<div className="navbar-icon">
					<Link to={"/"}>
						<img src="/android-chrome-384x384.png" height={"40"} alt="Photo of me - Alex!" />
						<h1>Alex Stormwood</h1>
					</Link>
				</div>
				<div id="article-info">
					<h1>{ArticleMeta[articleRouteName]?.title}</h1>
					<p>{estimatedReadingTime?.text}</p>
				</div>
				<div className="navbar-links">
					<NavLink className={"navButton"} to={"/"}>Home</NavLink>
					<NavLink className={"navButton"} to={"/articles"}>Articles List</NavLink>
					<NavLink className={"navButton"} to={"/articles/projects"}>Projects</NavLink>
					<NavLink className={"navButton"} to={"/articles/appearances"}>Events & Appearances</NavLink>
				</div>
			</div>
			
		</nav>
	)
}