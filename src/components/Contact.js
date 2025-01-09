import React from "react";
import Layout from "./layout";

const ContactPage = ({ title, description }) => {
	return (
		<Layout>
			<h1>{title}</h1>
			<div>{description}</div>
		</Layout>
	);
};

export default ContactPage;
