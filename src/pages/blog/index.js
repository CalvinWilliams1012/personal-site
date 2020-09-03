import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Mailchimp from '../../components/Mailchimp'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
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
            Latest Posts
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <Mailchimp />
            </div>
          </div>
        </section>
      
      </Layout>
    )
  }
}
