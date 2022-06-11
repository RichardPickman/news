import AppLoader from './appLoader';
import { callbackType, callbackArgument } from '../../types';
import { Constants } from '../../constants';

class AppController extends AppLoader {
    getSources(callback: callbackType<callbackArgument>) {
        super.getResp({ endpoint: Constants.Sources }, callback);
    }

    getNews(e: Event, callback: callbackType<callbackArgument>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({ endpoint: Constants.Everything, options: { sources: sourceId } }, callback);
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;