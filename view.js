export default class View {
    constructor() {
        this.box = document.querySelector('.box');
        this.heading = document.querySelector('.heading');
        this.circle = `<div class="circle"></div>`
        this.cross = ` <div class="cross"><div></div><div></div></div>`

    }
    setHeading = (heading) => {
        this.heading.innerHTML = heading;
    }
    createCells = () => {
        for (let i = 0; i < 9; i++) {
            this.box.appendChild(this.createNode('div', 'cell', ''))
        }
    }

    createNode = (htmlTag, className, content) => {
        let node = document.createElement(htmlTag);
        node.className = className;
        node.innerHTML = content;
        return node;

    }
    createButton = (message) => {
        let divNode = this.createNode('div', 'message', message)
        let buttonNode = this.createNode('button', 'btn', 'Restart')
        this.box.appendChild(divNode);
        this.box.appendChild(buttonNode)
    }
    clearBox = () => {
        this.box.innerHTML = '';
    }
    clearHeading = () => {
        this.heading.innerHTML = '';
    }
}