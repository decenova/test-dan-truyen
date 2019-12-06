import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://dantruyenelixirstaging.herokuapp.com/graphql/',
});

export default client;