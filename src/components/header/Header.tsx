'use client';

import Image from "next/image";
import { scrollToElement } from '@/utils/scrollUtils';
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="header-wrapper fixed top-0 w-screen mx-auto bg-linear-to-b from-lunar/100 to-lunar/80 backdrop-blur-xs z-1">
            <div className="header flex items-center justify-center md:justify-between md:px-10 md:py-5 px-5 py-3 w-screen max-w-[1280px] mx-auto">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="mobile-nav-button md:hidden absolute left-7 top-7 p-2 bg-white rounded-lg cursor-pointer"
                >
                    <Image
                        src="/menu.svg"
                        alt="menu icon"
                        width={25}
                        height={25}
                        priority
                    />
                </button>
                <Image
                    className="rounded-lg w-[75px] h-[75px] md:w-[100px] md:h-[100px]"
                    src="/LM_logo.png"
                    alt="Leslie Mares logo"
                    width={200}
                    height={200}
                    priority
                />
                <div className="header__links--desktop text-white hidden md:flex items-center gap-10">
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 uppercase"
                    onClick={() => scrollToElement('about')}
                    type="button"
                    >
                    About
                    </button>
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 uppercase"
                    onClick={() => scrollToElement('projects')}
                    type="button"
                    >
                    Projects
                    </button>
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 uppercase"
                    onClick={() => scrollToElement('skills')}
                    type="button"
                    >
                    Skills
                    </button>
                </div>
                <div className="contact-button hidden md:block">
                <button
                className="secondary"
                onClick={() => scrollToElement('contact')}
                type="button"
                >
                    Contact Me
                </button>
                </div>
            </div>
        </div>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}