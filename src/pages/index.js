import React from 'react'
// import { Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SocialNetworks from '../components/social_networks';
import Certificados from '../components/certificados';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="encabezado">
        <section className="developer">
            <div className="developer__photo" >
              <div style={{ maxWidth: `335px` }}>
                <Image />
              </div>
            </div>
            <h2 className="developer__position" style={{ textAlign: 'center' }} >Front-end Developer</h2>
            <h3 className="developer__name" style={{ textAlign: 'center' }} >jhon alexander gil beltrán</h3>
        </section>
        <section className="description">
            <p>Desarrollador front-end autodidacta y apasionado por aprender mucho más cada día, con un gran conocimiento en tecnologías como lo son Javascript, React, Node.js por mensionar algunas.</p>
            <SocialNetworks />
        </section>
        {/* <section className="developer_contact">
            <div className="developer_contact__mail"></div>
            <div className="developer_contact__phone"></div>
            <div className="developer_contact__city">Bogotá, Colombia.</div>
        </section> */}
    </header>
    <main>
        <section>
            <article className="seccion">
                <h2>Experiencia laboral</h2>
                <section>
                    FrontEnd engineer || KIUX S.A.S || 2016 - 2019
                </section>
                <section>
                    Auxiliar del servicio de atención al cliente || SOLMAQ BUNZL || 2015
                </section>
                <section>
                    Soporte técnico || INTEGRA TIC S.A.S || 2014
                </section>
            </article>
        </section>
        <section>
            <article className="seccion">
                <Certificados />
            </article>
        </section>
        <section>
            <article className="seccion">
                <h2>Education</h2>
                <span>Bachiller Técnico | I.E.D Paulo Freire</span> <span>2010</span>
            </article>
        </section>
    </main>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
