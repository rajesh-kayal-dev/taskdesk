import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

function App() {
  return (
    <main>
      <h1>TaskDesk</h1>
      <p>React renderer is working inside Electron.</p>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);