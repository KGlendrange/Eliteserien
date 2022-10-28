import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {GetTeams} from './GetTeams'

import "./main.css";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://resultatservice-api.stage-sumo.tv2.no/api/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
   </ApolloProvider>
  </React.StrictMode>
)
