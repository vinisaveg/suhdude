import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import ContextProvider from './context/AppContext';

import './index.css';

ReactDOM.render(
    <ContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ContextProvider>,
    document.getElementById('root')
);
