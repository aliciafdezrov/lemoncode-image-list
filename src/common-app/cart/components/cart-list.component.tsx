import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {CartContext} from "../../../core/cart/cart.context";
import {PictureInfo} from "../../../core/entities";

export const CartList: React.FC = () => {
    const {selectedPictures, setSelectedPictures} = React.useContext(CartContext);

    const handleOnDeletePicture = (picture: PictureInfo) => {
        const copyOfSelectedPictures = [...selectedPictures];
        const picIndex = copyOfSelectedPictures.findIndex(pic => pic.id === picture.id);
        copyOfSelectedPictures.splice(picIndex, 1);
        setSelectedPictures(copyOfSelectedPictures);
    }

    return (
        <List>
            {selectedPictures.map((picture) => (
                <ListItem
                    key={picture.id}
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleOnDeletePicture(picture)}>
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
    );
};
