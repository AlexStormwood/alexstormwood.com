import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../styles/HomeHeroCarousel.css';

export default function HomeHeroCarousel({ slides }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 24 });
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return undefined;
		onSelect();
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
		return () => {
			emblaApi.off('select', onSelect);
			emblaApi.off('reInit', onSelect);
		};
	}, [emblaApi, onSelect]);

	const openImage = (slide, event) => {
		document.dispatchEvent(new CustomEvent('lightbox:open', {
			detail: { src: slide.src, alt: slide.alt, trigger: event.currentTarget },
		}));
	};

	return (
		<section className="hero-carousel" aria-roledescription="carousel" aria-label="Photos from Alex’s work and interests">
			<div className="hero-carousel__viewport" ref={emblaRef}>
				<div className="hero-carousel__container">
					{slides.map((slide, index) => (
						<div className="hero-carousel__slide" key={slide.src} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
							<button
								type="button"
								className="hero-carousel__image-button"
								onClick={(event) => openImage(slide, event)}
								aria-label={`Open full-size image: ${slide.alt}`}
							>
								<img
									src={slide.src}
									alt={slide.alt}
									width="1024"
									height="720"
									loading={index === 0 ? 'eager' : 'lazy'}
									decoding="async"
									fetchPriority={index === 0 ? 'high' : 'auto'}
								/>
							</button>
						</div>
					))}
				</div>
			</div>
			<div className="hero-carousel__controls">
				<button type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Show previous photo">←</button>
				<p aria-live="polite">{slides[selectedIndex]?.caption}</p>
				<button type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Show next photo">→</button>
			</div>
			<div className="hero-carousel__dots" aria-label="Choose a photo">
				{slides.map((slide, index) => (
					<button
						type="button"
						key={slide.src}
						className={selectedIndex === index ? 'is-selected' : ''}
						onClick={() => emblaApi?.scrollTo(index)}
						aria-label={`Show photo ${index + 1}: ${slide.caption}`}
						aria-current={selectedIndex === index ? 'true' : undefined}
					/>
				))}
			</div>
		</section>
	);
}
