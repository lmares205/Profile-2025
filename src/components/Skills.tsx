export default function Skills() {
    const skillCategories = [
        {
          title: 'Languages',
          skills: ['HTML', 'CSS3', 'SASS', 'SCSS', 'LESS', 'Javascript', 'Liquid', 'GraphQL', 'PHP', 'TypeScript', 'Java', 'XML']
        },
        {
          title: 'Frameworks',
          skills: ['React', 'Next.js', 'NodeJS', 'Tailwind', 'jQuery', 'Angular']
        },
        {
          title: 'Testing',
          skills: ['Cypress', 'Cross-browser QA']
        },
        {
          title: 'Source Control',
          skills: ['Git', 'Azure']
        },
        {
          title: 'Tools',
          skills: ['Figma', 'Agile', 'Docker', 'Jira', 'Confluence']
        },
        {
          title: 'Platforms',
          skills: ['Shopify Plus', 'Magento', 'Headless CMS']
        },
        {
          title: 'Other',
          skills: ['Agile', 'Accessibility (WCAG)', 'SEO Basics', 'Shopify App Integrations']
        }
    ];

    return (
    <div className="skills">
        <h2 className="skills__title">Skills</h2>
        {skillCategories.map((category) => (
            <div key={category.title} className="skills__category">
                <h3 className="skills__category--title">{category.title}</h3>
                <ul className="skills__category--list">
                    {category.skills.map((skill) => (
                        <li key={skill} className="skills__category--list-item">{skill}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
    )
}