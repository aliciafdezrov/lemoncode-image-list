import React from 'react';
import {PictureInfo} from "../entities";

interface CartContextModel {
    selectedPictures: PictureInfo[];
    onAddPicture: (picture: PictureInfo) => void;
    onDeletePicture: (picture: PictureInfo) => void;
    onClearPictures: () => void;
}

export const CartContext = React.createContext<CartContextModel>({
    selectedPictures: [],
    onAddPicture: (picture: PictureInfo) => {
        console.log('Did you forgot to add CartContext on top of your app?');
    },
    onDeletePicture: (picture: PictureInfo) => {
        console.log('Did you forgot to add CartContext on top of your app?');
    },
    onClearPictures: () => {
        console.log('Did you forgot to add CartContext on top of your app?');
    }
});

export const CartProvider: React.FC = props => {
    const {children} = props;
    const [selectedPictures, setSelectedPictures] = React.useState<PictureInfo[]>([]);

    const handleOnAddPicture = (picture: PictureInfo) => {
        const copyOfSelectedPictures = [...selectedPictures];
        copyOfSelectedPictures.push(picture);
        setSelectedPictures(copyOfSelectedPictures);
    }

    const handleOnDeletePicture = (picture: PictureInfo) => {
        const copyOfSelectedPictures = [...selectedPictures];
        const picIndex = copyOfSelectedPictures.findIndex(pic => pic.id === picture.id);
        copyOfSelectedPictures.splice(picIndex, 1);
        setSelectedPictures(copyOfSelectedPictures);
    }

    const handleOnClearPictures = () => {
        setSelectedPictures([]);
    }

    return (
        <CartContext.Provider
            value={{
                selectedPictures,
                onAddPicture: handleOnAddPicture,
                onDeletePicture: handleOnDeletePicture,
                onClearPictures: handleOnClearPictures
            }}>
            {children}
        </CartContext.Provider>
    );
};
