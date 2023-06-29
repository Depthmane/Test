import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import Error from "../Pages/Error";
import PostIdPage from "../Pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostIdPage/>}/>
            <Route exact path="/error" element={<Error/>}/>
            <Route
                exact path="*"
                element={<Navigate to="/error" replace/>}
            />
        </Routes>
    );
};

export default AppRouter;