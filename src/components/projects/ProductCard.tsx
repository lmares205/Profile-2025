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
    const [prevSlide, setPrevSlide] = useState(imagesCount - 1);
    const [nextSlide, setNextSlide] = useState(1);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev' | null>(null);
    return (
        <div id={`project-card-${id}`} className="product-card">
            <h3 id={`project-card-${id}-title`} className="product-card__title">{title}</h3>
            <div id={`project-card-${id}-carousel`} role="group" className="project-card-carousel" aria-labelledby={`project-card-${id}-title`}>
                <ul className="slides h-[2rem] md:w-[50rem] md:h-[30rem] flex flex-row gap-2 rounded-lg overflow-hidden">
                    {images.map((image) => (
                        <li key={image.id} className={`slide p-2 bg-aths ${currentSlide + 1 === image.id ? "current" : ""} ${prevSlide + 1 === image.id ? `prev${transitionDirection === 'prev' ? " in-transition" : ""}` : ""} ${nextSlide + 1 === image.id ? `next${transitionDirection === 'next' ? " in-transition" : ""}` : ""}`} 
                        aria-hidden={currentSlide + 1 !== image.id} tabIndex={-1} 
                        onTransitionEnd={(event) => { setTransitionDirection(null); }}>
                            <Image className="h-[1rem] md:h-[29rem] object-contain" src={image.src} alt={image.alt} height={800} width={800}  />
                        </li>
                    ))}
                </ul>
                <ul className="controls flex flex-row gap-2">
                    <li>
                        <button type="button" className="btn-prev p-2.5 bg-white hover:bg-yellow focus:bg-yellow rounded-full" onClick={() => {
                            setTransitionDirection('prev');
                            const newCurrentSlide = currentSlide === 0 ? imagesCount - 1 : currentSlide - 1;
                            setCurrentSlide(newCurrentSlide);
                            setNextSlide(currentSlide);
                            setPrevSlide(newCurrentSlide === 0 ? imagesCount - 1 : newCurrentSlide - 1);
                        }}>
                            <Image src={'/prev.svg'} alt="Previous Slide" width={30} height={30} />
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn-next p-2.5 bg-white hover:bg-yellow focus:bg-yellow rounded-full" onClick={() => {
                            setTransitionDirection('next');
                            const newCurrentSlide = currentSlide === imagesCount - 1 ? 0 : currentSlide + 1;
                            setCurrentSlide(newCurrentSlide);
                            setNextSlide(newCurrentSlide === imagesCount - 1 ? 0 : newCurrentSlide + 1);
                            setPrevSlide(currentSlide);
                        }}>
                            <Image src={'/next.svg'} alt="Next Slide" width={30} height={30} />
                        </button>
                    </li>
                </ul>
                <ul className="slidenav flex flex-row gap-2">
                    {images.map((image) => (
                        <li key={image.id}>
                            <button data-slide={image.id} onClick={() => {
                                const newCurrentSlide = image.id - 1;
                                setTransitionDirection(newCurrentSlide > currentSlide ? 'next' : 'prev');
                                setCurrentSlide(newCurrentSlide);
                                setNextSlide(newCurrentSlide === imagesCount - 1 ? 0 : newCurrentSlide + 1);
                                setPrevSlide(newCurrentSlide > 0 ? newCurrentSlide - 1 : imagesCount - 1);
                                const currentSlideEl : HTMLElement = document.querySelector(`#project-card-${id} .slide.current`) as HTMLElement;
                                currentSlideEl?.focus();
                            }} className={`nav-dot border-[5px] border-aths hover:border-yellow focus:border-yellow hover:bg-yellow focus:bg-yellow rounded-full ${currentSlide + 1 === image.id ? "current" : ""}`}>
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