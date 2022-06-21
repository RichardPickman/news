import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', { apiKey: process.env.NEWS_API });
    }
}

export default AppLoader;
