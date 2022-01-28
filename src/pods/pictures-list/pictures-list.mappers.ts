import * as vm from './pictures-list.vm';
import * as entities from '../../core/entities';

const mapPictureEntityToVM = (data: entities.PictureInfo): vm.PictureInfo => ({
    id: data.id,
    title: data.title,
    picUrl: data.picUrl,
    selected: false,
});

export const mapPictureEntityListToVM = (data: entities.PictureInfo[]): vm.PictureInfo[] => data.map(mapPictureEntityToVM);
