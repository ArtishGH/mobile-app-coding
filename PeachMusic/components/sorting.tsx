import { Song, Album } from '../data/Database';

export const sortDataByViews = (data: (Song | Album)[]) => {
    return [...data].sort((a, b) => {
        if ('views' in a && 'views' in b) {
            return b.views - a.views;
        }
        return 0;
    });
};

export const sortDataByDate = (data: (Song | Album)[]) => {
    return [...data].sort((a, b) => {
        if ('date' in a && 'date' in b) {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA > dateB) {
                return -1;
            } else if (dateA < dateB) {
                return 1;
            }
            return 0;
        }
        return 0;
    });
};

export const sortDataByLoved = (data: (Song | Album)[]) => {
    return [...data]
        .filter(item => 'loved' in item && item.loved)
        .sort((a, b) => {
            if ('loved' in a && 'loved' in b) {
                return a.loved === b.loved ? 0 : a.loved ? -1 : 1;
            }
            return 0;
        });
};
