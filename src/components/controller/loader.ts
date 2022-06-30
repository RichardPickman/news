import { Constants } from '../../constants';
import { LoaderInterface, SettingsInterface } from '../../interfaces';
import {
    settingsOptions,
    settingsEndpoint,
    callbackType,
    resType,
    callbackArgument,
    sourcesRequest,
    newsRequest,
} from '../../types';

class Loader implements LoaderInterface {
    baseLink;
    options;

    constructor(baseLink: string, options: settingsOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: SettingsInterface,
        callback: callbackType<callbackArgument> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === Constants.ERROR_401 || res.status === Constants.ERROR_404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: settingsOptions, endpoint: settingsEndpoint) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: settingsEndpoint,
        callback: callbackType<sourcesRequest | newsRequest>,
        options: settingsOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: resType) => res.json())
            .then(<T extends sourcesRequest | newsRequest>(data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
