import React from "react";
import {PicturesListComponent} from "./pictures-list.component";

interface Props {
    pictures: PictureInfo[];
}

export const PicturesListContainer: React.FC<Props> = (props) => {
    const {pictures} = props;

    return (
        <PicturesListComponent pictures={pictures}/>
    );
};
