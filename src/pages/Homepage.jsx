import RecentPosts from "../components/RecentPosts";
import "../styles/Homepage.css";

export default function Homepage(){

	return(
		<div id="homepage">

			<h1>Hello!</h1>

			<hr />
			
			<h2>Latest Posts</h2>
			<RecentPosts maxNumberOfPosts={5} />
		</div>
	)
}