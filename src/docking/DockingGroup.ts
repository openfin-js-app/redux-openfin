import DockingWindow from './DockingWindow';

export default class DockingGroup{

    children:DockingWindow[] = [];

    add(window:DockingWindow){
        if (window.group === this){
            return;
        }

        this.children.push(window);
        window.group = this;
    }

    remove(window:DockingWindow){
        const index = this.children.indexOf(window);
        if (index >= 0){
            this.children.splice(index,1);
            window.group = null;
        }
    }

}