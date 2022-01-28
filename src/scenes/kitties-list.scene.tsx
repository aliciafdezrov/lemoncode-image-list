import React from 'react';
import {PicturesListContainer} from "../pods";

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

export const KittiesListScene: React.FC = () => {
    return (
        <PicturesListContainer picturesList={kittiesList}/>
    );
};
