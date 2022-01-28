import React from "react";
import Divider from '@mui/material/Divider';
import {CartHeader} from "./components/cart-header.component";
import {CartList} from "./components/cart-list.component";

export const Cart: React.FC = () => {
    return (
        <>
            <CartHeader/>
            <Divider/>
            <CartList/>
        </>
    );
};
