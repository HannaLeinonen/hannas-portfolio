import React from 'react'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'
/* import { GatsbyImage, getImage } from 'gatsby-plugin-image' */


const AboutPage = ({ title }) => {
    /* const gatsbyImage = getImage(image) */
    const data = useStaticQuery(graphql`
        query {
            allContentfulResumeContent {
                nodes {
                    skills
                }
            }
        }
    `)

    const items = data.allContentfulResumeContent.nodes

    return (
        <Layout>
            <h1>{title}</h1>
            <div className='resumePicture'>
            {/* <GatsbyImage
                image={gatsbyImage}
                alt="Hur löser vi detta?"
            ></GatsbyImage> */}
            </div>

            <div>
                {items.map((item, index) => (
                    <section key={index}>
                        {item.skills && item.skills.length > 0 && (
                            <div>
                                <h3>Skills</h3>
                                <ul>
                                    {item.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                ))}
            </div>
        </Layout>
    )
}

export default AboutPage
