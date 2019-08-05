import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Certificados = () => {
    const { ES6, JS, firebase } = useStaticQuery(graphql`
        query {
            ES6: file( relativePath: { eq: "5a1863b446721c3f51ddd031.pdf" }) {
                publicURL
            }
            JS: file( relativePath: { eq: "77218-1078e80a-8a12-4249-8e4f-8a88d666cdb8.pdf" }) {
                publicURL
            }
            firebase: file( relativePath: { eq: "77274-95324f1b-7241-4683-95cf-38ad924f25a3.pdf" }) {
                publicURL
            }
        }
    `)

    return (
        <React.Fragment>
            <h2>Certificados</h2>
                <ul>
                    <li>
                        <a href="https://es6.io/">ES6 for Everyone - Master Package</a> - <a href={ES6.publicURL} download >[descargar certificado]</a>
                    </li>
                    <li>
                        <a href="https://ed.team/cursos/js-paradigmas">JavaScript Avanzado - Paradigmas de programación</a> - <a href={JS.publicURL} download >[descargar certificado]</a>
                    </li>
                    <li>
                        <a href="https://ed.team/cursos/firebase">Firebase</a> - <a href={firebase.publicURL} download >[descargar certificado]</a>
                    </li>
                </ul>
        </React.Fragment>
    )
}

export default Certificados;