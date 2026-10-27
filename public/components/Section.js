export class Section {
    //private items: T[];
    renderer;
    container;
    constructor({ items, renderer }, containerSelector) {
        //this.items = items;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector);
    }
    renderItems(items) {
        items.forEach((item) => {
            this.renderer(item);
        });
    }
    addItem(element) {
        this.container.append(element);
    }
}
