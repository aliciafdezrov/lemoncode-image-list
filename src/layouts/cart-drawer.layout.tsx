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
import ClearAllIcon from '@mui/icons-material/ClearAll';
import {CartContext} from "../core/cart/cart.context";

export const CartDrawer: React.FC = (props) => {
    const {selectedPictures, onDeletePicture, onClearPictures} = React.useContext(CartContext);

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
                    <ShoppingCartIcon sx={{ mr: 1 }} />
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
                        onClick={() => onClearPictures()}
                    >
                        <ClearAllIcon/>
                    </IconButton>
                </Toolbar>
                <Divider/>
                <List>
                    {selectedPictures.map((picture) => (
                        <ListItem
                            key={picture.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => onDeletePicture(picture)}>
                                    <DeleteIcon/>
                                </IconButton>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar ${picture.title}`}
                                    src={picture.picUrl}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={picture.title}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
