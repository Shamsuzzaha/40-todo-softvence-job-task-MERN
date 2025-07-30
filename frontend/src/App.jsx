import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/dashboardPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import ResetPassPage from "./pages/resetPassPage.jsx";
import SignupPage from "./pages/signupPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/forget-password" element={<ResetPassPage/>} />
                <Route path="/signup" element={<SignupPage/>} />

                <Route path="/" element={<DashboardPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;