import React from 'react';
import * as classes from "./pictures-grid.styles";
import {PictureGridItem} from "./picture-grid-item.component";
import {PictureInfo} from "../../pictures-list.vm";

interface Props {
    pictures: PictureInfo[];
}

export const PicturesGrid: React.FC<Props> = (props) => {
    const {pictures} = props;

    return (
        <div>
            <div className={classes.gridContainer}>
                {
                    pictures.map(picture => <PictureGridItem key={picture.id} picture={picture}/>)
                }
            </div>
        </div>
    );
};
