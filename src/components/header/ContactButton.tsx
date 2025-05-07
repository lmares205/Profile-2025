'use client';

import { scrollToElement } from '@/utils/scrollUtils';

export default function ContactButton({ buttonStyle = 'primary' }: { buttonStyle?: string }) {
    return (
        <button
        className={ buttonStyle === "secondary" ? "bg-transparent hover:bg-yellow-500 text-white font-semibold hover:text-lunar uppercase border border-white hover:border-yellow-500 p-4 rounded-full transition-colors duration-200" : "bg-yellow-500 hover:bg-white text-lunar font-semibold uppercase border border-yellow-500 hover:border-lunar p-4 rounded-full transition-colors duration-200" }
        onClick={() => scrollToElement('contact')}
        type="button"
        >
            Contact Me
        </button>
    );
}