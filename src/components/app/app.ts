import { newsRequest, sourcesRequest } from '../../types';
import AppLoader from '../controller/controller';
import { AppView } from '../view/appView';
import { Menu } from '../view/menu'

class App {
    private controller;
    private view;
    private menu;

    constructor() {
        this.controller = new AppLoader();
        this.view = new AppView();
        this.menu = new Menu(window.innerWidth);
    }

    start() {
        const sources = document.querySelector('.tags__list');
        const burger = document.querySelector('.burger-logo');
        
        burger?.addEventListener('click', (e) => { e.preventDefault(); this.menu.toggle() });

        if (sources !== null) {
            sources.addEventListener('click', (e) => {
                e.preventDefault();
                this.controller.getNews(e, (data: newsRequest) => this.view.drawNews(data))
            });
            this.controller.getSources((data: sourcesRequest) => this.view.drawSources(data));
        } else {
            return;
        }
    }
}

export default App;
