import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {switchRoutes} from "./routes";
import {KittiesListScene, PuppiesListScene} from "../scenes";
import {CartProvider} from "../core/cart/cart.context";
import {AppLayout, TabsLayout} from "../layouts";

export const RouterComponent = () => {
    return (
        <CartProvider>
            <AppLayout>
                <Router>
                    <TabsLayout>
                        <Routes>
                            <Route path="*" element={<Navigate to={switchRoutes.kitties}/>}/>
                            <Route path={switchRoutes.kitties} element={<KittiesListScene/>}/>
                            <Route path={switchRoutes.puppies} element={<PuppiesListScene/>}/>
                        </Routes>
                    </TabsLayout>
                </Router>
            </AppLayout>
        </CartProvider>
    );
};
