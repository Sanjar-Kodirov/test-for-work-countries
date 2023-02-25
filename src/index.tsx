import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'app/config/apollo-client';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);

