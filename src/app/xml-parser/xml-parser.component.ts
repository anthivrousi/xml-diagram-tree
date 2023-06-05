import { Component, OnInit } from '@angular/core';
import { mxGraph } from 'mxgraph';

declare const require: any;
const mxgraph = require('mxgraph')({
  mxBasePath: 'assets/mxgraph',
});

@Component({
  selector: 'app-xml-parser',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.scss'],
})
export class XmlParserComponent implements OnInit {
  xmlContent: string = '';
  diagram: any;

  constructor() {}

  ngOnInit(): void {}

  parseXml(): void {
    const container = document.getElementById('graphContainer');
    const graph = new mxGraph(container);

    // Your XML parsing logic goes here
    // ...

    // Example code to create a simple diagram
    const parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
      const v1 = graph.insertVertex(parent, null, 'Vertex 1', 20, 20, 80, 30);
      const v2 = graph.insertVertex(parent, null, 'Vertex 2', 200, 150, 80, 30);
      graph.insertEdge(parent, null, 'Edge', v1, v2);
    } finally {
      graph.getModel().endUpdate();
    }
  }
}