import { Helmet } from "react-helmet";

export function WorkHistory(){ 

	return (
		<div id="employmenthistory-page">
			<Helmet>
				<meta name="twitter:title" content="Alex Stormwood's History of Work" />
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="Alex Stormwood's History of Work"/>
				<meta property="og:url" content="https://alexstormwood.com/workhistory"/>
				<meta property="og:description" content="Learn about the things that Alex has worked on or for."/>
				<meta property="profile:first_name" content="Alex"/>
				<meta property="profile:last_name" content="Stormwood"/>
				<meta property="profile:username" content="alexstormwood"/>
				<meta property="og:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image:alt" content="Banner image depicting Alex. He writes about gamedev, webdev, and more." />
			</Helmet>

			<h1>Employment History</h1>

			<code>
				Hey! This is in progress. Just wanted to test out some OpenGraph SEO stuff.
			</code>
		</div>
		);
}