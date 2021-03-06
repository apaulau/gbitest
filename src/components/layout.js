/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import StyledBackgroundSection from './index'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledBackgroundSection>
          <div
            style={{
              height: `100vh`,
              width: `100%`,
              display: `flex`,
              placeContent: `start`,
            }}
          >
            <div
              style={{
                placeSelf: `center`,
                textAlign: `center`,
                color: `#ccc`,
                height: `50vh`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                marginTop: `-5rem`,
              }}
            >
              <main>{children}</main>
            </div>
          </div>
        </StyledBackgroundSection>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
