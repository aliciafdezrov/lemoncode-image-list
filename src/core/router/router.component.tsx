import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {switchRoutes} from "./routes";
import {KittiesScene, PuppiesScene} from "../../scenes";
import {CartDrawer, TabsLayout} from "../../layouts";
import {CartProvider} from "../cart/cart.context";

export const RouterComponent = () => {
    return (
        <CartProvider>
            <CartDrawer/>
            <Router>
                <TabsLayout>
                    <Routes>
                        <Route path={switchRoutes.root} element={<KittiesScene/>}/>
                        <Route path={switchRoutes.kitties} element={<KittiesScene/>}/>
                        <Route path={switchRoutes.puppies} element={<PuppiesScene/>}/>
                    </Routes>
                </TabsLayout>
            </Router>
        </CartProvider>
    );
};
