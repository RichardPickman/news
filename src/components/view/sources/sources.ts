import { SourceInterface } from '../../../interfaces';
import { sourcesItems } from '../../../types';

class Sources implements SourceInterface {
    private isHidden = true;

    draw(data: sourcesItems[]) {
        const fragment = document.querySelector('.tags__list');
        
        if (!fragment) return;
        
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        const button = document.createElement('li') as HTMLElement;
        
        button.classList.add('tags__button');
        button.textContent = `Еще ${data.length - 10}`;
        
        data.forEach((item: sourcesItems, index) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            
            if (index > 10) {
                (sourceClone.querySelector('.tags__item') as HTMLElement).setAttribute('data-hidden', 'true');
            }

            (sourceClone.querySelector('.tags__item-name') as HTMLElement).textContent = item.name;
            sourceClone.querySelector('.tags__item')?.setAttribute('data-source-id', item.id);

            fragment?.append(sourceClone);
        });

        fragment?.append(button);
        document.querySelector('.tags')?.append(fragment);

        button.addEventListener('click', (e) => {
            const hidden = document.querySelectorAll('.tags__item');

            hidden.forEach((item) => {
                const copy = item as HTMLElement;
                const viewMore = document.querySelector('.tags__button') as HTMLElement;
                
                if (copy.dataset.hidden === 'true') {
                    copy.dataset.hidden = 'false';
                    copy.style.display = 'block';
                    viewMore.textContent = 'Скрыть'; 

                    this.isHidden = false;
                } else if (copy.dataset.hidden === 'false') {
                    copy.dataset.hidden = 'true';
                    copy.style.display = 'none';
                    viewMore.textContent = `Еще ${data.length - 10}`; 

                    this.isHidden = true;
                }
            })
        })
    }
}

export default Sources;
