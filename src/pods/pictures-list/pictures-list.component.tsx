import React from "react";
import {PicturesGrid} from "./pictures-grid";

interface Props {
    pictures: PictureInfo[];
}

export const PicturesListComponent: React.FC<Props> = (props) => {
    const {pictures} = props;

    return (
        <PicturesGrid pictures={pictures}/>
    );
};
