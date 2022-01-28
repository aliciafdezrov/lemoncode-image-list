import React from "react";
import Toolbar from '@mui/material/Toolbar';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import {CartContext} from "../../../core/cart/cart.context";
import {styled} from "@mui/material/styles";

const ToolbarHeader = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export const CartHeader: React.FC = () => {
    const {selectedPictures, setSelectedPictures} = React.useContext(CartContext);
    const shouldDisplayClearButton = Boolean(selectedPictures.length);

    const handleOnClearPictures = () => {
        setSelectedPictures([]);
    }

    return (
        <ToolbarHeader>
            <ShoppingCartIcon sx={{mr: 1}}/>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
            >
                Cart
            </Typography>

            <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="clear cart shopping"
                onClick={handleOnClearPictures}
                sx={{display: shouldDisplayClearButton ? 'visible' : 'none'}}
            >
                <ClearAllIcon/>
            </IconButton>
        </ToolbarHeader>
    );
};
