import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {CartContext} from "../core/cart/cart.context";

export const CartDrawer: React.FC = (props) => {
    const {selectedItems, selectItem} = React.useContext(CartContext);

    const handleOnClickDelete = (item: string) => {
        selectItem(item);
    }

    return (
        <Box sx={{display: 'flex'}}>
            <Drawer
                sx={{
                    width: 300,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 300,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Toolbar style={{minHeight: 48}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 2}}
                    >
                        <ShoppingCartIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Cart
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {selectedItems.map((item, index) => (
                        <ListItem
                            key={item}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => handleOnClickDelete(item)}>
                                    <DeleteIcon/>
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <ShoppingCartIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
