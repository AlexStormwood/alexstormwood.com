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
		description: "Hobby - 3D printing with resin."
	},
	{
		original: "/homepagegallery/3DPrinting02.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Hobby - 3D printing with resin."
	},
	{
		original: "/homepagegallery/3DPrinting03.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Hobby - 3D printing with resin."
	},
	{
		original: "/homepagegallery/APDGAwards2018.png",
		originalHeight: 512,
		originalWidth: 512,
		description: "Australia Production Design Guild Awards Night, 2018. Planet Protector VR was nominated for an award in this event."
	},
	{
		original: "/homepagegallery/CorporateTrainingJuly2018.png",
		originalHeight: 512,
		originalWidth: 512,
		description: "Corporate training at a local branch of a multinational game development company. This session was about teaching Unity to the studio's art team."
	},
	{
		original: "/homepagegallery/DeloitteDisruptorsInTechXRFeb2018.png",
		originalHeight: 512,
		originalWidth: 512,
		description: "A speaking engagement at Deloitte's Disruptors In Tech meetup in February 2018. This night was themed around XR (AR, VR, MR)."
	},
	{
		original: "/homepagegallery/Disney01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Tokyo Disneyland, Japan, January 2024."
	},
	{
		original: "/homepagegallery/Events01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Array of event exhibitor and worker passes collected over years."
	},
	{
		original: "/homepagegallery/Gardening01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Hobby - Gardening. Big fan of food plants and endangered plants."
	},
	{
		original: "/homepagegallery/Gundam01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Gundam Factory Yokohama, Japan, January 2024."
	},
	{
		original: "/homepagegallery/Gundam02.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Gundam Factory Yokohama, Japan, January 2024."
	},
	{
		original: "/homepagegallery/LocationJapan01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Tokyo city views, January 2024."
	},
	{
		original: "/homepagegallery/LocationJapan02.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - My favourite goshuin / shrine stamp collected in Japan, January 2024."
	},
	{
		original: "/homepagegallery/LocationSydney01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Currently, I live in Sydney. I've lived all over Australia!"
	},
	{
		original: "/homepagegallery/Nintendo01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Nintendo Store Kyoto, Japan, January 2024."
	},
	{
		original: "/homepagegallery/Nintendo02.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Nintendo Store Kyoto, Japan, January 2024."
	},
	{
		original: "/homepagegallery/OnePiece01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - One Piece Store Ikebukuro, Japan, January 2024."
	},
	{
		original: "/homepagegallery/Pokemon01.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Pokemon Cafe Tokyo, Japan, January 2024."
	},
	{
		original: "/homepagegallery/Pokemon02.jpg",
		originalHeight: 512,
		originalWidth: 512,
		description: "Travel - Pokemon Design Lab in Shibuya, Japan, January 2024."
	},

	{
		original: "/homepagegallery/PPVRRTX2018.png",
		originalHeight: 512,
		originalWidth: 512,
		description: "Exhibiting my own games at local gaming events. This was at RTX Sydney in 2018."
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