import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Node, generateId } from './tree';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ChildComponent } from './tree-node.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Tree View';

    rootNodes: Array<Node> = [];
    add(name) {
        let newNode = {
            id: generateId(this.rootNodes.length),
            name: name.trim(),
            offset: 0,
            sub_nodes: []
        };

        name = name.trim()
        for (let i of this.rootNodes) {
            if (i.name == name) {
                alert('Enter different name.  Name  "' + i.name + '"  is not avaliable');
                return;
            };
        };
        this.rootNodes.push(newNode);
    };

    arr_log() {
        console.log(this.rootNodes);
    };
}