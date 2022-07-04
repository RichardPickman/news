import { SourceInterface, NewsInteface, AppViewInterface } from '../../interfaces';
import { newsRequest, sourcesRequest } from '../../types';
import Sources from './sources/sources';
import News from './news/news';

export class AppView implements AppViewInterface {
    news: NewsInteface;
    sources: SourceInterface;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: newsRequest) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourcesRequest) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
