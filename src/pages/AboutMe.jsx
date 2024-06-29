import { Helmet } from "react-helmet";

export function AboutMe(){ 

	return (
		<div id="aboutme-page">
			<Helmet>
				<meta name="twitter:title" content="About Alex Stormwood" />
				<meta property="og:type" content="profile" />
				<meta property="og:title" content="About Alex Stormwood"/>
				<meta property="og:url" content="https://alexstormwood.com/aboutme"/>
				<meta property="og:description" content="Learn about the things that Alex is interested in."/>
				<meta property="profile:first_name" content="Alex"/>
				<meta property="profile:last_name" content="Stormwood"/>
				<meta property="profile:username" content="alexstormwood"/>
				<meta property="og:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image" content="/opengraph/website-ogimage-default.png" />
				<meta name="twitter:image:alt" content="Banner image depicting Alex. He writes about gamedev, webdev, and more." />
			</Helmet>

			<h1>About Me</h1>

			<code>
				Hey! This is in progress. Just wanted to test out some OpenGraph SEO stuff.
			</code>
		</div>
		);
}