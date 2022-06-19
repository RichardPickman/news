import {
    settingsOptions,
    newsRequest,
    sourcesItems,
    newsType,
    sourcesRequest,
} from '../types';

import { ApiEndpoints } from '../constants';

export interface LoaderInterface {
    baseLink: string;
    options: settingsOptions;
    getResp: <T>(options: SettingsInterface, callback: (data: T) => void) => void;
    errorHandler: (res: Response) => Response;
    makeUrl: (options: settingsOptions, endpoint: ApiEndpoints) => string;
    load: <T>(
        method: string,
        endpoint: ApiEndpoints,
        callback: (data: T) => void,
        options?: settingsOptions
    ) => void;
}

export interface AppControllerInterface extends LoaderInterface {
    getSources: <T>(callback: (data: T) => void) => void;
    getNews: <T>(e: Event, callback: (data: T) => void) => void;
}

export interface SettingsInterface {
    endpoint: ApiEndpoints;
    options?: settingsOptions;
}

export interface AppViewInterface {
    news: NewsInteface;
    sources: SourceInterface;

    drawNews: (data: newsRequest) => void;
    drawSources: (data: sourcesRequest) => void;
}

export interface SourceInterface {
    draw: (data: sourcesItems[]) => void;
}

export interface NewsInteface {
    draw: (data: newsType[]) => void;
}
