import Image from "next/image";

export default function Contact() {
    return (
    <section id="contact" className="contact w-screen bg-envy">
        <div className="contact__inner-wrapper md:px-10 md:py-10 px-5 py-3 max-w-[1280px] mx-auto">
            <h2 className="contact__title text-center">Contact Me</h2>
            <div className="contact__links flex flex-col md:flex-row gap-2.5 md:gap-5">
                <a
                    className="bg-[url(/contact-assets/succulent-1.png)] bg-cover bg-center bg-no-repeat w-full md:w-1/3 md:hover:w-1/2 transition-width duration-300 ease-in-out h-[300px] md:h-[500px] gap-2 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4 text-lunar text-2xl font-bold"
                    href="https://www.linkedin.com/in/leslie-mares/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="contact-link__wrapper w-full h-full flex items-center justify-center bg-[rgba(244,238,226,0.20)]">
                        <div className="contact-text__wrapper flex items-center justify-center gap-2 bg-[rgba(244,238,226,0.85)] rounded-xl py-2.5 px-5">
                            <Image
                                className="mr-1.5"
                                aria-hidden
                                src="/linkedin.svg"
                                alt="LinkedIn icon"
                                width={24}
                                height={24}
                            />
                            LinkedIn
                        </div>
                    </div>
                </a>
                <a
                    className="bg-[url(/contact-assets/succulent-2.png)] bg-cover bg-center bg-no-repeat w-full md:w-1/3 md:hover:w-1/2 transition-width duration-300 ease-in-out h-[300px] md:h-[500px] gap-2 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4 text-lunar text-2xl font-bold"
                    href="https://github.com/lmaresRP"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="contact-link__wrapper w-full h-full flex items-center justify-center bg-[rgba(244,238,226,0.20)]">
                        <div className="contact-text__wrapper flex items-center justify-center gap-2 bg-[rgba(244,238,226,0.85)] rounded-xl py-2.5 px-5">
                            <Image
                                className="mr-1.5"
                                aria-hidden
                                src="/github.svg"
                                alt="GitHub icon"
                                width={24}
                                height={24}
                            />
                            GitHub
                        </div>
                    </div>
                </a>
                <a
                    className="bg-[url(/contact-assets/succulent-5.png)] bg-cover bg-center bg-no-repeat w-full md:w-1/3 md:hover:w-1/2 transition-width duration-300 ease-in-out h-[300px] md:h-[500px] gap-2 hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4 text-lunar text-2xl font-bold"
                    href="mailto:lmmares102@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="contact-link__wrapper w-full h-full flex items-center justify-center bg-[rgba(244,238,226,0.20)]">
                        <div className="contact-text__wrapper flex items-center justify-center gap-2 bg-[rgba(244,238,226,0.85)] rounded-xl py-2.5 px-5">
                            <Image
                            className="mr-1.5"
                            aria-hidden
                            src="/email.svg"
                            alt="Email icon"
                            width={24}
                            height={24}
                            />
                            Email
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    );
}