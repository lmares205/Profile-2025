import ProductCard from "./ProductCard";

export default function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "Print and Digital Products and Services Client",
            image: "/print.png",
            description: "Led the development of a sophisticated product warranty management system, integrating dynamic warranty offerings across multiple product lines. Designed and implemented custom PHP modules to automate warranty associations, improve upsell opportunities, and enhance the customer experience by matching relevant warranty options to product attributes. Highlighted service agreements as add-ons throughout the user journey to increase product visibility, leveraging robust backend architecture to ensure scalability and maintainability, while adhering to SOLID principles. Built ADA-compliant elements, such as tooltips, radio buttons, and collapsible options, to further enhance the user experience.",
        },
        {
            id: 2,
            title: "Home Décor Industry Client",
            image: "/home-decor.png",
            description: "Developed tailored user experiences for both retail and B2B users, including custom logic to distinguish and display sample vs. main products, with B2B-exclusive purchasing access and price visibility. Integrated APIs for dynamic custom rug pricing and implemented error handling for custom carpet dimensions. Modified third-party Klevu templates via post-render scripting to enhance product recommendations and designed a custom hero banner to elevate visual engagement—efforts that resulted in a 16% increase in conversion rate.",
        },
        {
            id: 3,
            title: "Boutique Fashion Industry Client",
            image: "/boutique-fashion.png",
            description: "Assisted in the full development of a Shopify store, from creating base theme styling to building custom content blocks and resolving bugs. Integrated Google Maps API to retrieve and display store location data based on proximity to users. Developed custom logic to link main products with child variants for individualized marketing and ranking. Designed ADA-compliant, responsive UI elements to ensure cross-browser compatibility, stability, and scalability. Aligned UI components with high-fidelity Figma designs and ensured quality by passing comprehensive functional QA testing. Shortly after launch, the site\'s first collaborative collection sold out in record time.",
        },
    ];
    return (
    <div className="project-list">
        <h2 className="project-list__title">Projects</h2>
        <div className="project-list__wrapper">
            {projects.map((project) => (
                <ProductCard key={project.id} title={project.title} image={project.image} description={project.description} />
            ))}
        </div>
    </div>
    );
}