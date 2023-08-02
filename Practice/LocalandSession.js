import React, { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  
  const handleDataChange = (event) => {
    setData(event.target.value);
  }
  
  const handleSaveLocal = () => {
    localStorage.setItem('localData', data);
    setData('');
  }
  
  const handleSaveSession = () => {
    sessionStorage.setItem('sessionData', data);
    setData('');
  }
  
  const handleLoadLocal = () => {
    const localData = localStorage.getItem('localData');
    setData(localData || '');
  }
  
  const handleLoadSession = () => {
    const sessionData = sessionStorage.getItem('sessionData');
    setData(sessionData || '');
  }
  
  return (
    <div>
      <h2>Local Storage and Session Storage Example</h2>
      <input type="text" value={data} onChange={handleDataChange} />
      <button onClick={handleSaveLocal}>Save to Local Storage</button>
      <button onClick={handleSaveSession}>Save to Session Storage</button>
      <button onClick={handleLoadLocal}>Load from Local Storage</button>
      <button onClick={handleLoadSession}>Load from Session Storage</button>
      <div>
        <h3>Stored Data:</h3>
        <p>Local Storage: {localStorage.getItem('localData')}</p>
        <p>Session Storage: {sessionStorage.getItem('sessionData')}</p>
      </div>
    </div>
  );
}

export default App;
