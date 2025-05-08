import Image from "next/image";

interface Image {
    id: number;
    src: string;
    alt: string;
}

export default function ProductCard({ title, images, description, id }: { title: string; images: Image[]; description: string; id: number }) {
    const imageCount = images.length;
    return (
    <div className="project-card">
        <div className="flex flex-col" role="group" aria-roledescription="carousel" aria-label="Project Images">
            <div className="flex flex-row gap-3 order-2" role="group" aria-label="Slide controls">
                {Array.from({ length: imageCount }).map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Show slide ${i + 1} of ${imageCount}`}
                        className="px-2"
                        aria-current={i === 0 ? "true" : undefined}
                    >
                        <Image src='/navigation-dot.svg' alt="navigation dot" width={20} height={20} />
                    </button>
                ))}
            </div>

            <button aria-label="Previous slide">
                <Image src={'/prev.svg'} alt="previous icon" width={15} height={15} />
            </button>

            {images.map((image) => (
                <div key={image.id} role="group" aria-roledescription="slide" aria-labelledby={`carousel_item-${id}_heading`} aria-hidden={image.id === 1 ? "false" : "true"}>
                    <h4 id={`carousel_item-${id}_heading`} aria-label={image.alt}></h4>
                    <Image className="project-card__image" src={image.src} alt={image.alt} width={150} height={150} />
                </div>
            ))}

            <button aria-label="Next slide">
                <Image src={'/next.svg'} alt="previous icon" width={15} height={15} />
            </button>
        </div>
        <div className="project-card__content--wrapper">
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{description}</p>
        </div>
    </div>
    );
}