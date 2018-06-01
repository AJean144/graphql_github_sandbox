import React from 'react'

import { Query } from 'react-apollo'
import { GITHUB_QUERY } from '../queries/githubQuery'

import Layout from './UIKit/Layout'
import AppLayout from './AppLayout'

const App = () => {
  return (
    <Query query={GITHUB_QUERY}>
      {props => {
        const { loading, error } = props

        if (loading) {
          return <Layout>Loading</Layout>
        }

        if (error) {
          return <Layout>An unexpected error occurred</Layout>
        }
        return <AppLayout {...props} />
      }
      }
    </Query>
  )
}

export default App
