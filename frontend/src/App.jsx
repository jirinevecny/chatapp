import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Bonjour! 👋</h1>
      <p>Welcome to ChatApp</p>
      <p style={{ color: '#666' }}>Hello World from the frontend!</p>
    </div>
  );
}

export default App;
