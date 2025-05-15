export default function Skills() {
    const skillCategories = [
        {
          title: 'Languages',
          bgColor: 'bg-lunar',
          textColor: 'text-white',
          skills: ['HTML', 'CSS3', 'SASS', 'SCSS', 'LESS', 'Javascript', 'Liquid', 'GraphQL', 'PHP', 'TypeScript', 'Java', 'XML']
        },
        {
          title: 'Frameworks',
          bgColor: 'bg-envy',
          textColor: 'text-black',
          skills: ['React', 'Next.js', 'Remix', 'NodeJS', 'Tailwind', 'jQuery', 'Angular']
        },
        {
          title: 'Testing',
          bgColor: 'bg-manatee',
          textColor: 'text-white',
          skills: ['Cypress', 'Cross-browser QA']
        },
        {
          title: 'Source Control',
          bgColor: 'bg-yellow',
          textColor: 'text-lunar',
          skills: ['Git', 'Azure']
        },
        {
          title: 'Tools',
          bgColor: 'bg-envy',
          textColor: 'text-black',
          skills: ['Figma', 'Agile', 'Docker', 'Jira', 'Confluence']
        },
        {
          title: 'Platforms',
          bgColor: 'bg-lunar',
          textColor: 'text-white',
          skills: ['Shopify Plus', 'Magento', 'Headless CMS']
        },
        {
          title: 'Other',
          bgColor: 'bg-yellow',
          textColor: 'text-lunar',
          skills: ['Agile', 'Accessibility (WCAG)', 'SEO Basics', 'Shopify App Integrations']
        }
    ];

    return (
    <section id="skills" className="skills md:px-10 md:py-5 px-5 py-3 w-screen max-w-[1280px] mx-auto">
        <h2 className="skills__title">Skills</h2>
        {skillCategories.map((category) => (
            <div key={category.title} className="skills__category mb-5">
                <h3 className="skills__category--title">{category.title}</h3>
                <ul className="skills__category--list flex flex-wrap font-medium gap-2 flex-row">
                    {category.skills.map((skill) => (
                        <li key={skill} className={`skills__category--list-item py-1.5 px-2 rounded-lg ${category.textColor} ${category.bgColor}`}>{skill}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
    )
}