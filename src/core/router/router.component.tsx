import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {switchRoutes} from "./routes";
import {KittiesScene, PuppiesScene} from "../../scenes";

export const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={switchRoutes.root} element={<KittiesScene/>}/>
                <Route path={switchRoutes.kitties} element={<KittiesScene/>}/>
                <Route path={switchRoutes.puppies} element={<PuppiesScene/>}/>
            </Routes>
        </Router>
    );
};
