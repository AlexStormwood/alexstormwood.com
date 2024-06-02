
import RecentPosts from "../components/RecentPosts.jsx";
import "../styles/ArticlesListPage.css";

export function ArticlesList(){ 

	return (
		<div id="articles-list">
			<h1>Articles List</h1>

			<RecentPosts />
		</div>
		);
}