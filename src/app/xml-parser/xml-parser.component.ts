import { Component, OnInit } from '@angular/core';

// Declare mxGraph as any type to bypass TypeScript type checking
declare const mxGraph: any;

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

  //The parseXml method is called when a button or an event triggers
  parseXml(): void {
    // Get the container element where the graph will be rendered
    const container = document.getElementById('graphContainer');
    
    // Create a new instance of mxGraph
    const graph = new mxGraph(container);

    // Your XML parsing logic goes here

    // Example code to create a simple diagram
    const parent = graph.getDefaultParent();
    graph.getModel().beginUpdate();
    try {
      // The insertVertex method is used to insert two vertices (v1 and v2) in the graph, specifying their positions and dimensions.
      const v1 = graph.insertVertex(parent, null, 'Vertex 1', 20, 20, 80, 30);
      const v2 = graph.insertVertex(parent, null, 'Vertex 2', 200, 150, 80, 30);
      
      // The insertEdge method is used to insert an edge between the two vertices.
      graph.insertEdge(parent, null, 'Edge', v1, v2);
    } finally {
      graph.getModel().endUpdate();
    }
  }
}