import Image from "next/image";

export default function Header() {
    return (
    <div className="header flex items-center w-screen fixed top-0 left-0 right-0">
        <Image
            className="rounded-full"
            src="/logo.png"
            alt="Leslie Mares logo"
            width={180}
            height={38}
            priority
        />
        <div className="header__links--desktop flex items-center gap-4">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#about"
            >
            About
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#projects"
            >
            Projects
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#skills"
            >
            Skills
            </a>
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="#contact"
            >
            Contact
            </a>
        </div>
    </div>
    );
}