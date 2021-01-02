import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  resultClicked = new EventEmitter<SearchResult>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClicked(event: SearchResult): void {
    this.resultClicked.emit(event);
  }

}
