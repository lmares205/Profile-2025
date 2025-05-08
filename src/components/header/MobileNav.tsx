'use client';

import { scrollToElement } from '@/utils/scrollUtils';
import Image from 'next/image';

interface MobileNavProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
    return (
        <div id="mobile-nav" className={`mobile-nav ${isOpen ? 'open' : 'closed'} flex flex-col p-3 bg-aths w-screen max-w-[300px] h-full md:hidden z-2`}>
            <div className="mobile-nav__close flex justify-end pb-3">
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                >
                    <Image src="/close.svg" alt="close icon" width={30} height={30} />
                </button>
            </div>
            <div className="mobile-nav__inner flex flex-col flex-grow gap-10 p-7 bg-white rounded-lg">
                <div className="mobile-nav__links flex flex-col gap-8">
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-lunar font-semibold uppercase"
                    onClick={() => {scrollToElement('about'); setIsOpen(false); }}
                    type="button"
                    >
                        <Image src="/about.svg" alt="about icon" width={20} height={20} />
                        About
                    </button>
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-lunar font-semibold uppercase"
                    onClick={() => {scrollToElement('projects'); setIsOpen(false); }}
                    type="button"
                    >
                        <Image src="/projects.svg" alt="projects icon" width={20} height={20} />
                        Projects
                    </button>
                    <button
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-lunar font-semibold uppercase"
                    onClick={() => {scrollToElement('skills'); setIsOpen(false); }}
                    type="button"
                    >
                        <Image src="/skills.svg" alt="skills icon" width={20} height={20} />
                        Skills
                    </button>
                </div>
                <button
                className="primary"
                onClick={() => {scrollToElement('contact'); setIsOpen(false);}}
                type="button"
                >
                    Contact Me
                </button>
            </div>
        </div>
    );
}