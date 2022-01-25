import React from 'react';
import * as classes from "./pictures-grid.styles";
import {PictureGridItem} from "./picture-grid-item.component";

interface Props {
    pictures: PictureInfo[];
    onSelectPicture: (id: string) => void;
}

export const PicturesGrid: React.FC<Props> = (props) => {
    const {pictures, onSelectPicture} = props;

    return (
        <div>
            <div className={classes.gridContainer}>
                {
                    pictures.map(picture => <PictureGridItem key={picture.id} picture={picture}
                                                             onSelectPicture={onSelectPicture}/>)
                }
            </div>
        </div>
    );
};
