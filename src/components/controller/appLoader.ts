import Loader from './loader';
import { LoaderInterface } from '../../interfaces';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: process.env.NEWS_API, // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
