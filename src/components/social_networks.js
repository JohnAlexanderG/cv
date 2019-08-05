import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

const SocialNetworks = () => {
    const { github, linkedin, behance, mail, whatsapp } = useStaticQuery(graphql`
        query {
            github: file( relativePath: { eq: "github-icon.svg" }) {
                publicURL
            }
            linkedin: file( relativePath: { eq: "linkedin.svg" }) {
                publicURL
            }
            behance: file( relativePath: { eq: "behance.svg" }) {
                publicURL
            }
            mail: file( relativePath: { eq: "mail.svg" }) {
                publicURL
            }
            whatsapp: file( relativePath: { eq: "whatsapp.svg" }) {
                publicURL
            }
        }
    `);

    return (
        <div className="social-networks">
            <ul className="social-networks__list">
                <li className="social-networks__item">
                    <a href="https://github.com/JohnAlexanderG" target="_blank" >
                        <img src={github.publicURL} alt="github.com/JohnAlexanderG" />
                    </a>
                </li>
                <li className="social-networks__item">
                    <a href="https://www.linkedin.com/in/jhonalexanderg" target="_blank" >
                        <img src={linkedin.publicURL} alt="linkedin.com/jhonalexanderg" />
                    </a>
                </li>
                <li className="social-networks__item">
                    <a href="https://www.behance.net/johnalexanderg" target="_blank" >
                        <img src={behance.publicURL} alt="behance.net/johnalexanderg" />
                    </a>
                </li>
                <li className="social-networks__item">
                    <a href="mailto: jhonalexanderg@outlook.com" >
                        <img src={mail.publicURL} alt="behance.net/johnalexanderg" />
                    </a>
                </li>
                <li className="social-networks__item">
                    <a href="https://wa.me/573142555359" target="_blank" >
                        <img src={whatsapp.publicURL} alt="linkedin.com/jhonalexanderg" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialNetworks;