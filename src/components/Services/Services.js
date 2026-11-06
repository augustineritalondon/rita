import React from 'react';
import './Services.css';
import GoTo from '../Utils/GoTo';
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';
import SkillsStacks from './SkillsStacks';

import webDevIcon from '../../assets/images/laptop.png';
import mobileDevIcon from '../../assets/images/mobile.png';
import brandIcon from '../../assets/images/ui-ux.png';

const servicesList = [
    {
        id: 1,
        title: 'Website Development',
        projects: '10 Projects',
        iconImg: webDevIcon,
        animDelay: '0s'
    },
    {
        id: 2,
        title: 'Mobile App Development',
        projects: '3 Projects',
        iconImg: mobileDevIcon,
        animDelay: '0.6s'
    },
    {
        id: 3,
        title: 'UI/UX & Brand Identity',
        projects: '15 Projects',
        iconImg: brandIcon,
        animDelay: '1.2s'
    }
];

const Services = ({ showGoTo = true, showStacks = true }) => {
    return (
        <>
            {showGoTo && <GoTo />}
            <section className="services-section" id="services">
                <div className="services-container">
                    {/* LEFT COLUMN: Stacked Service Cards */}
                    <div className="services-cards-col">
                        {servicesList.map((service, index) => (
                            <Fade key={service.id} bottom duration={900} delay={index * 150} triggerOnce>
                                <div className="service-card">
                                    <div className="service-card-icon-wrapper">
                                        <img
                                            src={service.iconImg}
                                            alt={service.title}
                                            className="service-live-icon"
                                            style={{ animationDelay: service.animDelay }}
                                        />
                                    </div>
                                    <div className="service-card-text">
                                        <h3 className="service-card-title">{service.title}</h3>
                                        <p className="service-card-projects">{service.projects}</p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: What do I help? text & stats */}
                    <div className="services-info-col">
                        <Fade bottom duration={1000} delay={100} triggerOnce>
                            <h2 className="services-heading">What do I do?</h2>
                        </Fade>

                        <Fade bottom duration={1000} delay={250} triggerOnce>
                            <p className="services-desc">
                                I help businesses identify challenges, develop effective solutions, and bring ideas to life through thoughtful design and digital product development. 
                            </p>
                            <p className="services-desc">
                                My goal is to create meaningful digital experiences that solve problems, improve processes, and support business growth.
                            </p>
                        </Fade>

                        <Fade bottom duration={1000} delay={400} triggerOnce>
                            <div className="services-stats-row">
                                <div className="services-stat-item">
                                    <div className="services-stat-number">
                                        <CountUp end={25} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        <span>+</span>
                                    </div>
                                    <p className="services-stat-label">Project Completed</p>
                                </div>

                                <div className="services-stat-item">
                                    <div className="services-stat-number">
                                        <CountUp end={15} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        <span>+</span>
                                    </div>
                                    <p className="services-stat-label">Happy Clients</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>

            {/* Interactive Tech Stacks & Skillset Section (shown on /services page) */}
            {showStacks && <SkillsStacks />}
        </>
    );
};

export default Services;
