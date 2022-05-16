import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';

import './style/App.css';

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
