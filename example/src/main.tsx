import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@acrool/react-auto-height-textarea/dist/index.css';
import '@acrool/react-table/dist/index.css';
import '@acrool/react-table/dist/themes/acrool.css';
import '@acrool/react-grid/dist/index.css';
import '@acrool/react-dropdown/dist/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>,
);
