"use client";

import Image from "next/image";
import { useState } from "react";

interface Image {
    id: number;
    src: string;
    alt: string;
}

export default function ProductCard({ title, images, description, id }: { title: string; images: Image[]; description: string; id: number }) {
    const imagesCount = images.length;
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div id={`project-card-${id}`} className="product-card">
            <h3 id={`project-card-${id}-title`} className="product-card__title">{title}</h3>
            <div id={`project-card-${id}-carousel`} role="group" className="project-card-carousel" aria-labelledby={`project-card-${id}-title`}>
                <ul className="slides flex flex-row gap-2">
                    {images.map((image) => (
                        <li key={image.id} className={`slide ${currentSlide + 1 === image.id ? "current" : ""}`} aria-hidden={currentSlide + 1 !== image.id} tabIndex={-1}>
                            <Image src={image.src} alt={image.alt} width={500} height={500} />
                        </li>
                    ))}
                </ul>
                <ul className="controls flex flex-row gap-2">
                    <li>
                        <button type="button" className="btn-prev p-2.5 bg-white hover:bg-yellow focus:bg-yellow rounded-full" onClick={() => {if (currentSlide === 0) {
                            setCurrentSlide(imagesCount - 1);
                        } else {
                            setCurrentSlide(currentSlide - 1);
                        }}}>
                            <Image src={'/prev.svg'} alt="Previous Slide" width={30} height={30} />
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn-next p-2.5 bg-white hover:bg-yellow focus:bg-yellow rounded-full" onClick={() => {if (currentSlide === imagesCount - 1) {
                            setCurrentSlide(0);
                        } else {
                            setCurrentSlide(currentSlide + 1);
                        }}}>
                            <Image src={'/next.svg'} alt="Next Slide" width={30} height={30} />
                        </button>
                    </li>
                </ul>
                <ul className="slidenav flex flex-row gap-2">
                    {images.map((image) => (
                        <li key={image.id}>
                            <button data-slide={image.id} onClick={() => {setCurrentSlide(image.id - 1); const currentSlide = document.querySelector(`#project-card-${id} .slide.current`) as HTMLElement; currentSlide?.focus()}} className={`nav-dot border-[5px] border-aths hover:border-yellow focus:border-yellow hover:bg-yellow focus:bg-yellow rounded-full ${currentSlide + 1 === image.id ? "current" : ""}`}>
                                <span className="visuallyhidden">Slide {image.id} of {imagesCount} : {image.alt}</span>
                                <Image src={'/navigation-dot.svg'} alt="Navigation Dot" width={20} height={20} />
                            </button>
                        </li>
                    ))}
                </ul>
                <div aria-live="polite" aria-atomic="true" className="liveregion visuallyhidden">Slide {currentSlide + 1} of {imagesCount}</div>
            </div>
            <div className="product-card__description">
                <p>{description}</p>
            </div>
        </div>
    );
}