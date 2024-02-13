import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
const remoteElement = document.getElementById('root');
const remote = createRoot(remoteElement);
remote.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
