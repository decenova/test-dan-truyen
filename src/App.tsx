import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './utils/apollo-client/ApolloClient';
import './App.css';
import { Home } from './components/Home';

import 'antd/dist/antd.css';

const App: React.FC = () => {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
