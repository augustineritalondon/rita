import React, { useState, useEffect, useRef } from 'react';
import './HomeWorkExperience.css';

const experiences = [
    {
        id: 1,
        company: 'Accordia Harmony CIC',
        role: 'FullStack Developer',
        period: '2025',
        location: 'Remote - London, United Kingdom',
        dotColor: '#fa5858',
        tag: 'Current Role',
        projects: [
            {
                title: 'Life Skills Connect — Youth Development, Learning & Skills Platform',
                link: 'https://lifeskills-connect.accordiaharmony.org/',
                linkText: 'Live Website',
                points: [
                    'Built and launched a unique LMS with user location tracking, emergency response, and more across all platforms (web, iOS, and Android).',
                    'Supervised the design team and developed the platform architecture and the web and mobile applications using React Native, Next.js, and TypeScript, building responsive interfaces and easily reusable components.',
                    'Built and integrated a course tracking system and a custom video player that prevents users from skipping course content and audio.',
                    'Developed the platform’s Safe Space and journey-safety features using the Google Maps JavaScript SDK, displaying nearby hospitals, police stations, and other relevant safe locations within a 1.5 km radius, with real-time directions and journey tracking.',
                    'Built and integrated a real-time user chat system and functionality using WebSockets, with instructor controls.',
                    'Built role-based dashboards for Super Admins, Admins, Instructors, and Partners, implementing appropriate permissions and workflows for managing users, courses, and platform content.',
                    'Implemented platform analytics and activity tracking, logging user actions and providing administrators with clarity into user activity across the application.',
                    'Built and automated backend services using Prisma and database functionality using Node.js and MySQL.',
                    'Deployed and managed the backend services on a Linux VPS while deploying the frontend through Vercel, and prepared the mobile application for release through Apple TestFlight.',
                ],
            },
        ],
    },
    {
        id: 2,
        company: '100Pay',
        role: 'Frontend Engineer',
        period: '2023 - 2025',
        location: 'Abuja, Nigeria',
        dotColor: '#4ade80',
        tag: null,
        projects: [
            {
                title: '100Pay Merchant Dashboard - Fintech/Crypto-Fiat Financial Platform',
                link: 'https://dashboard.100pay.co/login',
                linkText: 'Live Platform',
                points: [
                    'Built and launched 100Pay, a crypto exchange platform displaying real-time wallet balances, account information, asset details, and transaction-related data.',
                    'Implemented crypto-to-crypto and crypto-to-fiat conversion, app workflows, and conversion values using data from Coinbase through a secure external API.',
                    'Integrated GraphQL APIs to retrieve and display real-time user account data and transaction data from backend services.',
                    'Built bank account management and local payout mechanisms, allowing users to store banking info and transact easily, and integrated a banking package to retrieve bank information.',
                    'Designed the platform KYC workflows for both individuals and businesses, enabling users to submit verification documents for backend/admin review through secured separate verification flows.',
                    'Integrated a utility payments system for airtime, mobile data, electricity, and TV subscriptions, using SafeHaven\'s third-party service for utility transactions.',
                    'Built reusable React and TypeScript components and integrated APIs across the dashboard to enforce security; worked closely with the team to deliver and test production features.',
                ],
            },
            {
                title: '100Pay Shop & Merchant Checkout Template',
                link: 'https://feat-auth--shp100-v2.netlify.app/',
                linkText: 'Demo Template',
                points: [
                    'Built the merchant dashboard and core features for Leadcart, an e-commerce product within the 100Pay platform.',
                    'Implemented order management and tracking features for merchants, enabling them to receive, manage, and track their customer orders.',
                    'Built shipping features for setting shipping locations and tracking deliveries.',
                    'Integrated APIs to retrieve and display customers, products, services, and merchant data.',
                    'Built reusable React components and connected the frontend to the backend services.'
                ],
            },
        ],
    },
    {
        id: 3,
        company: 'Akawo.me Synergy Limited',
        role: 'Frontend Developer',
        period: '2023 - 2024',
        location: 'Port Harcourt, Nigeria',
        dotColor: '#fb923c',
        tag: null,
        projects: [
            // {
            //     title: 'Egis Machinery — Industrial E-commerce Platform',
            //     link: 'https://egis-frontend-techfaithful.vercel.app/',
            //     linkText: 'Live Website',
            //     points: [
            //         'Developed a full-scale e-commerce web platform for industrial equipment with dynamic catalog filtering, product specs, and request-for-quote workflows.',
            //         'Constructed modular, high-performance UI components using modern React patterns, ensuring seamless responsiveness across all screen sizes.',
            //         'Integrated RESTful backend endpoints for inventory management, quote inquiries, and client order tracking.',
            //     ],
            // },
            {
                title: 'Akawo.me — Digital Savings & Thrift Platform',
                link: 'https://akawo.me/',
                linkText: 'Live Platform',
                points: [
                    'Built and launched the company landing page website using React, implementing a responsive and user-friendly interface on both desktop and mobile devices.',
                    'Converted designs into reusable React components and structured the frontend to make the code easy to maintain and update.',
                    'Implemented responsive layouts, navigation, forms, and interactive UI elements across the website and mobile applications.',
                    'Worked closely with the product design team to build and improve the website interfaces based on project requirements and designs.'
                ],
            },
        ],
    },
    {
        id: 4,
        company: 'Harvoxx Tech Hub',
        role: 'Frontend Developer',
        period: '2022 - 2023',
        location: 'Port Harcourt, Nigeria',
        dotColor: '#facc15',
        tag: null,
        projects: [
            {
                title: 'Harvoxx School Training & Student Management Portal',
                link: 'https://school.hthub.com.ng',
                linkText: 'School Portal',
                points: [
                    'Engineered course registration, cohort scheduling, and student intake workflows using React and Node.js.',
                    'Mentored and graduated over 100+ aspiring software developers across hands-on bootcamps in modern HTML5, CSS3, JavaScript (ES6+), and React.js.',
                    'Conducted live code reviews, agile sprint simulations, and taught industry standard Git workflows and debugging techniques.',
                ],
            },
        ],
    },
    {
        id: 5,
        company: 'De-Willex Security',
        role: 'Web & UI Designer',
        period: '2022',
        location: 'Lagos, Nigeria',
        dotColor: '#a78bfa',
        tag: null,
        projects: [
            {
                title: 'De-Willex Security Corporate Portal & Digital Systems',
                link: null,
                linkText: null,
                points: [
                    'Designed and launched the official corporate web presence and service booking system for security personnel deployment.',
                    'Created high-fidelity Figma interactive wireframes and component systems used across desktop and mobile marketing touchpoints.',
                    'Streamlined customer inquiry response times by embedding direct quotation request funnels.',
                ],
            },
        ],
    },
    {
        id: 6,
        company: 'CLE Engineering',
        role: 'Junior Web Developer',
        period: '2021 - 2022',
        location: 'Port Harcourt, Nigeria',
        dotColor: '#38bdf8',
        tag: null,
        projects: [
            {
                title: 'CLE Engineering Web Platform & Maintenance',
                link: null,
                linkText: null,
                points: [
                    'Assisted in building responsive landing pages, engineering portfolio galleries, and service catalogs.',
                    'Optimized image assets, asset loading speeds, and maintained cross-browser compatibility across legacy and modern devices.',
                    'Supported senior engineers in debugging JavaScript frontend functionality and implementing CSS layout updates.',
                ],
            },
        ],
    },
];

const HomeWorkExperience = () => {
    const [activeId, setActiveId] = useState(1);
    const [openAccordionId, setOpenAccordionId] = useState(1);
    const sectionRef = useRef(null);

    // Pinning scroll listener:
    // When the section reaches the top (y=64 under navbar), it stays pinned to screen
    // As user scrolls down the runway, each experience opens sequentially.
    // Once the user finishes scrolling through the last one, the page naturally continues.
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const navbarOffset = 64; // height of fixed navbar
            const scrollDistance = navbarOffset - rect.top;
            const scrollableDistance = rect.height - window.innerHeight;

            if (scrollableDistance <= 0) return;

            if (scrollDistance <= 0) {
                // Above the section
                setActiveId(experiences[0].id);
            } else if (scrollDistance >= scrollableDistance) {
                // Finished the runway, past the last item
                setActiveId(experiences[experiences.length - 1].id);
            } else {
                // Inside the pinned scroll zone: smoothly map to experience index
                const progress = scrollDistance / scrollableDistance;
                const index = Math.min(
                    experiences.length - 1,
                    Math.floor(progress * experiences.length)
                );
                setActiveId(experiences[index].id);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manual click on tab: smooth scroll page to corresponding position in runway
    const handleTabClick = (id) => {
        setActiveId(id);
        if (!sectionRef.current) return;
        const index = experiences.findIndex((e) => e.id === id);
        if (index === -1) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        const targetOffset = 64 + (index / experiences.length) * scrollableDistance + 10;
        const currentScrollY = window.pageYOffset;
        const targetScrollY = currentScrollY + rect.top + targetOffset - 64;

        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
    };

    const toggleAccordion = (id) => {
        setOpenAccordionId(openAccordionId === id ? null : id);
    };

    return (
        <section className="home-work-exp" id="experience" ref={sectionRef}>
            {/* Pinned frame: stays fixed to screen during the scroll runway */}
            <div className="hwe-sticky-track">
                <div className="hwe-container">

                    {/* Section header */}
                    <div className="hwe-header">
                        <div className="hwe-header-left">
                            <p className="hwe-eyebrow">Career Journey</p>
                            <h2 className="hwe-title">My Work Experience</h2>
                        </div>

                        {/* Years badge */}
                        <div className="hwe-years-badge">
                            <span className="hwe-years-num">7+</span>
                            <span className="hwe-years-label">
                                Years of<br />Experience
                            </span>
                        </div>
                    </div>

                    {/* ── DESKTOP VIEW: Fixed Tabs + Single Detail Window changing on scroll ── */}
                    <div className="hwe-body hwe-desktop-only">
                        {/* Left nav tabs */}
                        <div className="hwe-tabs">
                            {experiences.map((exp) => (
                                <button
                                    key={exp.id}
                                    type="button"
                                    className={`hwe-tab ${activeId === exp.id ? 'hwe-tab--active' : ''}`}
                                    onClick={() => handleTabClick(exp.id)}
                                    style={{ '--dot': exp.dotColor }}
                                >
                                    <span
                                        className="hwe-tab-dot"
                                        style={{ background: exp.dotColor }}
                                    />
                                    <span className="hwe-tab-inner">
                                        <span className="hwe-tab-company">{exp.company}</span>
                                        <span className="hwe-tab-period">{exp.period}</span>
                                    </span>
                                    {exp.tag && (
                                        <span className="hwe-tab-current">{exp.tag}</span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Right detail panel: active experience is displayed */}
                        <div className="hwe-detail-wrap">
                            {experiences.map((exp) => {
                                const isVisible = activeId === exp.id;
                                return (
                                    <div
                                        key={exp.id}
                                        className={`hwe-detail ${isVisible ? 'hwe-detail--visible' : ''}`}
                                    >
                                        <div
                                            className="hwe-accent-bar"
                                            style={{ background: exp.dotColor }}
                                        />

                                        <div className="hwe-detail-top">
                                            <div>
                                                <h3 className="hwe-detail-role">{exp.role}</h3>
                                                <p className="hwe-detail-company">
                                                    {exp.company}
                                                    <span className="hwe-detail-sep"> · </span>
                                                    {exp.location}
                                                </p>
                                            </div>
                                            <span
                                                className="hwe-detail-period"
                                                style={{ color: exp.dotColor, borderColor: `${exp.dotColor}44` }}
                                            >
                                                {exp.period}
                                            </span>
                                        </div>

                                        <div className="hwe-projects-list">
                                            {exp.projects.map((proj, pIdx) => (
                                                <div key={pIdx} className="hwe-project-block">
                                                    <div className="hwe-project-header">
                                                        <h4 className="hwe-project-title">
                                                            {proj.title}
                                                        </h4>
                                                        {proj.link && (
                                                            <a
                                                                href={proj.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hwe-project-link"
                                                            >
                                                                [{proj.linkText || 'Live Website'}] ↗
                                                            </a>
                                                        )}
                                                    </div>
                                                    <ul className="hwe-project-bullets">
                                                        {proj.points.map((pt, ptIdx) => (
                                                            <li key={ptIdx}>{pt}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="hwe-detail-footer">
                                            <span
                                                className="hwe-dot-pulse"
                                                style={{ background: exp.dotColor, boxShadow: `0 0 10px ${exp.dotColor}88` }}
                                            />
                                            <span className="hwe-detail-active-label">
                                                {exp.tag ? 'Currently working here' : 'Completed tenure'}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── MOBILE VIEW: Interactive In-Place Timeline Cards ── */}
                    <div className="hwe-mobile-accordion">
                    {experiences.map((exp, i) => {
                        const isOpen = openAccordionId === exp.id;
                        return (
                            <div
                                key={exp.id}
                                className={`hwe-acc-item${isOpen ? ' hwe-acc-item--open' : ''}`}
                                style={{ '--dot': exp.dotColor }}
                            >
                                <div
                                    className="hwe-acc-header"
                                    onClick={() => toggleAccordion(exp.id)}
                                >
                                    <div className="hwe-acc-indicator">
                                        <span
                                            className="hwe-acc-dot"
                                            style={{ background: exp.dotColor }}
                                        />
                                        {i < experiences.length - 1 && (
                                            <span className="hwe-acc-line" />
                                        )}
                                    </div>

                                    <div className="hwe-acc-title-wrap">
                                        <div className="hwe-acc-top-row">
                                            <h3 className="hwe-acc-role">{exp.role}</h3>
                                            <span className="hwe-acc-period">{exp.period}</span>
                                        </div>
                                        <div className="hwe-acc-meta">
                                            <span className="hwe-acc-company">{exp.company}</span>
                                            {exp.tag && (
                                                <span className="hwe-acc-current-badge">{exp.tag}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="hwe-acc-toggle-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                                        </svg>
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="hwe-acc-body">
                                        <div className="hwe-projects-list">
                                            {exp.projects.map((proj, pIdx) => (
                                                <div key={pIdx} className="hwe-project-block">
                                                    <div className="hwe-project-header">
                                                        <h4 className="hwe-project-title">
                                                            {proj.title}
                                                        </h4>
                                                        {proj.link && (
                                                            <a
                                                                href={proj.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="hwe-project-link"
                                                            >
                                                                [{proj.linkText || 'Live Website'}] ↗
                                                            </a>
                                                        )}
                                                    </div>
                                                    <ul className="hwe-project-bullets">
                                                        {proj.points.map((pt, ptIdx) => (
                                                            <li key={ptIdx}>{pt}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="hwe-acc-footer">
                                            <span className="hwe-acc-location">📍 {exp.location}</span>
                                            <span className="hwe-acc-status" style={{ color: exp.dotColor }}>
                                                {exp.tag ? 'Active position' : 'Completed tenure'}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWorkExperience;
