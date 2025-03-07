/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: `Hanna Leinonen`,
        siteUrl: `https://www.yourdomain.tld`,
        description:`Hannas portfolio website. Junior frontend developer.`
    },
    plugins: [
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID
            }
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-postcss'
    ]
}
