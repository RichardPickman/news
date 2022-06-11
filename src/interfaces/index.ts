import {
    settingsEndpoint,
    settingsOptions,
    callbackType,
    newsRequest,
    sourcesItems,
    newsType,
    sourcesRequest,
    callbackArgument,
} from '../types';

export interface LoaderInterface {
    baseLink: string;
    options: settingsOptions;
    getResp: (options: SettingsInterface, callback: callbackType<callbackArgument>) => void;
    errorHandler: (res: Response) => Response;
    makeUrl: (options: settingsOptions, endpoint: settingsEndpoint) => string;
    load: (
        method: string,
        endpoint: settingsEndpoint,
        callback: callbackType<callbackArgument>,
        options?: settingsOptions
    ) => void;
}

export interface AppControllerInterface extends LoaderInterface {
    getSources: (callback: callbackType<sourcesRequest>) => void;
    getNews: (e: Event, callback: callbackType<newsRequest>) => void;
}

export interface SettingsInterface {
    endpoint: settingsEndpoint;
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
