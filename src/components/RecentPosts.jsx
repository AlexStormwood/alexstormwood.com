import { Link } from "react-router-dom";
import ArticleMeta from "../articleMeta.jsx";
import PropTypes from "prop-types";
import "../styles/RecentPostsList.css";
import { useEffect, useState } from "react";
let appEnvironment = import.meta.env.MODE;

let dateFormatOptions = {
	month: "long",
	day: "numeric",
	year: "numeric"
}


function RecentPosts({ maxNumberOfPosts }) {

	let [articleLinks, setArticleLinks] = useState([]);

	useEffect(() => {
		let articleMetaAsArray = Object.keys(ArticleMeta).map(metaObj => {
			return { ...ArticleMeta[metaObj], path: metaObj };
		});

		// b-a is most-recent first
		// a-b is oldest first
		articleMetaAsArray.sort((a, b) => {
			return new Date(b.lastUpdated) - new Date(a.lastUpdated);
		});


		let tempLinksArray = articleMetaAsArray.map((metaObj) => {

			if (appEnvironment == "production") {
				if (!(metaObj.lastUpdated > Date.now())) {
					return <Link key={metaObj.path} to={`/articles/${metaObj.path}`} ><li>
						{new Date(metaObj.lastUpdated).toLocaleDateString("en-AU", dateFormatOptions)} - {metaObj.title}

					</li></Link>
				}
			} else {
				return <Link key={metaObj.path} to={`/articles/${metaObj.path}`} ><li>
					{new Date(metaObj.lastUpdated).toLocaleDateString("en-AU", dateFormatOptions)} - {metaObj.title}

				</li></Link>
			}



		})

		if (tempLinksArray.length > maxNumberOfPosts) {
			tempLinksArray.length = maxNumberOfPosts;
		}

		setArticleLinks(tempLinksArray);
	}, [maxNumberOfPosts]);

	return (<div id="recent-posts-list">
		<ul>
			{articleLinks}
		</ul>
	</div>)
}

RecentPosts.propTypes = {
	maxNumberOfPosts: PropTypes.number
}


export default RecentPosts;