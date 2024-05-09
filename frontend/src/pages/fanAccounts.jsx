import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/styles.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AdminPage from "../components/AdminPage.jsx";

const FanAccountPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/fanAccounts" element={<AdminPage />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<FanAccountPage />);
