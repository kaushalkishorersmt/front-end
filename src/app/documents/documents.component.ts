import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }


  // documents: Document[] = [
  //   {
  //     title: "My first Doc",
  //     description: 'This is the description of doc.',
  //     file_url: 'http://google.com',
  //     updated_at: '27/11/2017',
  //     image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
  //   },
  //   {
  //     title: "My Second Doc",
  //     description: 'This is the description of doc.',
  //     file_url: 'http://google.com',
  //     updated_at: '27/11/2017',
  //     image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
  //   },
  //   {
  //     title: "My Last Doc",
  //     description: 'This is the description of doc.',
  //     file_url: 'http://google.com',
  //     updated_at: '27/11/2017',
  //     image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
  //   }
  // ]

}
