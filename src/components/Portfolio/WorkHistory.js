import React from 'react'
import './WorkHistory.css'
import { Fade } from 'react-awesome-reveal'

const WorkHistory = () => {
    const workHistory = [
        // Published React Projects
        {
            id: 1,
            title: "100Pay Dashboard",
            description: "A comprehensive payment management platform with advanced analytics and reporting features.",
            status: "Published",
            link: "https://dashboard.100pay.co/login",
            date: "2024 - Present",
            technologies: ["React", "Node.js", "Zustand", "Formik", "Payment Integration"],
            category: "Web Development"
        },
        {
            id: 2,
            title: "LifeSkills Connect LMS",
            description: "Web-based Learning Management System for delivering and tracking educational content.",
            status: "Published",
            link: "https://lifeskills-connect.accordiaharmony.org/",
            date: "2025 - Present",
            technologies: ["Next.js", "TypeScript", "Node.js", "Zustand", "ExpressJS", "MySQL", "LMS", "Education"],
            category: "Fullstack Development / Mobile App"
        },
        {
            id: 3,
            title: "Everest Mobility Platform",
            description: "Informative website and mobile app integration for transportation services.",
            status: "Published",
            link: "https://www.everestmobility.co/",
            date: "2024",
            technologies: ["React"],
            category: "Web Development"
        },
        {
            id: 4,
            title: "Spotfundhub",
            description: "Crowdfunding platform connecting sports enthusiasts with investment opportunities in sports projects and athlete development",
            status: "Published",
            link: "https://sportfundhub.com/",
            date: "2025",
            technologies: ["Next.js", "Investment", "Zustand"],
            category: "Web Development"
        },
        {
            id: 5,
            title: "City Rebels",
            description: "Interactive sports prediction platform featuring live match scores, daily gaming challenges, and real-time analytics.",
            status: "Published",
            link: "https://crspredictions.com/",
            date: "2025",
            technologies: ["Next.js", "Zustand", "Predictions"],
            category: "Web Development"
        },
        {
            id: 6,
            title: "Ecommerce Dashboard Template",
            description: "A comprehensive dashboard template for e-commerce websites with analytics and management features.",
            status: "Published",
            link: "https://feat-auth--shp100-v2.netlify.app/",
            date: "2024",
            technologies: ["Next.js", "Redux", "Dashboard", "E-commerce"],
            category: "Web Development"
        },
        // {
        //     id: 7,
        //     title: "Personal Portfolio",
        //     description: "My personal portfolio website showcasing my work and skills.",
        //     status: "Published",
        //     link: "http://ritalondon.herokuapp.com/",
        //     date: "2022",
        //     technologies: ["React", "Portfolio"],
        //     category: "Web Development"
        // },

        // UI/UX Design Projects
        {
            id: 8,
            title: "Lucent Hub - Crypto Wallet",
            description: "Website design for an online crypto wallet with modern UI and seamless user experience.",
            status: "Published",
            link: "https://www.figma.com/file/IVEzcD1GjS4ai7yaw6Fgzt/lucenthub",
            date: "2023",
            technologies: ["Figma", "UI/UX", "Crypto"],
            category: "UI/UX Design"
        },
        {
            id: 9,
            title: "Dimkpa Motors",
            description: "Website design for an automobile organization with focus on user engagement.",
            status: "Published",
            link: "https://www.figma.com/file/YDDFpEmHNmD5JDeuJqOeXl/Dimkpa-Motors",
            date: "2025",
            technologies: ["Figma", "UI/UX", "Automotive"],
            category: "UI/UX Design"
        },
        {
            id: 10,
            title: "Portfolio Website Design",
            description: "Website design for my personal portfolio with modern aesthetics.",
            status: "Published",
            link: "https://www.figma.com/file/J2uW5YGZg4zbSV5Ex0mfbi/Ritas-Portfolio",
            date: "2022",
            technologies: ["Figma", "UI/UX", "Portfolio"],
            category: "UI/UX Design"
        },
        {
            id: 11,
            title: "A4dabul - Beauty Spa",
            description: "Website design for skin care and beauty spa with elegant and calming interface.",
            status: "Published",
            link: "https://www.figma.com/file/nHEtKwvI3uHjU6i7rdjCe5/Affordable?node-id=306%3A142",
            date: "2023",
            technologies: ["Figma", "UI/UX", "Beauty"],
            category: "UI/UX Design"
        },


        // In Progress / Unpublished Projects
        // {
        //     id: 15,
        //     title: "E-commerce Analytics Dashboard",
        //     description: "Building a comprehensive analytics dashboard for tracking e-commerce metrics and customer behavior.",
        //     status: "In Progress",
        //     date: "2024 - Present",
        //     technologies: ["React", "D3.js", "Analytics"],
        //     category: "Web Development"
        // },
        {
            id: 16,
            title: "Healthcare Management System",
            description: "Developing a patient management system with appointment scheduling and medical records.",
            status: "In Progress",
            date: "2025 - Present",
            technologies: ["React Native", "Healthcare", "Database"],
            category: "Web Development"
        },
    ]

    return (
        <section className='work-history'>
            <div className='r-container'>
                <div className='heading'>
                    <hr className='hr' />
                    <h5>Work Timeline</h5>
                    <h2>My Development Journey</h2>
                </div>

                <div className='timeline-container'>
                    {workHistory.map((work, index) => (
                        <Fade key={work.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 50}>
                            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className='timeline-content'>
                                    <div className='category-badge'>{work.category}</div>
                                    <div className='timeline-header'>
                                        <h3>{work.title}</h3>
                                        <span className={`status-badge ${work.status.toLowerCase().replace(' ', '-')}`}>
                                            {work.status}
                                        </span>
                                    </div>
                                    <p className='timeline-date'>{work.date}</p>
                                    <p className='timeline-description'>{work.description}</p>
                                    
                                    <div className='tech-tags'>
                                        {work.technologies.map((tech, idx) => (
                                            <span key={idx} className='tech-tag'>{tech}</span>
                                        ))}
                                    </div>

                                    {work.link && (
                                        <a href={work.link} target='_blank' rel='noopener noreferrer' className='view-project-btn'>
                                            View Project →
                                        </a>
                                    )}
                                </div>
                                <div className='timeline-dot'></div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkHistory
