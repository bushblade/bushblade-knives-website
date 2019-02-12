import React from 'react'

import Layout from '../components/layout/layout'
import { NarrowContainer } from '../components/layout/styledComponents'

const NotFoundPage = ({ location }) => {
  console.log(location.pathname)
  return (
    <Layout pageTitle="404:" tagline="not found">
      <NarrowContainer>
        <article
          style={{
            maxWidth: '600px',
            margin: 'auto',
            textAlign: 'center',
            marginBottom: '15rem',
          }}
        >
          <h2 style={{ color: '#a94442' }}>ROUTE NOT FOUND</h2>
          <p>
            😭
            <strong> {location.pathname}</strong> does not exist on this site...
            yet.
            <br />
            Don't be sad, try one of the other links. 😎
          </p>
        </article>
      </NarrowContainer>
    </Layout>
  )
}

export default NotFoundPage
