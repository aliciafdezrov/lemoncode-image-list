import * as vm from './pictures-list.vm';
import * as entities from '../../core/entities';

export const mapPictureInfoVMToEntity = (data: vm.PictureInfo): entities.PictureInfo => ({
    id: data.id,
    title: data.title,
    picUrl: data.picUrl,
});

export const mapPictureInfoListVMToEntity = (data: vm.PictureInfo[]): entities.PictureInfo[] => data.map(mapPictureInfoVMToEntity);


const mapPictureEntityToVM = (data: entities.PictureInfo): vm.PictureInfo => ({
    id: data.id,
    title: data.title,
    picUrl: data.picUrl,
    selected: false,
});

export const mapPictureEntityListToVM = (data: entities.PictureInfo[]): vm.PictureInfo[] => data.map(mapPictureEntityToVM);
