import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
          <div
            className="full-width-image-container margin-top-0"
            style={{
              backgroundImage: `url('/img/about-index.jpg')`,
            }}
          >
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                boxShadow: '0.5rem 0 0 #BB0A21, -0.5rem 0 0 #BB0A21',
                backgroundColor: '#BB0A21',
                color: '#EDF2EF',
                padding: '1rem',
              }}
            >
              {title}
            </h1>
          </div>


          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification">
                    <figure className="image">
                      <img className='is-rounded' src='/img/calvin_microsoft.jpg'/>
                    </figure>
                  </article>
                  <article className="tile is-child notification">
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification">
                    <figure className="image">
                      <img className='is-rounded' src='/img/calvin_office.jpg'/>
                    </figure>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <PageContent className="content" content={content} />
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <div className="content">
                  <figure className="image">
                    <img className='is-rounded' src='/img/calvin_liltjay.jpg'/>
                  </figure>
                </div>
              </article>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
