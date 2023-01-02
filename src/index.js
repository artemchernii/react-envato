import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';
import AdminLayout from './AdminLayout';
import Admin from './Admin';
import News from './News';
import NewsResults from './NewsResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Router>
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<Home />}></Route>
                {/*<Route path="/news/:newsTopic?query=:title" element={<News />}>*/}
                <Route path="/news" element={<News />}>
                    <Route path=":newsTopic" element={<NewsResults />}></Route>
                </Route>
            </Route>
            <Route element={<AdminLayout />}>
                <Route path="/admin" element={<Admin />}></Route>
            </Route>
        </Routes>
    </Router>
    // </React.StrictMode>
);
