import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost/iipn-wordpress/graphql', // Replace with your actual site
  cache: new InMemoryCache(),
});

export default client;
