import "./intro.module.scss";

export default function Intro() {
    return (
    <section id="intro" className="hero-banner bg-lunar text-white text-center w-screen h-screen flex-auto flex-col content-center">
        <h1 className="hero-banner__title">Leslie Mares</h1>
        <p className="hero-banner__subtitle text-white text-xl">Software Developer</p>
        <p className="hero-banner__motto text-white">Crafting delightful interfaces and occasionally talking to my plants about them.</p>
    </section>
    );
}