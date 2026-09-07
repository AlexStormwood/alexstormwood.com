import { useMemo, useState } from 'react';
import '../styles/ImageGalleryReusable.css';

type GalleryImage = {
	src: string;
	alt?: string;
	height?: number;
	width?: number;
	format?: string;
};

type Props = {
	gallery: GalleryImage[] | string[];
	galleryId: string;
};

export default function ImageGalleryReusable({ gallery, galleryId }: Props) {
	const images = useMemo(() => gallery.map((image) => typeof image === 'string'
		? { src: image, alt: 'Gallery image' }
		: { ...image, alt: image.alt || 'Gallery image' }), [gallery]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const selected = images[selectedIndex];

	if (!selected) return null;

	function select(index: number) {
		setSelectedIndex((index + images.length) % images.length);
	}

	function openLightbox(event: React.MouseEvent<HTMLButtonElement>) {
		document.dispatchEvent(new CustomEvent('lightbox:open', {
			detail: { src: selected.src, alt: selected.alt, trigger: event.currentTarget },
		}));
	}

	return (
		<section className="image-gallery" aria-roledescription="carousel" aria-label={`Image gallery ${galleryId}`}>
			<div className="image-gallery__main">
				<button type="button" className="image-gallery__main-image" onClick={openLightbox} aria-label={`Open full-size image: ${selected.alt}`}>
					<img src={selected.src} alt={selected.alt} loading="lazy" decoding="async" />
				</button>
				{images.length > 1 && <>
					<button type="button" className="image-gallery__arrow image-gallery__arrow--previous" onClick={() => select(selectedIndex - 1)} aria-label="Show previous image">←</button>
					<button type="button" className="image-gallery__arrow image-gallery__arrow--next" onClick={() => select(selectedIndex + 1)} aria-label="Show next image">→</button>
				</>}
			</div>
			<p className="image-gallery__caption" aria-live="polite">{selected.alt}</p>
			{images.length > 1 && <div className="image-gallery__thumbnails" aria-label="Choose an image">
				{images.map((image, index) => <button type="button" key={image.src} className={selectedIndex === index ? 'is-selected' : ''} onClick={() => select(index)} aria-label={`Show image ${index + 1}: ${image.alt}`} aria-current={selectedIndex === index ? 'true' : undefined}><img src={image.src} alt="" loading="lazy" decoding="async" /></button>)}
			</div>}
		</section>
	);
}
