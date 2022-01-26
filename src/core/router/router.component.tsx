import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {switchRoutes} from "./routes";
import {PicturesListScene} from "../../scenes";
import {TabsLayout} from "../../layouts";
import {CartProvider} from "../cart/cart.context";

export const RouterComponent = () => {
    return (
        <CartProvider>
            <Router>
                <TabsLayout>
                    <Routes>
                        <Route path="*" element={<Navigate to={switchRoutes.kitties} />}/>
                        <Route path={switchRoutes.kitties} element={<PicturesListScene/>}/>
                        <Route path={switchRoutes.puppies} element={<PicturesListScene/>}/>
                    </Routes>
                </TabsLayout>
            </Router>
        </CartProvider>
    );
};
