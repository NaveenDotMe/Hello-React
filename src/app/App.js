import React from "react";
import HomePage from "../pages/home";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/session/login";
import NotFound from "../pages/session/NotFound";
import FlexBox from "../pages/Layout/flexBox";
import GridLayout from "../pages/Layout/Grid";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<HomePage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="flex" element={<FlexBox/>}/>
            <Route path="grid" element={<GridLayout/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
