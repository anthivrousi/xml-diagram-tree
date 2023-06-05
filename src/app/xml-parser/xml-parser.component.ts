import { Component } from '@angular/core';
import { xml2js } from 'xml-js';

@Component({
  selector: 'app-xml-parser',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.scss']
})
export class XmlParserComponent {
  xmlContent: string;

  constructor() {
    this.xmlContent = '';
  }
  parseXml(xml: string): void {
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    const result = xml2js(xml, options);
  
    console.log(result);
  }
}
