import React from "react";
import {PicturesGrid} from "./pictures-grid";
import {PictureInfo} from "./pictures-list.vm";

interface Props {
    pictures: PictureInfo[];
    onSelectPicture: (picture: PictureInfo) => void;
    onDeselectPicture: (picture: PictureInfo) => void;
}

export const PicturesListComponent: React.FC<Props> = (props) => {
    const {pictures, onSelectPicture, onDeselectPicture} = props;

    return (
        <PicturesGrid pictures={pictures} onSelectPicture={onSelectPicture}
                      onDeselectPicture={onDeselectPicture}/>
    );
};
