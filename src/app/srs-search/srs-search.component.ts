import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Response, Request, Headers } from '@angular/http';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'srs-search',
  templateUrl: './srs-search.component.html',
  styleUrls: ['./srs-search.component.css']
})
export class SrsSearchComponent implements OnInit {

  private searchField:FormControl;
  private searchForm: FormGroup;

  private searchString:string = "";

  private searchResults: any[] = [];

  constructor(private http:Http, private fb:FormBuilder) { } 

  ngOnInit() {

    this.searchField = new FormControl();
    this.searchForm = this.fb.group({search: this.searchField});

    this.searchField.valueChanges
      .debounceTime(500)
      .filter(term => term.length > 3)
      .flatMap(term => this.search(term))
      .subscribe(response => {
        this.searchResults = response.json();
      });

  }

  private search(term: string) {
    let body = {
      Language: 'de',
      SearchType: 'Event',
      SearchTerm: term,
      TemplateName: 'Web',
      IsFuzzy: false
    };
    let headers = new Headers({'Content-Type': 'application/json', 'Client-Token': 'mbs:1:12:105720::1'});
    let options = new RequestOptions({headers: headers});
    return this.http
      .post("http://devsrs.bgt.ag:80/SportscontentRetrievalService/api/search", JSON.stringify(body), options);
  }

}
