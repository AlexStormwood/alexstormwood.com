import { useEffect, useState } from "react";
import ArticleMeta from "../articleMeta.jsx";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "../styles/RelatedPosts.css";


let appEnvironment = import.meta.env.MODE;
let dateFormatOptions = {
	month: "long",
	day: "numeric",
	year: "numeric"
}


function RelatedPosts({tagsList}){

	let location = useLocation();
	let [articleRouteName, setArticleRouteName] = useState("");
	let [relatedPostLinks, setRelatedPostLinks] = useState([]);

	useEffect(() => {

		setArticleRouteName(location.pathname.substring(location.pathname.lastIndexOf("/") + 1));
		// console.log("RelatedPosts widget reading route")
	}, [location])
	
	useEffect(() => {

		if (!articleRouteName){
			return;
		}
		
		let articleMetaAsArray = Object.keys(ArticleMeta).map(metaObj => {
			return { ...ArticleMeta[metaObj], path: metaObj };
		});

		// b-a is most-recent first
		// a-b is oldest first
		articleMetaAsArray.sort((a, b) => {
			return new Date(b.lastUpdated) - new Date(a.lastUpdated);
		});


		let tempLinksArray = articleMetaAsArray.map((metaObj) => {
			// console.log({route: articleRouteName, path: metaObj.path});
			let isPostRelated = tagsList.some(tag => metaObj.tags.includes(tag) && metaObj.path != articleRouteName);

			if (isPostRelated){
				if (appEnvironment == "production") {
					if (!(metaObj.lastUpdated > Date.now())) {
						return <Link className="relatedPostItem" key={metaObj.path} to={`/articles/${metaObj.path}`} >
							
							{new Date(metaObj.lastUpdated).toLocaleDateString("en-AU", dateFormatOptions)} - {metaObj.title}
							</Link>
					}
				} else {
					return <Link className="relatedPostItem" key={metaObj.path} to={`/articles/${metaObj.path}`} >
						{new Date(metaObj.lastUpdated).toLocaleDateString("en-AU", dateFormatOptions)} - {metaObj.title}
						</Link>
				}
			}
		});

		tempLinksArray = tempLinksArray.filter(item => item);

		setRelatedPostLinks(tempLinksArray);
		
	}, [articleRouteName, tagsList]);

	useEffect(() => {
		// console.log(relatedPostLinks);
	}, [relatedPostLinks]);

	if (relatedPostLinks[0]){
		return(<div id="relatedPostContainer">
		<h1>Related Posts</h1>
		{relatedPostLinks}
	</div>)
	} else {
		return null;
	}
	
}

RelatedPosts.propTypes = {
	tagsList: PropTypes.array
}

export default RelatedPosts;