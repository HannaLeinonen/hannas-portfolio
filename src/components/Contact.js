import React from 'react'
import Layout from './layout'
import { navigate } from 'gatsby'
import { form } from '../styles/form.module.css'
import {
    contactContainer,
    contactInfo
} from '../styles/contact.module.css'

const ContactPage = ({ title, description }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        // Send form data to Netlify
        const form = e.target

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { Accept: 'application/json' }
        })
            .then(() => {
                // Navigate to "thank you" page
                navigate('/thank-you')
            })
            .catch((error) => {
                console.error(
                    'Something went wrong when trying to send the form:',
                    error
                )
            })
    }
    return (
        <Layout>
            <div className={contactContainer}>
                <h1>{title}</h1>
                <h3>{description}</h3>

                <section className={contactInfo}>
                    <div>
                        <h4>Contact info:</h4>
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-envelope-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"

                                    />
                                </svg>

                                <a href="mailto:hanna.leinonen@iths.se">
                                    hanna.leinonen@iths.se
                                </a>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fillRule="currentColor"
                                    className="bi bi-telephone-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                                <span>076-877 34 90</span>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fillRule="currentColor"
                                    className="bi bi-linkedin"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                                <a href="https://www.linkedin.com/in/leinonen-hanna/">
                                    inkedin.com/in/leinonen-hanna
                                </a>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fillRule="currentColor"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                <span>Växjö, Sweden</span>
                            </li>
                        </ul>
                    </div>
                </section>

                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        action="/thank-you"
                        className={form}
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your e-mail"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write a message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit">Skicka</button>
                    </form>

            </div>
        </Layout>
    )
}

export default ContactPage
