import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '@app/search/Models/SearchResult.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {

  @Input()
  list$?: Observable<SearchResult[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
