import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ContextProvider from '../Context/Context.jsx'; // Assuming this is your context provider component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider> 
      <App />
    </ContextProvider>
  </StrictMode>
);
