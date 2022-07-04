import { MenuInterface } from '../../../interfaces';

export class Menu implements MenuInterface {
    private width;
    private isOpen;

    constructor(width: number) {
        this.width = width;

        if (width < 768) {
            this.isOpen = false
        } else {
            this.isOpen = true;
        }
    }

    show() {
        const menu = document.querySelector('.tags') as HTMLElement;

        menu.classList.add('open');
        menu.style.display = 'flex';

        this.isOpen = true;
    }

    close() {
        const menu = document.querySelector('.tags') as HTMLElement;

        menu.classList.remove('open');
        menu.style.display = 'none';

        this.isOpen = false;
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.show();
        }
    }
}
