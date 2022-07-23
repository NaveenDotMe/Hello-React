import React from "react";
import HomePage from "../pages/home";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/session/login";
import NotFound from "../pages/session/NotFound";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<HomePage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
