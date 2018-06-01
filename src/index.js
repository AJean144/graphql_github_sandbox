// import React from 'react'
// import ReactDOM from 'react-dom'
// import '../src/styles/index.css'
// import App from '../src/components/App'
// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-boost'

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
// })

// //Apollo Client
// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root'),
// )

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_SECRET_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

//Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)