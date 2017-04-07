import { Component, Input, OnInit } from '@angular/core';
import { Node, generateId } from './tree';

let NODES: Node[] = [];

@Component({
  selector: 'node-detail',
  templateUrl: `./tree-node.component.html`,
  styleUrls: ['./tree-node.component .css']
})

export class ChildComponent implements OnInit {
  @Input() node: Node;

  label: string = '';

  // Public
  add(sub_nodes, offset, name) {

    let newNode: Node = {
      id: generateId(sub_nodes.length),
      offset: offset + 1,
      name: name,
      sub_nodes: []
    };

    this.node.sub_nodes.push(newNode);
  }

  ngOnInit() {
    this.label = this.node.name;
    if (this.node.offset) {
      this.label += '' + this.node.offset + <string>this.node.id;
    }
  }
}