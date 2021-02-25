import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';
import Routes from 'routes';
import './index.css';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
}

export default App;
