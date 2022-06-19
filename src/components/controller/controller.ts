import AppLoader from './appLoader';
import { ApiEndpoints } from '../../constants';

class AppController extends AppLoader {
    getSources<T>(callback: (data: T) => void) {
        super.getResp({ endpoint: ApiEndpoints.Sources }, callback);
    }

    getNews<T>(e: Event, callback: (data: T) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({ endpoint: ApiEndpoints.Everything, options: { sources: sourceId } }, callback);
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
