import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
    <section className="skills">
        <div className="skills__item">
            <div className="logo">
                <img src="./img/html5.svg" alt="HTML" />
            </div>
            <span>HTML</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/css-5.svg" alt="CSS" />
            </div>
            <span>CSS</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/javascript.svg" alt="Javascript" />
            </div>
            <span>Javascript</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/react.svg" alt="React" />
            </div>
            <span>React</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/react-router.svg" alt="React Router" />
            </div>
            <span>React Router</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/redux.svg" alt="Redux" />
            </div>
            <span>Redux</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/webpack.svg" alt="Webpack" />
            </div>
            <span>Webpack</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/node.js.svg" alt="Node" />
            </div>
            <span>Node.js</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/express.js.svg" alt="Express" />
            </div>
            <span>Express.js</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/firebase-2.svg" alt="Firebase" />
            </div>
            <span>Firebase</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/mongodb.svg" alt="MongoDB" />
            </div>
            <span>MongoDB</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/graphql.svg" alt="GraphQL" />
            </div>
            <span>GraphQL</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/gatsby.svg" alt="Gatsby" />
            </div>
            <span>Gatsby</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/pwa.svg" alt="PWA" />
            </div>
            <span>Progresive web app</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/git-icon.svg" alt="Git" />
            </div>
            <span>Git</span>
        </div>
        <div className="skills__item">
            <div className="logo">
                <img src="./img/github-1.svg" alt="GitHub" />
            </div>
            <span>GitHub</span>
        </div>
    </section>

    
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
