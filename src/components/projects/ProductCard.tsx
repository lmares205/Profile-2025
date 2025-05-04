import Image from "next/image";

export default function ProductCard({ title, image, description }: { title: string; image: string; description: string }) {
    return (
    <div className="project-card">
        <div className="project-card__image--wrapper">
            <Image className="project-card__image" src={image} alt={title} width={150} height={150} />
        </div>
        <div className="project-card__content--wrapper">
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__description">{description}</p>
        </div>
    </div>
    );
}