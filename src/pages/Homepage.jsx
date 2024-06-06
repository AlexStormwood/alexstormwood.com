import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import RecentPosts from "../components/RecentPosts";
import "../styles/Homepage.css";
import shuffle from "../utils/shuffleArray";
import { useState } from "react";
import { useEffect } from "react";

const homepageGallery = [
	{
		original: "/homepagegallery/3DPrinting01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "This was printed with resin!"
	},
	{
		original: "/homepagegallery/3DPrinting02.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/3DPrinting03.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/APDGAwards2018.png",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/CorporateTrainingJuly2018.png",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/DeloitteDisruptorsInTechXRFeb2018.png",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Disney01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Events01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Gardening01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Gundam01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Gundam02.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/LocationJapan01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/LocationJapan02.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/LocationSydney01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Nintendo01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Nintendo02.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/OnePiece01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Pokemon01.jpg",
		originalHeight: 512,
		originalWidth: 512
	},
	{
		original: "/homepagegallery/Pokemon02.jpg",
		originalHeight: 512,
		originalWidth: 512
	},

	{
		original: "/homepagegallery/PPVRRTX2018.png",
		originalHeight: 512,
		originalWidth: 512
	},
]

export default function Homepage(){

	let [gallery, setGallery] = useState([]);

	useEffect(() => {
		let shuffleResult = shuffle(homepageGallery);
		// console.log(shuffleResult);
		setGallery(shuffleResult);
	}, []);

	return(
		<div id="homepage">

			<h1>Hello!</h1>
			<p>I&apos;m Alex.</p>
			<hr />

			<ImageGallery items={gallery} autoPlay={true} showPlayButton={false} slideInterval={6000} />

			<hr />
			
			<h2>Latest Posts</h2>
			<RecentPosts maxNumberOfPosts={5} />
		</div>
	)
}