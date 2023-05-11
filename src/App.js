import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './utils/AuthProvider';
import Router from './utils/Router'
import { Navbar } from './components';

function App() {
  return (
    <>
      <AuthProvider>
        {/* <Navbar /> */}
        <Router />
      </AuthProvider>
    </>

  )
}

export default App