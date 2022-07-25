import React from "react";
import HomePage from "../pages/home";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/session/login";
import NotFound from "../pages/session/NotFound";
import FlexBox from "../pages/Layout/flexBox";
import GridLayout from "../pages/Layout/Grid";
import Posts from "../pages/post";

function App() {
    return (
        <Routes>
            <Route excat path="/" element={<HomePage/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="flex" element={<FlexBox/>}/>
            <Route path="grid" element={<GridLayout/>}/>
            <Route path="post" element={<Posts/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
