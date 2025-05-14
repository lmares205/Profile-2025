"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Asset {
    id: number;
    src: string;
    alt: string;
    type: 'image' | 'video';
}

export default function ProductCard({ title, assets, description, id }: { title: string; assets: Asset[]; description: string; id: number }) {
    const assetsCount = assets.length;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(assetsCount - 1);
    const [nextSlide, setNextSlide] = useState(1);
    const [dotNavigation, setDotNavigation] = useState<number | null>(null);
    const [transitionDirection, setTransitionDirection] = useState<'next' | 'prev' | null>(null);
    const [slideHeight, setSlideHeight] = useState('600px');

    useEffect(() => {
        const calculateHeight = () => {
            const aspectRatio = 1.6;
            const projectCard = document.getElementById(`project-card-${id}`);
            if (!projectCard) return;
            const screenWidth = projectCard.clientWidth;
            const calculatedHeight = Math.min(screenWidth / aspectRatio, 600);
            setSlideHeight(`${calculatedHeight}px`);
        };

        calculateHeight();
        window.addEventListener('resize', calculateHeight);
        return () => window.removeEventListener('resize', calculateHeight);
    }, []);

    return (
        <div id={`project-card-${id}`} className="product-card mb-8 md:mb-12">
            <h3 id={`project-card-${id}-title`} className="product-card__title">{title}</h3>
            <div id={`project-card-${id}-carousel`} role="group" className="project-card-carousel relative my-4" aria-labelledby={`project-card-${id}-title`}>
                <ul className="slides flex flex-row max-h-[600px] gap-2 rounded-lg overflow-hidden" style={{ height: slideHeight }}>
                    {assets.map((asset) => (
                        <li key={asset.id} className={`slide object-contain md:p-2 bg-aths ${currentSlide + 1 === asset.id ? "current" : ""} ${prevSlide + 1 === asset.id ? `prev${transitionDirection === 'prev' && dotNavigation === null ? " in-transition" : ""}` : ""} ${nextSlide + 1 === asset.id ? `next${transitionDirection === 'next' && dotNavigation === null ? " in-transition" : ""}` : ""} ${dotNavigation === asset.id - 1 ? " in-transition" : ""}`} 
                        aria-hidden={currentSlide + 1 !== asset.id} tabIndex={-1} 
                        onTransitionEnd={(event) => { setTransitionDirection(null); setDotNavigation(null); }}>
                            {asset.type === 'video' ? (
                                <video className="project-card__video object-contain h-full m-auto" src={asset.src} controls playsInline />
                            ) : (
                                <Image className="project-card__image object-contain h-full" src={asset.src} alt={asset.alt} height={1280} width={1280} />
                            )}
                        </li>
                    ))}
                </ul>
                <ul className="controls hidden md:flex flex-row justify-between gap-2 w-full z-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <li>
                        <button type="button" className="btn-prev p-2.5 bg-white border-1 border-lunar hover:bg-yellow focus:bg-yellow rounded-full" onClick={() => {
                            setTransitionDirection('next');
                            const newCurrentSlide = currentSlide === 0 ? assetsCount - 1 : currentSlide - 1;
                            setCurrentSlide(newCurrentSlide);
                            setNextSlide(currentSlide);
                            setPrevSlide(newCurrentSlide === 0 ? assetsCount - 1 : newCurrentSlide - 1);
                        }}>
                            <Image src={'/prev.svg'} alt="Previous Slide" width={30} height={30} />
                        </button>
                    </li>
                    <li>
                        <button type="button" className="btn-next p-2.5 bg-white border-1 border-lunar hover:bg-yellow focus:bg-yellow rounded-full" onClick={() => {
                            setTransitionDirection('prev');
                            const newCurrentSlide = currentSlide === assetsCount - 1 ? 0 : currentSlide + 1;
                            setCurrentSlide(newCurrentSlide);
                            setNextSlide(newCurrentSlide === assetsCount - 1 ? 0 : newCurrentSlide + 1);
                            setPrevSlide(currentSlide);
                        }}>
                            <Image src={'/next.svg'} alt="Next Slide" width={30} height={30} />
                        </button>
                    </li>
                </ul>
                <ul className="slidenav flex flex-row justify-center gap-2 mt-2.5">
                    {assets.map((asset) => (
                        <li key={asset.id}>
                            <button data-slide={asset.id} onClick={() => {
                                const newCurrentSlide = asset.id - 1;
                                if (newCurrentSlide === currentSlide) return;
                                if (newCurrentSlide > currentSlide) {
                                    setTransitionDirection('prev');
                                } else {
                                    setTransitionDirection('next');
                                }
                                setDotNavigation(currentSlide);
                                setCurrentSlide(newCurrentSlide);
                                setNextSlide(newCurrentSlide === assetsCount - 1 ? 0 : newCurrentSlide + 1);
                                setPrevSlide(newCurrentSlide === 0 ? assetsCount - 1 : newCurrentSlide - 1);
                                const currentSlideEl : HTMLElement = document.querySelector(`#project-card-${id} .slide.current`) as HTMLElement;
                                currentSlideEl?.focus();
                            }} className={`nav-dot border-[5px] border-aths hover:border-yellow focus:border-yellow hover:bg-yellow focus:bg-yellow rounded-full ${currentSlide + 1 === asset.id ? "current" : ""}`}>
                                <span className="visuallyhidden">Slide {asset.id} of {assetsCount} : {asset.alt}</span>
                                <Image src={'/navigation-dot.svg'} alt="Navigation Dot" width={20} height={20} />
                            </button>
                        </li>
                    ))}
                </ul>
                <div aria-live="polite" aria-atomic="true" className="liveregion visuallyhidden">Slide {currentSlide + 1} of {assetsCount}</div>
            </div>
            <div className="product-card__description max-w-[950px] mx-auto">
                <p>{description}</p>
            </div>
        </div>
    );
}