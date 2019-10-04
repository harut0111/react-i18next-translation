import React, { Suspense } from 'react';
import Main from './component/Main';
import './App.css';
import './i18n';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
