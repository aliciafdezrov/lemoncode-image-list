import React from "react";
import {PicturesListComponent} from "./pictures-list.component";
import {PictureInfo} from "./pictures-list.vm";
import {CartContext} from "../../core/cart/cart.context";
import {mapPictureEntityListToVM} from "./pictures-list.mappers";
import * as entities from "../../core/entities";

interface Props {
    picturesList: entities.PictureInfo[];
}

export const PicturesListContainer: React.FC<Props> = (props) => {
    const {picturesList} = props;
    const [pictures, setPictures] = React.useState<PictureInfo[]>([]);
    const {selectedPictures} = React.useContext(CartContext);

    React.useEffect(() => {
        const vmList = mapPictureEntityListToVM(picturesList);
        setPictures(vmList.map(pic => ({
            ...pic,
            selected: selectedPictures.some(picture => picture.id === pic.id)
        })));
    }, [picturesList, selectedPictures]);

    return (
        <PicturesListComponent pictures={pictures}/>
    );
};
