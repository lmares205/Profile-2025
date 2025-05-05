'use client';

import Image from "next/image";

export default function Header() {
    const handleClick = (destination: string) => {
        let destinationEl = document.getElementById(destination);

        if (destinationEl) {
            let destinationY = destinationEl.offsetTop - 140;
            window.scrollTo({
                top: destinationY,
                left: 0,
                behavior: 'smooth'
            })
        }
    };

    return (
        <div className="header-wrapper fixed top-0 w-screen mx-auto bg-linear-to-b from-lunar/100 to-lunar/80 backdrop-blur-xs">
            <div className="header hidden md:flex items-center justify-between px-10 py-5 w-screen max-w-[1280px] mx-auto">
                <Image
                    className="rounded-full"
                    src="/logo.png"
                    alt="Leslie Mares logo"
                    width={100}
                    height={100}
                    priority
                />
                <div className="header__links--desktop text-white flex items-center gap-10">
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 uppercase"
                    onClick={() => handleClick('about')}
                    type="button"
                    >
                    About
                    </button>
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 uppercase"
                    onClick={() => handleClick('projects')}
                    type="button"
                    >
                    Projects
                    </button>
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 uppercase"
                    onClick={() => handleClick('skills')}
                    type="button"
                    >
                    Skills
                    </button>
                </div>
                <div className="contact-button">
                    <button
                    className="bg-transparent hover:bg-yellow-500 text-white hover:text-lunar uppercase border border-white hover:border-yellow-500 p-4 rounded-full transition-colors duration-200"
                    onClick={() => handleClick('contact')}
                    type="button"
                    >
                    Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
}