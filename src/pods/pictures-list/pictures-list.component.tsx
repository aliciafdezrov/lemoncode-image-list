import React from "react";
import {PicturesGrid} from "./pictures-grid";

interface Props {
    pictures: PictureInfo[];
    onSelectPicture: (id: string) => void;
}

export const PicturesListComponent: React.FC<Props> = (props) => {
    const {pictures, onSelectPicture} = props;

    return (
        <PicturesGrid pictures={pictures} onSelectPicture={onSelectPicture}/>
    );
};
