import ProductCard from "./ProductCard";

export default function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "Print and Digital Products and Services Client",
            images: [
                {
                    id: 1,
                    src:"/print.png",
                    alt: ""
                },
                {
                    id: 2,
                    src:"/print-2.png",
                    alt: ""
                },
                {
                    id: 3,
                    src:"/print-3.png",
                    alt: ""
                }
            ],
            description: "Led the development of a sophisticated product warranty management system, integrating dynamic warranty offerings across multiple product lines. Designed and implemented custom PHP modules to automate warranty associations, improve upsell opportunities, and enhance the customer experience by matching relevant warranty options to product attributes. Highlighted service agreements as add-ons throughout the user journey to increase product visibility, leveraging robust backend architecture to ensure scalability and maintainability, while adhering to SOLID principles. Built ADA-compliant elements, such as tooltips, radio buttons, and collapsible options, to further enhance the user experience.",
        },
        {
            id: 2,
            title: "Home Décor Industry Client",
            images: [
                {
                    id: 1,
                    src: "/home-decor.png",
                    alt: ""
                },
                {
                    id: 2,
                    src: "/home-decor-2.png",
                    alt: ""
                },
                {
                    id: 3,
                    src: "/home-decor-3.png",
                    alt: ""
                }
            ],
            description: "Developed tailored user experiences for both retail and B2B users, including custom logic to distinguish and display sample vs. main products, with B2B-exclusive purchasing access and price visibility. Integrated APIs for dynamic custom rug pricing and implemented error handling for custom carpet dimensions. Modified third-party Klevu templates via post-render scripting to enhance product recommendations and designed a custom hero banner to elevate visual engagement—efforts that resulted in a 16% increase in conversion rate.",
        },
        {
            id: 3,
            title: "Boutique Fashion Industry Client",
            images: [
                {
                    id: 1,
                    src: "/boutique-fashion.png",
                    alt: ""
                },
                {
                    id: 2,
                    src: "/boutique-fashion-2.png",
                    alt: ""
                },
                {
                    id: 3,
                    src: "/boutique-fashion-3.png",
                    alt: ""
                }
            ],
            description: "Assisted in the full development of a Shopify store, from creating base theme styling to building custom content blocks and resolving bugs. Integrated Google Maps API to retrieve and display store location data based on proximity to users. Developed custom logic to link main products with child variants for individualized marketing and ranking. Designed ADA-compliant, responsive UI elements to ensure cross-browser compatibility, stability, and scalability. Aligned UI components with high-fidelity Figma designs and ensured quality by passing comprehensive functional QA testing. Shortly after launch, the site\'s first collaborative collection sold out in record time.",
        },
        {
            id: 4,
            title: "Headless eCommerce Application",
            images: [
                {
                    id: 1,
                    src: "/boutique-fashion.png",
                    alt: ""
                }
            ],
            description: "Led the development of a high-performance e-commerce solution using Shopify's Hydrogen framework and Remix, implementing a custom Yotpo Reviews integration that enhanced the product discovery experience. Engineered a secure, token-based authentication system with optimal caching strategies, resulting in improved API performance. Developed reusable TypeScript components adhering to modern web standards and accessibility guidelines. Utilized modern web technologies including React, TypeScript, GraphQL, and Tailwind CSS to create a responsive and maintainable codebase. The solution seamlessly integrated with Shopify's ecosystem while providing a superior user experience through custom-built features like star ratings, review statistics, and verified buyer badges."
        }
    ];
    return (
    <section id="projects" className="project-list md:px-7 md:py-0 px-0 py-0 w-screen max-w-[1280px] mx-auto">
        <div className="project-list__inner md:px-4 md:py-6 px-5 py-4 bg-aths md:rounded-lg">
            <h2 className="project-list__title">Projects</h2>
            <div className="project-list__wrapper flex flex-col gap-5">
                {projects.map((project) => (
                    <ProductCard key={project.id} id={project.id} title={project.title} images={project.images} description={project.description} />
                ))}
            </div>
        </div>
    </section>
    );
}

/*
projects
XER - pics
ASH - pics
LSF - pics

Others projects- note to self make gif's
BBB - pics
CTV - pics
NOU - pics
TOR - pics
REQ - pics
*/