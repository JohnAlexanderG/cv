import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const list = [ 'html', 'css', 'javascript', 'react', 'react router', 'redux', 'webpack', 'node.js', 'express', 'firebase', 'mongodb', 'graphql', 'gatsby', 'progresive web app', 'git', 'github' ];

const Icons = () => {
    const { allFile } = useStaticQuery(graphql`{
        allFile(filter: { extension: { eq: "svg" } }) {
            edges {
                node {
                    publicURL
                    name
                    id
                }
            }
        }
    }`)
    return (<React.Fragment>{ 
        list.map((item) => {
            return allFile.edges.map((image) => {
                if (image.node.name == item) {
                    console.log(image.node.name == item && image.node.name);
                    return (
                        <div key={image.node.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
                            <div style={{ display: 'flex', width: '40px', height: 'auto', alignItems: 'center', justifyContent: 'center' }} >
                                <img style={{ width: '100%', margin: '0' }} src={image.node.publicURL} alt={image.node.name} />
                            </div>
                            <span>{image.node.name}</span>
                        </div>
                    )
                }
            })
        })
    }
    </React.Fragment>)
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <header>
        <section className="developer">
            <div className="developer__photo" 
                style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '1.45rem'
                }}>
              <div style={{ maxWidth: `335px` }}>
                <Image />
              </div>
            </div>
            <h2 className="developer__position" style={{ textAlign: 'center' }} >Front-end Developer</h2>
            <h3 className="developer__name" style={{ textAlign: 'center' }} >Jhon Alexander Gil Beltrán</h3>
        </section>
        <section className="developer_contact">
            <div className="developer_contact__mail">jhonalexanderg@outlook.com</div>
            <div className="developer_contact__phone">(+57) 314 255 5359</div>
            <div className="developer_contact__city">Bogotá, Colombia.</div>
        </section>
    </header>
    <section className="description">
        <p>Desarrollador front-end apasionado por la tecnología, responsable respetuoso y honrado, caracterizado por su excelente cumplimiento en sus tareas y deberes, autodidacta enfocado por aprender cada día más.</p>
        <p style={{ margin: '1rem 0'}}>en desarrollo FrontEnd con conocimiento en tecnologías como lo son Javascript, React, Node.js, Express.js, MongoDB, Firebase, Gatsby, GraphQL y consumo aplicaciones REST.</p>
    </section>
    <section className="experience">
        <h2>Experience</h2>
        <span>FrontEnd engineer | KIUX S.A.S</span>
        <span>2016 | 2019</span>
    </section>
    <section className="certificates">
        <h2>Certificates</h2>
        <span> ... | ... </span>
        <span> ... | ... </span>
    </section>
    <section className="experience">
        <h2>Education</h2>
        <span>Bachiller Técnico | I.E.D Paulo Freire</span>
        <span>2010</span>
    </section>
    <section style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center' }}>
        <Icons />
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
