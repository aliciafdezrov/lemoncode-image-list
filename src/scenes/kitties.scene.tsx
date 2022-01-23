import React from 'react';
import {PicturesListContainer} from "../pods";
import {TabsLayout} from "../layouts";

const kittiesList = [
    {
        id: 'kittie-1',
        picUrl: '../../assets/kitties/1.png',
        title: "Kittie 1",
        selected: false,
    },
    {
        id: 'kittie-2',
        picUrl: '../../assets/kitties/2.png',
        title: "Kittie 2",
        selected: false,
    },
    {
        id: 'kittie-3',
        picUrl: '../../assets/kitties/3.png',
        title: "Kittie 3",
        selected: false,
    },
    {
        id: 'kittie-4',
        picUrl: '../../assets/kitties/4.png',
        title: "Kittie 4",
        selected: false,
    },
    {
        id: 'kittie-5',
        picUrl: '../../assets/kitties/5.png',
        title: "Kittie 5",
        selected: false,
    },
    {
        id: 'kittie-6',
        picUrl: '../../assets/kitties/6.png',
        title: "Kittie 6",
        selected: false,
    },
    {
        id: 'kittie-7',
        picUrl: '../../assets/kitties/7.png',
        title: "Kittie 7",
        selected: false,
    },
    {
        id: 'kittie-8',
        picUrl: '../../assets/kitties/8.png',
        title: "Kittie 8",
        selected: false,
    },
    {
        id: 'kittie-9',
        picUrl: '../../assets/kitties/9.png',
        title: "Kittie 9",
        selected: false,
    },
    {
        id: 'kittie-10',
        picUrl: '../../assets/kitties/10.png',
        title: "Kittie 10",
        selected: false,
    },
];

export const KittiesScene: React.FC = () => {
    return (
        <TabsLayout>
            <PicturesListContainer pictures={kittiesList}/>
        </TabsLayout>
    );
};
