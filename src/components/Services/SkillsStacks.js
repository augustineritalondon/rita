import React, { useState } from 'react';
import './SkillsStacks.css';
import { Fade } from 'react-awesome-reveal';

// Tools images from assets
import gitIcon from '../../assets/images/git.png';
import vscodeIcon from '../../assets/images/vscode.png';
import figmaIcon from '../../assets/images/figma.png';
import photoshopIcon from '../../assets/images/photoshop.png';
import illustratorIcon from '../../assets/images/illustrator.png';
import slackIcon from '../../assets/images/slack.png';

const STACK_CATEGORIES = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Database & Cloud' },
    { id: 'design', label: 'Design & Workflow' },
];

const SKILLS_DATA = [
    // Frontend
    { name: 'React.js / Next.js', category: 'frontend', level: 92, exp: '4+ Years', tag: 'Core', desc: 'Component architecture, SSR, ISR, custom hooks, Zustand & Redux state management.' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 95, exp: '4+ Years', tag: 'Expert', desc: 'Asynchronous programming, closures, event-driven workflows, performance profiling.' },
    { name: 'TypeScript', category: 'frontend', level: 85, exp: '3+ Years', tag: 'Advanced', desc: 'Strict typing, generic interfaces, complex object models, typed API contracts.' },
    { name: 'Tailwind CSS / SCSS', category: 'frontend', level: 90, exp: '4+ Years', tag: 'Advanced', desc: 'Design systems, responsive mobile-first grids, custom utility themes and animations.' },
    { name: 'HTML5 / Semantic Web', category: 'frontend', level: 95, exp: '5+ Years', tag: 'Expert', desc: 'WCAG accessibility, SEO optimization, responsive DOM layouts.' },

    // Backend
    { name: 'Node.js / Express', category: 'backend', level: 85, exp: '3+ Years', tag: 'Core', desc: 'RESTful API architecture, middleware, JWT authentication, payment webhooks.' },
    { name: 'RESTful APIs / GraphQL', category: 'backend', level: 88, exp: '3+ Years', tag: 'Advanced', desc: 'Endpoint design, third-party integrations, rate limiting, and caching.' },
    { name: 'Payment Integrations', category: 'backend', level: 82, exp: '2+ Years', tag: 'Specialist', desc: 'Crypto & fiat gateways, Stripe, Paystack, 100Pay dashboard SDKs.' },

    // Database & Cloud
    { name: 'MySQL / PostgreSQL', category: 'database', level: 80, exp: '3+ Years', tag: 'Advanced', desc: 'Relational schemas, query optimization, indexing, foreign keys, Prisma/Sequelize.' },
    { name: 'MongoDB / NoSQL', category: 'database', level: 78, exp: '2+ Years', tag: 'Proficient', desc: 'Document schemas, aggregation pipelines, Mongoose data modeling.' },
    { name: 'Git / GitHub CI/CD', category: 'database', level: 90, exp: '4+ Years', tag: 'Daily', desc: 'Branch management, code reviews, automated Vercel/Netlify deployment pipelines.' },

    // Design
    { name: 'Figma UI/UX', category: 'design', level: 88, exp: '4+ Years', tag: 'Design', desc: 'High-fidelity wireframes, interactive prototypes, design tokens, auto-layout.' },
    { name: 'Adobe Photoshop / Illustrator', category: 'design', level: 80, exp: '3+ Years', tag: 'Design', desc: 'Visual assets, SVG icon optimization, brand graphics and vector manipulation.' },
];

const TOOLS_DATA = [
    { name: 'Git & GitHub', role: 'Version Control', icon: gitIcon },
    { name: 'VS Code', role: 'Code Editor', icon: vscodeIcon },
    { name: 'Figma', role: 'Interface Design', icon: figmaIcon },
    { name: 'Photoshop', role: 'Asset Creation', icon: photoshopIcon },
    { name: 'Illustrator', role: 'Vector Graphics', icon: illustratorIcon },
    { name: 'Slack', role: 'Team Collaboration', icon: slackIcon },
];

const SkillsStacks = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const filteredSkills = activeTab === 'all'
        ? SKILLS_DATA
        : SKILLS_DATA.filter(skill => skill.category === activeTab);

    return (
        <section className='skills-stacks-section'>
            <div className='skills-stacks-container'>

                {/* ── Section Header ── */}
                <Fade bottom duration={800} triggerOnce>
                    <div className='ss-header'>
                        <div className='ss-header-left'>
                            <p className='ss-eyebrow'>Technical Capabilities</p>
                            <h2 className='ss-title'>Tech Stack & Skillset</h2>
                        </div>
                        <p className='ss-subtitle'>
                            A curated suite of modern technologies, libraries, and frameworks I leverage to design, build, and deploy production-ready digital products.
                        </p>
                    </div>
                </Fade>

                {/* ── Filter Tabs ── */}
                <Fade bottom duration={900} delay={100} triggerOnce>
                    <div className='ss-filter-row'>
                        {STACK_CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                className={`ss-filter-btn${activeTab === cat.id ? ' ss-filter-btn--active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </Fade>

                {/* ── Interactive Skills Grid ── */}
                <div className='ss-skills-grid'>
                    {filteredSkills.map((skill, index) => (
                        <Fade key={skill.name} bottom duration={600} delay={index * 40} triggerOnce>
                            <div
                                className={`ss-skill-card${hoveredSkill === skill.name ? ' ss-skill-card--hovered' : ''}`}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                                <div className='ss-card-top'>
                                    <div className='ss-card-title-wrap'>
                                        <h3 className='ss-card-name'>{skill.name}</h3>
                                        <span className='ss-card-exp'>{skill.exp}</span>
                                    </div>
                                    <span className='ss-card-tag'>{skill.tag}</span>
                                </div>

                                {/* Interactive Progress Bar */}
                                <div className='ss-progress-wrap'>
                                    <div className='ss-progress-meta'>
                                        <span className='ss-progress-label'>Proficiency</span>
                                        <span className='ss-progress-val'>{skill.level}%</span>
                                    </div>
                                    <div className='ss-progress-track'>
                                        <div
                                            className='ss-progress-fill'
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                {/* ── Development Suite / Tools Section ── */}
                <Fade bottom duration={900} delay={150} triggerOnce>
                    <div className='ss-tools-wrapper'>
                        <div className='ss-tools-header'>
                            <p className='ss-eyebrow'>Everyday Workflow</p>
                            <h3 className='ss-tools-title'>Software & Development Tools</h3>
                        </div>

                        <div className='ss-tools-grid'>
                            {TOOLS_DATA.map((tool) => (
                                <div key={tool.name} className='ss-tool-item'>
                                    <div className='ss-tool-icon-box'>
                                        <img src={tool.icon} alt={tool.name} className='ss-tool-icon' />
                                    </div>
                                    <div className='ss-tool-meta'>
                                        <h4 className='ss-tool-name'>{tool.name}</h4>
                                        <span className='ss-tool-role'>{tool.role}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>

            </div>
        </section>
    );
};

export default SkillsStacks;

