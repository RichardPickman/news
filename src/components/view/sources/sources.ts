import './sources.css';
import { SourceInterface } from '../../../interfaces';
import { sourcesItems } from '../../../types';

class Sources implements SourceInterface {
    draw(data: sourcesItems[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        data.forEach((item: sourcesItems) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
