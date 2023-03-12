import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { Link } from 'gatsby'
const About = () => {
  return (
    <Layout>
    <Seo title="Home" />
    <AboutContainer>
      <p>Nothing to see here, this is just a <Span>contact</Span> filler page for this project</p>
      <p>However, it can be customized anyhow we deem fit</p>
      <LinkBackToHome to="/">Go back to home page</LinkBackToHome>
    </AboutContainer>
    </Layout>
  )
}

export default About

const AboutContainer = styled.div`
height: 100%;
padding: 5rem calc((100vw - 1300px) / 2);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
  color: #000;
  text-align: center;
  margin-bottom: 10px;

}
`
const Span = styled.span`
font-weight: bold;
`
const LinkBackToHome = styled(Link)`
text-decoration: none;
color: blue;
text-align: center;
`

