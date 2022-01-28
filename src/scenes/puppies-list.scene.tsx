import React from 'react';
import {PicturesListContainer} from "../pods";

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

export const PuppiesListScene: React.FC = () => {
    return (
        <PicturesListContainer picturesList={puppiesList}/>
    );
};
