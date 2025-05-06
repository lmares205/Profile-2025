'use client';

import { scrollToElement } from '@/utils/scrollUtils';

export default function ContactButton() {
    return (
        <button
        className="bg-transparent hover:bg-yellow-500 text-white hover:text-lunar uppercase border border-white hover:border-yellow-500 p-4 rounded-full transition-colors duration-200"
        onClick={() => scrollToElement('contact')}
        type="button"
        >
            Contact Me
        </button>
    );
}