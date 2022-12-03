import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

/* 
    Folder structure
        **src
            ***components
            ***constants
            ***context
            ***helpers
            ***hooks
            ***pages
            ***lib(firebase is goin to live in here)
            ***services(firebase functions in here)
            ***styles(tailwind's folder (app/tailwind))


*/