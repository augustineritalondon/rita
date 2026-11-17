import React, { useState, useRef } from 'react'
import './ProjectsPortfolio.css'
import { Fade } from 'react-awesome-reveal'

// ─── Project Images ────────────────────────────────────────────────────────────
import img100pay    from '../../assets/images/100pay.png'
import imgTemplate  from '../../assets/images/lifeskills.png'
import lifeskills1  from '../../assets/images/lifeskills1.png'
import lifeskills2  from '../../assets/images/lifeskills2.png'
import lifeskills3  from '../../assets/images/lifeskills3.png'
import imgEverest   from '../../assets/images/everest.png'
import imgEverest1   from '../../assets/images/everest1.png'
import imgEverest2   from '../../assets/images/everest2.png'
import imgShop100   from '../../assets/images/shop100template.png'
import imgShop1001   from '../../assets/images/ecommerce1.png'
import imgShop1002  from '../../assets/images/ecomerce2.png'
import imgEgis      from '../../assets/images/Screenshot (163).png'
import imgAkawo     from '../../assets/images/akawo.png'
import maMeds    from '../../assets/images/maMeds.png'
import maMeds1    from '../../assets/images/maMeds1.png'
import maMeds2    from '../../assets/images/maMeds2.png'
import maMeds3    from '../../assets/images/maMeds3.png'
import imgDimkpa    from '../../assets/images/dimkpamotors.png'
import imgHarvoxx   from '../../assets/images/harvoxxschool.png'
import imgMileone   from '../../assets/images/mileone.png'
import crs from '../../assets/images/crs.png'
import crs1 from '../../assets/images/crs1.png'
import crs2 from '../../assets/images/crs2.png'
import crs3 from '../../assets/images/crs3.png'
import imgA4dabul1   from '../../assets/images/a4dabul1.png'
import imgA4dabul2   from '../../assets/images/a4dabul2.png'
import imgA4dabul3   from '../../assets/images/a4dabul3.png'
import imgA4dabul4   from '../../assets/images/a4dabul5.png'
import HydroTech   from '../../assets/images/hydroTech.png'
import HydroTech1   from '../../assets/images/hydroTech1.png'
import HydroTech2   from '../../assets/images/hydroTech2.png'
import HydroTech3   from '../../assets/images/hydroTech3.png'
import DarTech   from '../../assets/images/darTech1.png'
import DarTech1   from '../../assets/images/darTech2.png'
import DarTech2   from '../../assets/images/darTech3.png'

// ─── Project Data ──────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        id: 2, index: '01',
        title: 'LifeSkills Connect LMS',
        category: 'Fullstack', year: '2025',
        shortDesc: 'Web-based Learning Management System for educational content.',
        fullDesc: 'Full-stack Learning Management System built with Next.js, TypeScript, ExpressJS, MySQL, and Zustand. Engineered role-based course gating (free vs. paid tiers), interactive timed quizzes, real-time student progress tracking, and automated certificate generation upon assessment completion.',
        image: lifeskills2, // Student Progress Dashboard as main cover
        images: [lifeskills2, lifeskills1, lifeskills3, imgTemplate],
        captions: ['Student Progress Dashboard', 'LMS Course Catalog & Hub', 'Curriculum Management View', 'Platform Portal & Login View'],
        tech: ['Next.js', 'TypeScript', 'ExpressJS', 'MySQL', 'Zustand'],
        liveLink: 'https://lifeskills-connect.accordiaharmony.org/',
        github: 'https://github.com/augustineritalondon',
        featured: true,
    },
    {
        id: 1, index: '02',
        title: '100Pay Merchant Dashboard',
        category: 'Web Development', year: '2024',
        shortDesc: 'Fintech and crypto-fiat payment processing platform with real-time settlement.',
        fullDesc: 'Production merchant dashboard for a crypto-fiat exchange platform. Engineered real-time wallet balances, conversion workflows (crypto-to-crypto & crypto-to-fiat) via Coinbase APIs, GraphQL real-time transaction queries, local bank payout mechanisms, and individual/business KYC onboarding verification pipelines.',
        image: img100pay,
        images: [img100pay],
        captions: ['Payment Dashboard Overview', 'Analytics & Settlement Reports', 'Transaction & Card Verification Flow'],
        tech: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'Zustand', 'Formik', 'Coinbase API'],
        liveLink: 'https://dashboard.100pay.co/login',
        github: 'https://github.com/augustineritalondon',
        featured: true,
    },
    {
        id: 7, index: '03',
        title: 'maMeds',
        category: 'UI/UX Design', year: '2023',
        shortDesc: 'A digital healthcare UI/UX solution designed to improve medication adherence.',
        fullDesc: 'Designed a digital health ecosystem focused on helping chronic patients in Greece manage their medications more effectively. The project features an accessible mobile application for patients and caregivers, alongside a comprehensive web dashboard for pharmacists. The design prioritizes usability, accessibility, and simplified medication scheduling to improve healthcare coordination and support better medication management.',
        image: maMeds,
        images: [maMeds1, maMeds2, maMeds3],
        captions: ['Digital Health Patient Dashboard', 'Medication Schedule & Adherence Tracking', 'Caregiver & Pharmacist Coordination View'],
        tech: ['Figma', 'UI/UX Design', 'HealthTech', 'Design Systems'],
        liveLink: 'https://www.figma.com/design/ajkDHUR76PQP6cGOKjOX31/maMeds?t=KqECr9z7GLbIMSeu-0',
        featured: false,
    },
    {
        id: 6, index: '04',
        title: 'Ecommerce Dashboard',
        category: 'Web Development', year: '2024',
        shortDesc: 'Production-ready e-commerce analytics, orders, and inventory dashboard.',
        fullDesc: 'A production ready e-commerce dashboard template featuring sales analytics, order management, inventory tracking, customer insights, and a fully customisable component library.',
        image: imgShop100,
        images: [imgShop1001, imgShop1002],
        captions: ['Main Analytics & Revenue Metrics', 'Inventory & SKU Management', 'Customer Orders & Fulfilment'],
        tech: ['Next.js', 'Redux', 'Dashboard UI'],
        liveLink: 'https://feat-auth--shp100-v2.netlify.app/',
        github: 'https://github.com/augustineritalondon',
        featured: false,
    },
    {
        id: 3, index: '05',
        title: 'Everest Mobility',
        category: 'Web Development', year: '2024',
        shortDesc: 'Informative website for a transportation mobile app.',
        fullDesc: 'Everest Mobility is a Nigerian mobility and logistics platform that makes everyday transportation and deliveries easier and more convenient. It provides on-demand ride-hailing, package delivery, shared trips, and in-app wallet services, connecting passengers, drivers, couriers, and businesses through one seamless digital platform.',
        image: imgEverest,
        images: [imgEverest1, imgEverest2],
        captions: ['Landing Page Hero & Booking Preview', 'Fleet Options & Ride Tracking', 'User Account Setup'],
        tech: ['React', 'CSS Animations'],
        liveLink: 'https://www.everestmobility.co/',
        featured: false,
    },
    {
        id: 4, index: '06',
        title: 'Egis Industrial',
        category: 'Web Development', year: '2024',
        shortDesc: 'E-commerce website for industrial machinery.',
        fullDesc: 'A full-featured e-commerce platform for Egis, an industrial machinery supplier. Includes a product catalog with filtering, detailed product pages, quote request system, and an admin dashboard for inventory management.',
        image: imgEgis,
        images: [imgEgis, imgShop100, imgTemplate],
        captions: ['Catalog & Filter Systems', 'Machinery Specification Sheet', 'Quote Request Submission Flow'],
        tech: ['React', 'E-commerce', 'REST API'],
        liveLink: 'https://egis-frontend-techfaithful.vercel.app/',
        featured: false,
    },
    {
        id: 5, index: '07',
        title: 'Akawo.me',
        category: 'Web Development', year: '2023',
        shortDesc: 'Information website for a digital savings app.',
        fullDesc: 'Marketing and information website for Akawo, a digitalized group savings platform. Features an engaging hero section, app feature highlights, testimonials, and clear call-to-action sections driving app downloads.',
        image: imgAkawo,
        images: [imgAkawo],
        captions: ['Platform Homepage & Value Proposition', 'Savings Circles & Group Pool Explainer', 'Security & KYC Verification'],
        tech: ['React', 'Responsive Design'],
        liveLink: 'https://akawo.me/',
        featured: false,
    },
    {
        id: 9, index: '08',
        title: 'Harvoxx School',
        category: 'Web Development', year: '2023',
        shortDesc: 'Registration website for professional training programmes.',
        fullDesc: 'A registration and information platform for Harvoxx School, offering professional tech training programmes. Features course listings, cohort registration, payment integration, and a student progress dashboard.',
        image: imgHarvoxx,
        images: [imgHarvoxx, imgTemplate, imgAkawo],
        captions: ['Bootcamp Schedule & Programs', 'Enrollment Flow & Tuition Calculator', 'Student Portal & Learning Hub'],
        tech: ['React', 'Node.js', 'Education'],
        liveLink: 'https://school.hthub.com.ng',
        featured: false,
    },
    {
        id: 10, index: '09',
        title: "City Rebels - Free Daily Sports Analysis",
        category: 'Freelance', year: '2024',
        shortDesc: 'Sports analytics platform providing data-driven football predictions.',
        fullDesc: "CRSPredictions is a sports analytics platform designed to help football enthusiasts make more informed predictions through data-driven insights, statistical analysis, and match forecasts. It provides match previews, performance breakdowns, and trend analysis, helping fans understand the game beyond guesswork and engage with sports through logic and informed decision-making.",
        image: crs,
        images: [crs1, crs2, crs3],
        captions: ['Sports Match Analytics Dashboard', 'Daily Prediction Engine & Form Trends', 'Mobile Responsive Fixtures View'],
        tech: ['Next.js', 'React', 'Sports Analytics', 'CSS3'],
        liveLink: 'https://crspredictions.com/',
        featured: false,
    },
    {
        id: 8, index: '10',
        title: 'Dimkpa Motors',
        category: 'UI/UX Design', year: '2025',
        shortDesc: 'Website design for an automobile organisation.',
        fullDesc: 'A complete website design for Dimkpa Motors, an automotive dealership. Includes vehicle showcase gallery, search & filter components, booking flow, service center information, and a contact system.',
        image: imgDimkpa,
        images: [imgDimkpa, imgEverest, imgMileone],
        captions: ['Automotive Showroom & Filters', 'Vehicle Spec Sheet & Inspection Details', 'Test Drive Booking UI'],
        tech: ['Figma', 'UI Design', 'Automotive'],
        liveLink: 'https://www.figma.com/file/YDDFpEmHNmD5JDeuJqOeXl/Dimkpa-Motors',
        featured: false,
    },
    {
        id: 15, index: '11',
        title: 'HydroTech',
        category: 'UI/UX Design', year: '2025',
        shortDesc: 'A professional digital experience designed to showcase HydroTech Surveys marine technology.',
        fullDesc: 'Designed a corporate digital experience for HydroTech Survey, a marine technology company specializing in hydrographic, geophysical, and geotechnical solutions. The design focuses on presenting the companys technical expertise, showcasing its services, and establishing a professional digital presence that builds credibility and communicates its capabilities to potential clients.',
        image: HydroTech,
        images: [HydroTech1, HydroTech2, HydroTech3],
        captions: ['Marine Survey Service Catalog', 'Technical Equipment & Capability Specs', 'Corporate Contact & Inquiries UI'],
        tech: ['Figma', 'UI Design', 'Maritime Tech'],
        liveLink: 'https://www.figma.com/design/3czEq7owyAcw006CXfDIdz/HydroTech?node-id=23-112&t=N5595gaQo48ng6iV-1',
        featured: false,
    },
    {
        id: 16, index: '12',
        title: 'DarlTech',
        category: 'UI/UX Design', year: '2025',
        shortDesc: 'A digital learning platform designed to showcase DarlTech Academys tech education programs',
        fullDesc: 'Designed a digital experience for DarlTech Academy, a technology education platform focused on equipping students with practical tech skills through hands-on training, mentorship, and real-world projects. The design emphasizes clear navigation, accessible information, and an engaging interface that communicates the academys offerings and encourages prospective students to explore learning opportunities.',
        image: DarTech,
        images: [DarTech1, DarTech2],
        captions: ['Tech Curriculum & Course Explorer', 'Student Mentorship & Cohort Details', 'Admissions Application Flow'],
        tech: ['Figma', 'UI Design', 'EdTech'],
        liveLink: 'https://www.figma.com/design/WIupW1At4VZiS1P6MXSIOR/DarlTech?node-id=1-2&t=N5595gaQo48ng6iV-1',
        featured: false,
    },
    {
        id: 13, index: '13',
        title: 'A4dabul Beauty Spa',
        category: 'UI/UX Design', year: '2023',
        shortDesc: 'A beauty and events brand offering professional skincare.',
        fullDesc: 'Designed a digital experience for A4Dabul, a beauty and events brand offering skincare, hairdressing, beauty treatments, and event services. The design focuses on creating an elegant and intuitive interface that showcases the brands services, communicates its identity, and makes it easy for potential clients to explore offerings and connect with the business.',
        image: imgA4dabul1,
        images: [imgA4dabul2, imgA4dabul3, imgA4dabul4],
        captions: ['Spa Service Catalog & Treatments', 'Online Appointment Booking Interface', 'Client Testimonials & Gallery'],
        tech: ['Figma', 'UI/UX Design', 'Wellness'],
        liveLink: 'https://www.figma.com/file/nHEtKwvI3uHjU6i7rdjCe5/Affordable?node-id=306%3A142',
        featured: false,
    },
]

const CATEGORIES = ['All', 'Web Development', 'Fullstack', 'UI/UX Design', 'Freelance', 'Personal Projects']

// ─── Component ─────────────────────────────────────────────────────────────────
const ProjectsPortfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const [selectedProject, setSelectedProject] = useState(null)
    const [panelVisible, setPanelVisible] = useState(false)
    const [activeLightbox, setActiveLightbox] = useState(null) // { type: 'image' | 'video', src: string, title?: string }
    const sectionRef = useRef(null)
    const panelScrollRef = useRef(null)

    const filtered = activeCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory)

    const isOpen = !!selectedProject

    const handleCardClick = (project) => {
        // Clicking the already-selected card closes the panel
        if (selectedProject?.id === project.id) {
            closePanel()
            return
        }
        // Swap selected without full re-mount
        setPanelVisible(false)
        setTimeout(() => {
            setSelectedProject(project)
            requestAnimationFrame(() => {
                setPanelVisible(true)
                if (panelScrollRef.current) {
                    panelScrollRef.current.scrollTop = 0
                }
            })
        }, selectedProject ? 160 : 0)

        // Smooth scroll to top of projects section so the view doesn't stay stranded down
        if (sectionRef.current) {
            const yOffset = -80 // account for fixed navbar height
            const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    const closePanel = () => {
        setPanelVisible(false)
        setTimeout(() => setSelectedProject(null), 350)
    }

    return (
        <section className='pp-section' id="projects" ref={sectionRef}>
            <div className='pp-container'>

                {/* ── Header ── */}
                <Fade bottom duration={800} triggerOnce>
                    <div className='pp-header'>
                        <div className='pp-header-left'>
                            <p className='pp-eyebrow'>Selected Work</p>
                            <h2 className='pp-title'>My Latest Projects</h2>
                        </div>
                        <div className='pp-filter-chips'>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    className={`pp-chip${activeCategory === cat ? ' pp-chip--active' : ''}`}
                                    onClick={() => { setActiveCategory(cat); closePanel() }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </Fade>

                {/* ── Main layout ── */}
                <div className={`pp-layout${isOpen ? ' pp-layout--split' : ''}`}>

                    {/* ═══════════════════════════════
                        LEFT: Grid (default) OR List (when panel open)
                        ═══════════════════════════════ */}
                    <div className={`pp-left${isOpen ? ' pp-left--list' : ''}`}>

                        {/* ── GRID MODE (panel closed) ── */}
                        {!isOpen && (
                            <div className='pp-grid'>
                                {filtered.map((project, i) => (
                                    <Fade key={project.id} bottom duration={650} delay={(i % 3) * 100} triggerOnce>
                                        <div
                                            id={project.id === 2 ? 'project-lifeskills' : undefined}
                                            className={`pp-card${project.featured ? ' pp-card--featured' : ''}`}
                                            onClick={() => handleCardClick(project)}
                                        >
                                            <div className='pp-card-img'>
                                                <img src={project.image} alt={project.title} />
                                                <div className='pp-card-overlay' />
                                            </div>
                                            <span className='pp-card-index'>[{project.index}]</span>
                                            <div className='pp-card-info'>
                                                <div className='pp-card-meta'>
                                                    <span className='pp-card-cat'>{project.category}</span>
                                                    <span className='pp-card-year'>{project.year}</span>
                                                </div>
                                                <h3 className='pp-card-title'>{project.title}</h3>
                                            </div>
                                            <div className='pp-card-hover-cta'>View Project →</div>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        )}

                        {/* ── LIST MODE (panel open) ── */}
                        {isOpen && (
                            <div className='pp-list'>
                                {filtered.map((project) => (
                                    <div
                                        key={project.id}
                                        className={`pp-list-item${selectedProject?.id === project.id ? ' pp-list-item--active' : ''}`}
                                        onClick={() => handleCardClick(project)}
                                    >
                                        <div className='pp-list-thumb'>
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <div className='pp-list-info'>
                                            <div className='pp-list-meta'>
                                                <span className='pp-list-cat'>{project.category}</span>
                                                <span className='pp-list-year'>{project.year}</span>
                                            </div>
                                            <h3 className='pp-list-title'>{project.title}</h3>
                                            <p className='pp-list-desc'>{project.shortDesc}</p>
                                        </div>
                                        <div className='pp-list-arrow'>
                                            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                                <polyline points='9 18 15 12 9 6'/>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* ═══════════════════════════════
                        RIGHT: Detail Panel
                        ═══════════════════════════════ */}
                    {selectedProject && (
                        <div className={`pp-panel${panelVisible ? ' pp-panel--visible' : ''}`}>
                            {/* Close / Back button */}
                            <div className='pp-panel-topbar'>
                                <button className='pp-panel-back-btn' onClick={closePanel}>
                                    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                                        <line x1='19' y1='12' x2='5' y2='12'></line>
                                        <polyline points='12 19 5 12 12 5'></polyline>
                                    </svg>
                                    <span>Back to all projects</span>
                                </button>
                                <button className='pp-panel-close' onClick={closePanel} aria-label='Close panel'>
                                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round'>
                                        <line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/>
                                    </svg>
                                </button>
                            </div>

                            <div className='pp-panel-scroll' ref={panelScrollRef}>
                                {/* Cover */}
                                <div className='pp-panel-cover'>
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                    <div className='pp-panel-cover-gradient' />
                                    <span className='pp-panel-cover-index'>[{selectedProject.index}]</span>
                                </div>

                                <div className='pp-panel-body'>
                                    {/* Meta & Live Site / GitHub Top Buttons */}
                                    <div className='pp-panel-header-row'>
                                        <div className='pp-panel-meta'>
                                            <span className='pp-panel-cat'>{selectedProject.category}</span>
                                            <span className='pp-panel-year'>{selectedProject.year}</span>
                                        </div>

                                        <div className='pp-panel-cta-group'>
                                            {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                                                <a
                                                    href={selectedProject.liveLink}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='pp-panel-cta pp-panel-cta--top'
                                                >
                                                    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                                                        <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'/>
                                                        <polyline points='15 3 21 3 21 9'/><line x1='10' y1='14' x2='21' y2='3'/>
                                                    </svg>
                                                    View Live Site ↗
                                                </a>
                                            )}

                                            {selectedProject.github && (
                                                <a
                                                    href={selectedProject.github}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    className='pp-panel-cta pp-panel-cta--github'
                                                >
                                                    <svg width='15' height='15' viewBox='0 0 24 24' fill='currentColor'>
                                                        <path fillRule='evenodd' clipRule='evenodd' d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'/>
                                                    </svg>
                                                    View GitHub ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className='pp-panel-title'>{selectedProject.title}</h2>

                                    {/* Description */}
                                    <p className='pp-panel-desc'>{selectedProject.fullDesc}</p>

                                    {/* Tech */}
                                    <p className='pp-panel-tech-label'>Built with</p>
                                    <div className='pp-panel-tech'>
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className='pp-tech-tag'>{t}</span>
                                        ))}
                                    </div>

                                    {/* Video Demo Section — only shows if project has a video */}
                                    {selectedProject.video && (
                                        <div className='pp-panel-section'>
                                            <p className='pp-panel-tech-label'>Project Demo & Walkthrough</p>
                                            <div className='pp-panel-video-wrap'>
                                                <video
                                                    className='pp-panel-video'
                                                    src={selectedProject.video}
                                                    controls
                                                    controlsList='nodownload'
                                                    poster={selectedProject.image}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Screenshots Gallery (Multiple images with click-to-open lightbox) */}
                                    <div className='pp-panel-section'>
                                        <p className='pp-panel-tech-label'>Screenshots & Interface Details (Click to view full screen)</p>
                                        <div className='pp-panel-gallery-grid'>
                                            {(selectedProject.images || [selectedProject.image]).map((img, i) => (
                                                <div
                                                    key={i}
                                                    className='pp-gallery-card'
                                                    onClick={() => setActiveLightbox({
                                                        type: 'image',
                                                        src: img,
                                                        title: selectedProject.captions?.[i] || `${selectedProject.title} — Screen ${i + 1}`
                                                    })}
                                                >
                                                    <div className='pp-gallery-card-img'>
                                                        <img src={img} alt={`${selectedProject.title} screen ${i + 1}`} />
                                                        <div className='pp-gallery-zoom-badge'>
                                                            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round'>
                                                                <circle cx='11' cy='11' r='8'></circle>
                                                                <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                                                                <line x1='11' y1='8' x2='11' y2='14'></line>
                                                                <line x1='8' y1='11' x2='14' y2='11'></line>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span className='pp-img-caption'>
                                                        {selectedProject.captions?.[i] || `Interface View ${i + 1}`}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════
                FULL SCREEN LIGHTBOX MODAL (Image & Video)
                ═══════════════════════════════════════════════════════ */}
            {activeLightbox && (
                <div className='pp-lightbox-overlay' onClick={() => setActiveLightbox(null)}>
                    <div className='pp-lightbox-modal' onClick={(e) => e.stopPropagation()}>
                        <button
                            className='pp-lightbox-close'
                            onClick={() => setActiveLightbox(null)}
                            aria-label='Close Fullscreen'
                        >
                            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round'>
                                <line x1='18' y1='6' x2='6' y2='18'></line>
                                <line x1='6' y1='6' x2='18' y2='18'></line>
                            </svg>
                        </button>

                        {activeLightbox.type === 'image' && (
                            <div className='pp-lightbox-content'>
                                <img src={activeLightbox.src} alt={activeLightbox.title || 'Project Screenshot'} />
                                {activeLightbox.title && (
                                    <div className='pp-lightbox-caption'>{activeLightbox.title}</div>
                                )}
                            </div>
                        )}

                        {activeLightbox.type === 'video' && (
                            <div className='pp-lightbox-video-content'>
                                <div className='pp-lightbox-dummy-player'>
                                    <div className='pp-video-play-btn pp-video-play-btn--large'>
                                        <svg width='36' height='36' viewBox='0 0 24 24' fill='currentColor'>
                                            <polygon points='5 3 19 12 5 21 5 3'></polygon>
                                        </svg>
                                    </div>
                                    <h3 className='pp-lightbox-video-title'>{activeLightbox.title}</h3>
                                    <p className='pp-lightbox-video-sub'>Interactive walkthrough playback • 1080p</p>
                                    <div className='pp-dummy-video-controls'>
                                        <span className='pp-dummy-play-icon'>▶</span>
                                        <div className='pp-dummy-scrubber'>
                                            <div className='pp-dummy-progress'></div>
                                        </div>
                                        <span className='pp-dummy-time'>00:15 / 02:45</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default ProjectsPortfolio
