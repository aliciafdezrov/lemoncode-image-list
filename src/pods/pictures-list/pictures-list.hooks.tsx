import React from 'react';
import {PictureInfo} from "./pictures-list.vm";
import {mapPictureInfoListToVM} from "./pictures-list.mappers";
import {getPictures} from "./api/pictures-list.api";
import {CartContext} from "../../core/cart/cart.context";

interface Props {
    onLoadPictures: (vm: PictureInfo[]) => void;
}

export const useLoad = (props: Props) => {
    const getPicturesFromApi = (type: string) => {
        try {
            const apiList = getPictures(type);
            const vmList = mapPictureInfoListToVM(apiList);
            return vmList;
        } catch (error) {
            return [];
        }
    };

    return {
        onLoadPictures: getPicturesFromApi,
    };
};
