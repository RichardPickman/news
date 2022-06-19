import { LoaderInterface, SettingsInterface } from '../../interfaces';
import {
    settingsOptions,
    callbackType,
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

    getResp<T>(
        { endpoint, options = {} }: SettingsInterface,
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: settingsOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => { url += `${key}=${urlOptions[key]}&` });

        return url.slice(0, -1);
    }

    load<T>(
        method: string,
        endpoint: string,
        callback: (data: T) => void,
        options: settingsOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
