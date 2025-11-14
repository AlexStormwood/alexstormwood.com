import { useEffect, useState } from "react";
import "../styles/ImageGalleryReusable.css";

export default function ImageGalleryReusable({gallery, galleryId}: {gallery: {
	src: string;
	height: number | undefined;
	width: number | undefined;
	alt: string | undefined;
	format: string | undefined;
}[] | string[] , galleryId: string}){
	

	const [galleryState, setGalleryState] = useState(gallery);

	const [lastSlideChange, setLastSlideChange] = useState(new Date(Date.now()));
	const [slideIndex, setSlideIndex] = useState(1);

	useEffect(() => {
		setGalleryState((previousGalleryState) => {
			let safeGalleryData = previousGalleryState.map((imgObj) => {
				if (typeof(imgObj) == "string"){
					return {
						src: imgObj,
						alt: "",
						height: 300,
						width: 300,
						format: "webp"
					}
				} else {
					return {
						src: imgObj.src,
						alt: imgObj.alt || "An image should be here, but the developer didn't provide alt text about it, sorry!",
						height: imgObj.height || 300,
						width: imgObj.width || 300,
						format: imgObj.format || "webp"
					}
				}
				
			});

			return safeGalleryData;
		})

		
		// showSlides(slideIndex);
		// setInterval(autoNextSlide, 1000);

	}, []);

	useEffect(() => {
		console.log("Gallery state updated.");
	}, [galleryState])


	useEffect(() => {
		console.log("Slideindex changed, now showing slide: " + slideIndex);
		showSlides(slideIndex);
	}, [slideIndex]);
	

	// Next/previous controls
	function plusSlides(n: number) {
		setSlideIndex(slideIndex + n)
		// showSlides(slideIndex);
	}

	// Thumbnail image controls
	function currentSlide(n: number) {
		setSlideIndex(n);
		// showSlides(slideIndex);
	}

	function showSlides(n: number) {
		// console.log("Now showing slide for index number of : " + n);
		let componentRendererContainer:HTMLElement = document.getElementById(galleryId) as HTMLElement;
		// console.log("Found the gallery container: " + componentRendererContainer)
		// lastSlideChange = new Date(Date.now());
		setLastSlideChange(new Date(Date.now()));
		let i;
		let slides = componentRendererContainer.querySelectorAll<HTMLElement>(".mySlides");
		// console.log("Found this many slides: " + slides.length);
		let dots = componentRendererContainer.querySelectorAll<HTMLImageElement>(".demo");
		let captionText = componentRendererContainer.querySelectorAll<HTMLElement>(".caption")[0];
		if (n > slides.length) {
			// slideIndex = 1;
			setSlideIndex(1);
		}
		if (n < 1) {
			// slideIndex = slides.length;
			setSlideIndex(slides.length);
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
		captionText.innerHTML = dots[slideIndex - 1].alt;
		
	}

	function autoNextSlide(){
		let nowDate = new Date(Date.now());

		if (((nowDate.valueOf() - lastSlideChange.valueOf()) / 1000) > 5){
			plusSlides(1);
		}
		
	}





	return (<>
	
		<div id={galleryId} className={"galleryContainer"}>

		<div className="row">
			{
				
				galleryState.map((imgObj, index) => {
					return (
						<div key={("main-" + galleryId + index)} className="mySlides">
							<div className="numbertext">
								{index + 1} / {galleryState.length}
							</div>
							<div className="imgStretchContainer">
								<img className="mainImage" src={imgObj.src} alt={imgObj.alt} />
							</div>
						</div>
					);
					
					
				})
			}
			<a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
			<a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
		</div>
		
		<div className="row">
			<div className="caption-container">
				<p className="caption"></p>
			</div>
		</div>

		

		<div className="row">
			{
				galleryState.map((imgObj, index) => {
						return (
						<div key={("thumbs-" + galleryId + index)} className="column">
							<img
								className="demo cursor"
								src={imgObj.src}
								alt={imgObj.alt}
								style={{width: "100%"}}
								onClick={() => {console.log("Current slide changing now to slide : " + index); currentSlide(index + 1)}}
							/>
						</div>
					);
					
					
				})
			}
		</div>
	</div>
	</>
	)
}