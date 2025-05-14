import ProductCard, { Asset } from "./ProductCard";

export default function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "Print and Digital Products and Services Client",
            assets: [
                {
                    id: 1,
                    src:"/xer-assets/XER-1.png",
                    alt: "Service Agreements in product details page",
                    type: "image"
                },
                {
                    id: 2,
                    src:"/xer-assets/XER-VID-1.mp4",
                    alt: "Service Agreements in product details page video",
                    type: "video"
                },
                {
                    id: 3,
                    src:"/xer-assets/XER-2.png",
                    alt: "Service Agreements in popup modal",
                    type: "image"
                },
                {
                    id: 4,
                    src:"/xer-assets/XER-3.png",
                    alt: "Service Agreements in main cart",
                    type: "image"
                }
            ],
            description: "Led the development of a sophisticated product warranty management system, integrating dynamic warranty offerings across multiple product lines. Designed and implemented custom modules to automate warranty associations, improve upsell opportunities, and enhance the customer experience by matching relevant warranty options to product attributes. Highlighted service agreements as add-ons throughout the user journey to increase product visibility, leveraging robust backend architecture to ensure scalability and maintainability, while adhering to SOLID principles. Built ADA-compliant elements, such as tooltips, radio buttons, and collapsible options, to further enhance the user experience.",
        },
        {
            id: 2,
            title: "Home Décor Industry Client",
            assets: [
                {
                    id: 1,
                    src: "/stk-assets/STK-1.png",
                    alt: "product listing page",
                    type: "image"
                },
                {
                    id: 2,
                    src: "/stk-assets/STK-VID-2.mp4",
                    alt: "product detail page filters and size selection",
                    type: "video"
                },
                {
                    id: 3,
                    src: "/stk-assets/STK-2.png",
                    alt: "product detail page",
                    type: "image"
                },
                {
                    id: 4,
                    src: "/stk-assets/STK-VID-1.mp4",
                    alt: "product detail page carpet size selection",
                    type: "video"
                },
                {
                    id: 5,
                    src: "/stk-assets/STK-3.png",
                    alt: "sample products modal",
                    type: "image"
                }
            ],
            description: "Developed tailored user experiences for both retail and B2B users, including custom logic to distinguish and display sample vs. main products, with B2B-exclusive purchasing access and price visibility. Integrated APIs for dynamic custom rug pricing based on the cutomer's desired dimensions. Implemented error handling for invalid carpet dimensions, and created a sizing feature on the product listing page that accepts rug dimensions and displays corresponding pricing directly on product cards. Modified third-party Klevu templates via post-render scripting to enhance product recommendations and designed a custom hero banner to elevate visual engagement—contributing to a 16% increase in conversion rate.",
        },
        {
            id: 3,
            title: "Headless eCommerce Application",
            assets: [
                {
                    id: 1,
                    src: "/hyd-assets/HYD-1.png",
                    alt: "product details page",
                    type: "image"
                },
                {
                    id: 2,
                    src: "/hyd-assets/HYD-2.png",
                    alt: "reviews widget",
                    type: "image"
                },
                {
                    id: 3,
                    src: "/hyd-assets/HYD-3.png",
                    alt: "add a review form",
                    type: "image"
                }
            ],
            description: "Led the development of a high-performance e-commerce solution using Shopify's Hydrogen framework and Remix, implementing a custom Yotpo Reviews integration that enhanced the product discovery experience. Engineered a secure, token-based authentication system with optimal caching strategies, resulting in improved API performance. Developed reusable TypeScript components adhering to modern web standards and accessibility guidelines. Utilized modern web technologies including React, TypeScript, GraphQL, and Tailwind CSS to create a responsive and maintainable codebase. The solution seamlessly integrated with Shopify's ecosystem while providing a superior user experience through custom-built features like star ratings, review statistics, and verified buyer badges."
        },
        {
            id: 4,
            title: "Boutique Fashion Industry Client",
            assets: [
                {
                    id: 1,
                    src: "/lsf-assets/LSF-1.png",
                    alt: "product listing page",
                    type: "image"
                },
                {
                    id: 2,
                    src: "/lsf-assets/LSF-2.png",
                    alt: "megamenu",
                    type: "image"
                },
                {
                    id: 3,
                    src: "/lsf-assets/LSF-3.png",
                    alt: "CMS content - richtext with images",
                    type: "image"
                },
                {
                    id: 4,
                    src: "/lsf-assets/LSF-4.png",
                    alt: "CMS content - grid with images, text, and buttons",
                    type: "image"
                }
            ],
            description: "Assisted in the full development of a Shopify store, from creating base theme styling to building custom content blocks and resolving bugs. Integrated Google Maps API to retrieve and display store location data based on proximity to users. Developed custom logic to link main products with child variants for individualized marketing and ranking. Designed ADA-compliant, responsive UI elements to ensure cross-browser compatibility, stability, and scalability. Aligned UI components with high-fidelity Figma designs and ensured quality by passing comprehensive functional QA testing. Shortly after launch, the site\'s first collaborative collection sold out in record time.",
        }
    ];
    return (
    <section id="projects" className="project-list md:px-7 md:py-0 px-0 py-0 w-screen max-w-[1280px] mx-auto text-center">
        <div className="project-list__inner md:px-4 md:py-6 px-5 py-4 bg-aths md:rounded-lg">
            <h2 className="project-list__title">Projects</h2>
            <div className="project-list__wrapper flex flex-col gap-5">
                {projects.map((project) => (
                    <ProductCard key={project.id} id={project.id} title={project.title} assets={project.assets} description={project.description} />
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