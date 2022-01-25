import {PictureInfo} from "./pictures-list.api-model";

const kittiesList = [
    {
        id: 'kittie-1',
        picUrl: '../../assets/kitties/1.png',
        title: "Kittie 1",
    },
    {
        id: 'kittie-2',
        picUrl: '../../assets/kitties/2.png',
        title: "Kittie 2",
    },
    {
        id: 'kittie-3',
        picUrl: '../../assets/kitties/3.png',
        title: "Kittie 3",
    },
    {
        id: 'kittie-4',
        picUrl: '../../assets/kitties/4.png',
        title: "Kittie 4",
    },
    {
        id: 'kittie-5',
        picUrl: '../../assets/kitties/5.png',
        title: "Kittie 5",
    },
    {
        id: 'kittie-6',
        picUrl: '../../assets/kitties/6.png',
        title: "Kittie 6",
    },
    {
        id: 'kittie-7',
        picUrl: '../../assets/kitties/7.png',
        title: "Kittie 7",
    },
    {
        id: 'kittie-8',
        picUrl: '../../assets/kitties/8.png',
        title: "Kittie 8",
    },
    {
        id: 'kittie-9',
        picUrl: '../../assets/kitties/9.png',
        title: "Kittie 9",
    },
    {
        id: 'kittie-10',
        picUrl: '../../assets/kitties/10.png',
        title: "Kittie 10",
    },
];

const puppiesList = [
    {
        id: 'puppie-1',
        picUrl: '../../assets/puppies/1.png',
        title: "Puppie 1",
    },
    {
        id: 'puppie-2',
        picUrl: '../../assets/puppies/2.png',
        title: "Puppie 2",
    },
    {
        id: 'puppie-3',
        picUrl: '../../assets/puppies/3.png',
        title: "Puppie 3",
    },
    {
        id: 'puppie-4',
        picUrl: '../../assets/puppies/4.png',
        title: "Puppie 4",
    },
    {
        id: 'puppie-5',
        picUrl: '../../assets/puppies/5.png',
        title: "Puppie 5",
    },
    {
        id: 'puppie-6',
        picUrl: '../../assets/puppies/6.png',
        title: "Puppie 6",
    },
    {
        id: 'puppie-7',
        picUrl: '../../assets/puppies/7.png',
        title: "Puppie 7",
    },
    {
        id: 'puppie-8',
        picUrl: '../../assets/puppies/8.png',
        title: "Puppie 8",
    },
    {
        id: 'puppie-9',
        picUrl: '../../assets/puppies/9.png',
        title: "Puppie 9",
    },
    {
        id: 'puppie-10',
        picUrl: '../../assets/puppies/10.png',
        title: "Puppie 10",
    },
];

export const getPictures = (type: string): PictureInfo[] => {
    if (type === "kitties") {
        return kittiesList;
    }
    return puppiesList;
};
