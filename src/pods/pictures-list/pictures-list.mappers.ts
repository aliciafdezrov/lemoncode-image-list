import * as am from './api/pictures-list.api-model';
import * as vm from './pictures-list.vm';

export const mapPictureInfoListToVM = (data: am.PictureInfo[]): vm.PictureInfo[] =>
    data.map(mapPictureInfoToVM);

const mapPictureInfoToVM = (data: am.PictureInfo): vm.PictureInfo => ({
    id: data.id,
    title: data.title,
    picUrl: data.picUrl,
    selected: false,
});
