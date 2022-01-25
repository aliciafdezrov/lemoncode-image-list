import React from "react";
import {PicturesListComponent} from "./pictures-list.component";
import {PictureInfo} from "./pictures-list.vm";
import {useLoad} from "./pictures-list.hooks";
import {CartContext} from "../../core/cart/cart.context";
import {getPictures} from "./api/pictures-list.api";
import {mapPictureInfoListToVM} from "./pictures-list.mappers";

interface Props {
    type: string;
}

export const PicturesListContainer: React.FC<Props> = (props) => {
    const {type} = props;
    const [pictures, setPictures] = React.useState<PictureInfo[]>([]);
    const {onLoadPictures} = useLoad({
        onLoadPictures: (vm) => setPictures(vm),
    });
    const { selectedItems, selectItem } = React.useContext(CartContext);

    React.useEffect(() => {
        const copyOfPicturees = [...pictures];
        setPictures(copyOfPicturees.map(pic => ({
            ...pic,
            selected: selectedItems.some(item => item === pic.id)
        })));
    }, [selectedItems]);

    React.useEffect(() => {
        onLoadPictures(type);
    }, []);

    return (
        <PicturesListComponent pictures={pictures} onSelectPicture={selectItem}/>
    );
};
