import { callbackArgument, newsRequest, sourcesRequest } from '../../types';
import AppLoader from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller;
    private view;

    constructor() {
        this.controller = new AppLoader();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources');

        if (sources !== null) {
            sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
            this.controller.getSources((data) => this.view.drawSources(data));
        } else {
            return;
        }
    }
}

export default App;
