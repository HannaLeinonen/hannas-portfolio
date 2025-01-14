import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutPage from "../components/AboutMe";
import ContactPage from "../components/Contact";


const Page = ({ data }) => {
    const { slug, title, description } = data.contentfulPage;

	switch (slug) {
		case "about-me":
			return <AboutPage title={title} description={description}></AboutPage>;
		case "contact":
			return (
				<ContactPage title={title} description={description}></ContactPage>
			);

		default:
			return <Layout>EN DEFAULT PAGE LAYOUT</Layout>;
	}
}

export default Page;
export const query = graphql`
	query ($slug: String!) {
		contentfulPage(slug: { eq: $slug }) {
			title
			slug

		}
	}
`;
