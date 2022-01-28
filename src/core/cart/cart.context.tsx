import React from 'react';
import {PictureInfo} from "../entities";

interface CartContextModel {
    selectedPictures: PictureInfo[];
    setSelectedPictures: (pictures: PictureInfo[]) => void;
}

export const CartContext = React.createContext<CartContextModel>({
    selectedPictures: [],
    setSelectedPictures: () => {
        console.log('Did you forgot to add CartContext on top of your app?');
    }
});

export const CartProvider: React.FC = props => {
    const {children} = props;
    const [selectedPictures, setSelectedPictures] = React.useState<PictureInfo[]>([]);

    return (
        <CartContext.Provider
            value={{
                selectedPictures,
                setSelectedPictures,
            }}>
            {children}
        </CartContext.Provider>
    );
};
