import { Component, OnInit } from '@angular/core';
import { Document } from './document'
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'This is the description of doc.',
      file_url: 'http://google.com',
      updated_at: '27/11/2017',
      image_url: 'http://google.com',
    },
    {
      title: "My Second Doc",
      description: 'This is the description of doc.',
      file_url: 'http://google.com',
      updated_at: '27/11/2017',
      image_url: 'http://google.com',
    },
    {
      title: "My Last Doc",
      description: 'This is the description of doc.',
      file_url: 'http://google.com',
      updated_at: '27/11/2017',
      image_url: 'http://google.com',
    }
  ]

}
