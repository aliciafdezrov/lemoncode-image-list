import React from 'react';

interface CartContextModel {
    selectedItems: string[];
    selectItem: (id: string) => void;
}

export const CartContext = React.createContext<CartContextModel>({
    selectedItems: [],
    selectItem: (id: string) => {
        console.log('Did you forgot to add CartContext on top of your app?');
    },
});

export const CartProvider: React.FC = props => {
    const { children } = props;
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

    const handleOnSelectItems = (id: string) => {
        const newSelectedItems = [...selectedItems];

        if(newSelectedItems.some(selectedItem => selectedItem === id)) {
            const indexOfId = newSelectedItems.indexOf(id);
            newSelectedItems.splice(indexOfId, 1);
        } else {
            newSelectedItems.push(id);
        }

        setSelectedItems(newSelectedItems);
    }

    return (
        <CartContext.Provider value={{ selectedItems, selectItem: handleOnSelectItems }}>
            {children}
        </CartContext.Provider>
    );
};
