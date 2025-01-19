import React from 'react'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    aboutMeContainer,
    resumePicture,
    myImage,
    aboutMeContent,
    resumeContent,
    competenceLists,
    educationContainer,
    experienceContainer,
    contentContainer,
    courses
} from '../styles/about-me.module.css'
import { divider } from '../styles/portfolio.module.css'
import Seo from './seo'
const AboutPage = ({ title, description, content }) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulResumeContent {
                nodes {
                    skills
                    language
                }
            }
        }
    `)

    const items = data.allContentfulResumeContent.nodes

    return (
        <Layout>
            <Seo title={title}></Seo>
            <div className={aboutMeContainer}>
                <h1>{title}</h1>
                <section className={aboutMeContent}>
                    <article>
                        <p>{description}</p>
                        <p>{content.content}</p>
                    </article>
                    <div className={resumePicture}>
                        <StaticImage
                            src="../images/Image.jpg"
                            alt="Description of the image"
                            placeholder="blurred"
                            layout="constrained"
                            quality={90}
                            width={300}
                            className={myImage}
                        />
                    </div>
                </section>
                <h2>Resume</h2>
                <div className={divider}></div>
                <div >
                    {items.map((item, index) => (
                        <section key={index} className={resumeContent}>
                            {item.skills &&
                                item.skills.length &&
                                item.language &&
                                item.language.length > 0 && (
                                    <aside className={competenceLists}>
                                        <h3>Skills</h3>
                                        <ul>
                                            {item.skills.map(
                                                (skill, skillIndex) => (
                                                    <li key={skillIndex}>
                                                        {skill}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <h3>Languages</h3>
                                        <ul>
                                            {item.language.map(
                                                (lang, langIndex) => (
                                                    <li key={langIndex}>
                                                        {lang}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </aside>
                                )}

                            <article className={educationContainer}>
                                <h3>Education</h3>
                                <div className={divider}></div>
                                <div className={contentContainer}>
                                    <h4>Frontend Developer (Ongoing)</h4>
                                    <p>
                                        IT-Högskolan Stockholm | August 2023 -
                                        June 2025
                                    </p>
                                    <dl className={courses}>
                                        <dt>Completed courses: </dt>
                                        <dd>- HTML & CSS</dd>
                                        <dd>- Native Javascript</dd>
                                        <dd>- UX/UI-Design</dd>
                                        <dd>- Javascript with frameworks</dd>
                                        <dd>- Agile Development</dd>
                                        <dd>- Fullstack development</dd>
                                        <dd>
                                           - Communication, group dynamics and project management
                                        </dd>
                                    </dl>
                                    <dl className={courses}>
                                        <dt>Ongoing courses:</dt>
                                        <dd>- CMS</dd>
                                    </dl>
                                    <dl className={courses}>
                                        <dt>Internships:</dt>
                                        <dd>- Internship at Gro Play AB as QA and assistant level designer</dd>
                                    </dl>
                                </div>
                                <div className={contentContainer}>
                                    <h4>Service education with specialization</h4>
                                    <p>
                                    Eductus | January 2015 - April 2015
                                    </p>
                                    <dl>
                                        <dt>
                                        Basic training in service and hospitality with specialization in retail and trade.
                                        </dt>
                                        <dd>
                                        - Internship 4 weeks at Ica Kvantum Ekängen.
                                        </dd>
                                    </dl>
                                </div>
                                <div className={contentContainer}>
                                    <h4>Industritekniska Programmet</h4>
                                    <p>
                                    Rinmangymnasiet | 2011 - 2014
                                    </p>
                                    <dl>
                                        <dt>
                                        Specialization in welding, industrial technology program.
                                        </dt>
                                        <dd>
                                        - Internship at Volvo CE/TC and Alfa Laval.
                                        </dd>
                                    </dl>
                                </div>
                            </article>

                            <article className={experienceContainer}>
                                <h3>Experience</h3>
                                <div className={divider}></div>
                                <div className={contentContainer}>
                                    <h4>Retail store employee</h4>
                                    <p>
                                        Ica Kvantum Ekängen | May 2015- May 2021
                                    </p>
                                    <ul>
                                        <li>
                                            Worked in the cash register and
                                            self-scanning, also helped in other
                                            departments in the store with
                                            picking goods, fronting and doing
                                            inventory in the store
                                        </li>
                                        <li>
                                            Summer job May-July 2015 before
                                            employment November 2015
                                        </li>
                                    </ul>
                                </div>
                                <div className={contentContainer}>
                                    <h4>Administrative assistant</h4>
                                    <p>
                                        Folk Universitetet | March 2020- October
                                        2020
                                    </p>
                                    <ul>
                                        <li>
                                            Worked with data collection; created
                                            job listings and statistical
                                            documents
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage
