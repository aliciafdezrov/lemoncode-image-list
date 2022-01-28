import React from "react";
import {PicturesGrid} from "./components/pictures-grid";
import {PictureInfo} from "./pictures-list.vm";

interface Props {
    pictures: PictureInfo[];
}

export const PicturesListComponent: React.FC<Props> = (props) => {
    const {pictures} = props;

    return (
        <PicturesGrid pictures={pictures}/>
    );
};
